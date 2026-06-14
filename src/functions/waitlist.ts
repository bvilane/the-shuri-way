import nodemailer from 'nodemailer';
import { JWT } from 'google-auth-library';
import { createServerFn } from '@tanstack/react-start';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export interface WaitlistFormData {
  name: string;
  email: string;
  role: string;
  company?: string;
}

export const submitWaitlistForm = createServerFn({ method: 'POST' })
  .validator((data: WaitlistFormData) => data)
  .handler(async ({ data }) => {
    try {
      if (!data.name || !data.email || !data.role) {
        throw new Error(
          'Missing required fields: name, email, and role are required',
        );
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error('Invalid email format');
      }

      const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY?.split(String.raw`\n`).join('\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const doc = new GoogleSpreadsheet(
        process.env.GOOGLE_SHEET_ID,
        serviceAccountAuth,
      );

      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[0];

      const rowData = {
        name: data.name,
        email: data.email,
        role: data.role,
        company: data.company ?? '',
        timestamp: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Africa/Nairobi',
        }),
      };

      await sheet.addRow(rowData);

      const mailer = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      try {
        await mailer.sendMail({
          from: `"${process.env.SMTP_NAME}" <${process.env.SMTP_MAIL}>`,
          to: process.env.RECEIPENT_EMAIL,
          replyTo: process.env.SMTP_REPLY_TO,
          subject: 'New Waitlist Signup - The Shuri Way',
          html: `
              <h2>New Waitlist Signup</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Role:</strong> ${data.role}</p>
              <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            `,
        });
      } catch (emailError) {
        console.error('Failed to send notification email:', emailError);
      }

      return {
        success: true,
        message: 'Successfully added to waitlist!',
      };
    } catch (error) {
      console.error('Waitlist submission error:', error);

      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred',
      };
    }
  });
