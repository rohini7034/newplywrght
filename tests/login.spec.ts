import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('User should be able to log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('test@gmail.com', 'test');
  await page.waitForTimeout(2000);  

});
