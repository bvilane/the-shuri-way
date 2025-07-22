/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'the-shuri-way',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
      providers: { aws: '7.1.0' },
    };
  },
  async run() {
    new sst.aws.TanStackStart('TheShuriWay');
  },
});
