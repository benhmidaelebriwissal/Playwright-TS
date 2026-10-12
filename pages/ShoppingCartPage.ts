import { Page, expect } from '@playwright/test';
import { PageActions } from '../actions/PageActions';

export class ShoppingCartPage {
  private actions: PageActions;

  constructor(private page: Page) {
    this.actions = new PageActions(page);
  }

  async open() {
    await this.actions.goto('/cart');
  }

  async expectProduct(productName: string) {
    await expect(
      this.page.locator('.cart-item-row')
    ).toContainText(productName);
  }

  async updateQuantity(quantity: string) {
    await this.actions.fill(
      '.cart-item-row .qty-input',
      quantity
    );
    await this.actions.click('input[name="updatecart"]');
  }

  async removeFirstProduct() {
    await this.actions.check(
      '.cart-item-row input[name="removefromcart"]'
    );
    await this.actions.click('input[name="updatecart"]');
  }

  async expectEmptyCart() {
    await expect(
      this.page.locator('.order-summary-content')
    ).toContainText('Your Shopping Cart is empty');
  }

  async proceedToCheckout() {
    await this.actions.check('#termsofservice');
    await this.actions.click('#checkout');
  }
}