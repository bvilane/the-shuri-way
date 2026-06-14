declare module 'global' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
        GOOGLE_PRIVATE_KEY: string;
        GOOGLE_SHEET_ID: string;
        SMTP_NAME: string;
        SMTP_MAIL: string;
        SMTP_REPLY_TO: string;
        SMTP_HOST: string;
        SMTP_PORT: string;
        SMTP_USERNAME: string;
        SMTP_PASSWORD: string;
        RECEIPENT_EMAIL: string;
      }
    }
  }
}
