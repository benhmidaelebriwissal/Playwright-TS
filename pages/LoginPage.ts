import { Page, expect } from '@playwright/test';
import { PageActions } from '../actions/PageActions';

export class LoginPage {
  private actions: PageActions;

  constructor(private page: Page) {
    this.actions = new PageActions(page);
  }

  async open() {
    await this.actions.goto('/login');
  }

  async login(email: string, password: string) {
    await this.actions.fill('#Email', email);
    await this.actions.fill('#Password', password);
    await this.actions.click('input.login-button');
  }

  async assertLoginSuccess(email: string) {
    await expect(
      this.page.locator('.header-links')
    ).toContainText(email);
  }

  async assertLoginError() {
    await expect(
      this.page.locator('.validation-summary-errors')
    ).toBeVisible();
  }

  async logout() {
    await this.actions.click('.ico-logout');
  }
}