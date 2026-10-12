import { Page, expect } from '@playwright/test';
import { PageActions } from '../actions/PageActions';

export class CheckoutPage {
  private actions: PageActions;

  constructor(private page: Page) {
    this.actions = new PageActions(page);
  }

  async expectCheckoutPage() {
    await expect(this.page).toHaveURL(/checkout/);
  }

  async continueBillingAddress() {
    await this.actions.click(
      '#billing-buttons-container .new-address-next-step-button'
    );
  }

  async continueShippingAddress() {
    await this.actions.click(
      '#shipping-buttons-container .new-address-next-step-button'
    );
  }

  async continueShippingMethod() {
    await this.actions.click(
      '#shipping-method-buttons-container .shipping-method-next-step-button'
    );
  }

  async continuePaymentMethod() {
    await this.actions.click(
      '#payment-method-buttons-container .payment-method-next-step-button'
    );
  }

  async continuePaymentInfo() {
    await this.actions.click(
      '#payment-info-buttons-container .payment-info-next-step-button'
    );
  }

  async confirmOrder() {
    await this.actions.click(
      '#confirm-order-buttons-container .confirm-order-next-step-button'
    );
  }

  async expectOrderSuccess() {
    await expect(
      this.page.locator('.section.order-completed')
    ).toContainText('Your order has been successfully processed');
  }
}