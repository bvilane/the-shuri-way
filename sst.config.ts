/// <reference path="./env.d.ts" />
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      home: 'aws',
      name: 'the-shuri-way',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      providers: { aws: '7.1.0' },
    };
  },
  async run() {
    new sst.aws.TanStackStart('TheShuriWay', {
      environment: {
        GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
        GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
        SMTP_SERVER: process.env.SMTP_SERVER,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USERNAME: process.env.SMTP_USERNAME,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD,
        RECEIPENT_EMAIL: process.env.RECEIPENT_EMAIL,
      },
      domain: {
        name: 'theshuriway.com',
        redirects: ['www.theshuriway.com'],
        dns: sst.cloudflare.dns({
          zone: 'de81739bb824f1752349d6e2acbf0cb6',
        }),
      },
    });
  },
});
