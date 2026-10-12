import { Page, expect } from '@playwright/test';
import { PageActions } from '../actions/PageActions';

export class AddProductPage {
  private actions: PageActions;

  constructor(private page: Page) {
    this.actions = new PageActions(page);
  }

  async openBooks() {
    await this.actions.goto('/books');
  }

  async openProduct(productName: string) {
    await this.actions.click(
      .product-title a:has-text("${productName}")
    );
  }

  async addCurrentProductToCart() {
    await this.actions.click(
      'input[id^="add-to-cart-button-"]'
    );
  }

  async expectAddedToCart() {
    await expect(
      this.page.locator('.bar-notification')
    ).toContainText('The product has been added');
  }

  async openShoppingCart() {
    await this.actions.click('a.ico-cart');
  }
}