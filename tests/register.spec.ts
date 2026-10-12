import { test, expect } from '../fixtures/testFixtures';
import registerData from '../data/registerData.json';

test.describe('Registration', () => {
  test('TC_REG_001 - Register a new user', async ({
    registerPage,
    page,
  }) => {
    await registerPage.open();

    const email = qa.${Date.now()}@example.test;

    await registerPage.register({
      ...registerData.validUser,
      email,
    });

    await registerPage.expectRegistrationSuccess();
  });

  test('TC_REG_002 - Reject mismatched passwords', async ({
    registerPage,
  }) => {
    await registerPage.open();

    const email = qa.invalid.${Date.now()}@example.test;

    await registerPage.register({
      ...registerData.invalidUser,
      email,
    });

    await expect(
      registerPage['page'].locator('.field-validation-error')
    ).toBeVisible();
  });
});