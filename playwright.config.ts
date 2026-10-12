/// <reference types="node" /> 
import { defineConfig, devices } from '@playwright/test';
import ENV from './utils/config';   // <--- AJOUT
                                       // (adapter le chemin si besoin)

// Choix de l'environnement (recette | preprod | prod)
const env = (process.env.ENV as 'recette' | 'preprod' | 'prod') || 'recette';
const CONFIG = ENV[env];

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: CONFIG.baseURL,          // <--- UTILISE LE BASEURL SELON L'ENV
    ignoreHTTPSErrors: true,          // <--- RÈGLE TON PROBLÈME DE CERTIFICAT
    headless: false,

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});