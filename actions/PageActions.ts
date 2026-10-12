// utils/PageActions.ts
import { Page, Locator } from '@playwright/test';
import { Logger } from '../utils/logger';

export class PageActions {
  constructor(readonly page: Page) {}

  async goto(url: string) {
    
Logger.info
(`Navigating to ${url}`);
    await this.page.goto(url);
  }

  async fill(locator: string | Locator, value: string) {
    const element = typeof locator === 'string'
      ? this.page.locator(locator)
      : locator;

    await element.fill(value);
  }

  async click(locator: string | Locator) {
    const element = typeof locator === 'string'
      ? this.page.locator(locator)
      : locator;

    await 
element.click
();
  }

  async selectOption(locator: string | Locator, value: string) {
    const element = typeof locator === 'string'
      ? this.page.locator(locator)
      : locator;

    await element.selectOption(value);
  }

  async check(locator: string | Locator) {
    const element = typeof locator === 'string'
      ? this.page.locator(locator)
      : locator;

    await element.check();
  }
} 