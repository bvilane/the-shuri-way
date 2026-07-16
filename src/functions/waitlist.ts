import { Resend } from 'resend';
import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';

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

      const supabase = createClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
      );

      const { error: dbError } = await supabase
        .from('waitlist_submissions')
        .insert({
          name: data.name,
          email: data.email,
          role: data.role,
          company: data.company || null,
        });

      if (dbError) {
        throw new Error(`Database error: ${dbError.message}`);
      }

      const resend = new Resend(process.env.RESEND_API_KEY);

      try {
        await resend.emails.send({
          from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
          to: process.env.RECEIPENT_EMAIL.split(',').map(e => e.trim()),
          replyTo: process.env.RESEND_REPLY_TO,
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
