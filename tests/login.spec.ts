import { test, expect } from '../fixtures/testFixtures';
import loginData from '../data/loginData.json';

test.describe('Login', () => {
  test('TC_LOGIN_001 - Login with valid credentials', async ({
    page,
    loginPage,
  }) => {
    await loginPage.open();

    await loginPage.login(
      loginData.validUser.email,
      loginData.validUser.password
    );

    await loginPage.assertLoginSuccess(
      loginData.validUser.email
    );
  });

  test('TC_LOGIN_002 - Login with invalid credentials', async ({
    loginPage,
  }) => {
    await loginPage.open();

    await loginPage.login(
      loginData.invalidUser.email,
      loginData.invalidUser.password
    );

    await loginPage.assertLoginError();
  });

  test('TC_LOGIN_003 - Login page is accessible', async ({
    page,
    loginPage,
  }) => {
    await loginPage.open();

    await expect(page.locator('#Email')).toBeVisible();
    await expect(page.locator('#Password')).toBeVisible();
    await expect(page.locator('input.login-button')).toBeVisible();
  });
});