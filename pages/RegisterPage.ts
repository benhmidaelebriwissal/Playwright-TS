import { Page, expect } from '@playwright/test';
import { PageActions } from '../actions/PageActions';

export class RegisterPage {
  private actions: PageActions;

  constructor(private page: Page) {
    this.actions = new PageActions(page);
  }

  async open() {
    await this.actions.goto('/register');
  }

  async register(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    await this.actions.check('#gender-male');
    await this.actions.fill('#FirstName', data.firstName);
    await this.actions.fill('#LastName', data.lastName);
    await this.actions.fill('#Email', data.email);
    await this.actions.fill('#Password', data.password);
    await this.actions.fill('#ConfirmPassword',data.confirmPassword);

    await this.actions.click('#register-button');
  }

  async expectRegistrationSuccess() {
    await expect(this.page.locator('.result')).toContainText('Your registration completed');
  }

  async expectValidationError() {
    await expect(this.page.locator('.validation-summary-errors') ).toBeVisible();
  }
}