import CONFIG from './config';

const env = process.env.ENV ?? 'recette';

if (!(env in CONFIG)) {
  throw new Error(Unknown environment: ${env});
}

export const APP_CONFIG =
  CONFIG[env as keyof typeof CONFIG];