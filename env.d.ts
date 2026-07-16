declare module 'global' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        SUPABASE_URL: string;
        SUPABASE_SERVICE_ROLE_KEY: string;
        RESEND_API_KEY: string;
        RESEND_FROM_NAME: string;
        RESEND_FROM_EMAIL: string;
        RESEND_REPLY_TO: string;
        RECEIPENT_EMAIL: string;
        VITE_SUPABASE_URL: string;
        VITE_SUPABASE_PUBLISHABLE_KEY: string;
        VITE_SUPABASE_PROJECT_ID: string;
      }
    }
  }
}
