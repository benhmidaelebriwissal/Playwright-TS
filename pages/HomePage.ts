import { Page, expect } from '@playwright/test';
import { PageActions } from '../actions/PageActions';

export class HomePage {
  private actions: PageActions;

  constructor(private page: Page) {
    this.actions = new PageActions(page);
  }

  async open() {
    await this.actions.goto('/');
  }

  async searchProduct(product: string) {
    await this.actions.fill('#small-searchterms', product);
    await this.actions.click('input.button-1.search-box-button');
  }

  async openCategory(category: string) {
    await this.actions.click(
      .listbox a:has-text("${category}")
    );
  }

  async expectHomePage() {
    await expect(
      this.page.locator('.topic-html-content')
    ).toBeVisible();
  }

  async expectSearchResults(product: string) {
    await expect(
      this.page.locator('.product-title')
    ).toContainText(product);
  }
}