import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test(' log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('test@gmail.com', 'test');
await page.getByText('Married').click();

  console.log('login successfull');

});
