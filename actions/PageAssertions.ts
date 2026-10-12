// utils/PageAssertions.ts
import { expect, Locator, Page } from '@playwright/test';

export class PageAssertions {
  constructor(readonly page: Page) {}

  async expectVisible(locator: string | Locator) {
    await expect(
      typeof locator === 'string'
        ? this.page.locator(locator)
        : locator
    ).toBeVisible();
  }

  async expectHidden(locator: string | Locator) {
    await expect(
      typeof locator === 'string'
        ? this.page.locator(locator)
        : locator
    ).toBeHidden();
  }

  async expectText(locator: string | Locator, text: string) {
    await expect(
      typeof locator === 'string'
        ? this.page.locator(locator)
        : locator
    ).toContainText(text);
  }

  async expectEnabled(locator: string | Locator) {
    await expect(
      typeof locator === 'string'
        ? this.page.locator(locator)
        : locator
    ).toBeEnabled();
  }

  async expectDisabled(locator: string | Locator) {
    await expect(
      typeof locator === 'string'
        ? this.page.locator(locator)
        : locator
    ).toBeDisabled();
  }
} 