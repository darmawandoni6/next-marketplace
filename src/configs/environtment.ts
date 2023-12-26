import getConfig from 'next/config';

import env from 'environtment';

type Config = {
  publicRuntimeConfig: typeof env;
};

export const { publicRuntimeConfig }: Config = getConfig();
