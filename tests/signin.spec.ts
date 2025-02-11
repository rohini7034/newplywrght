import { test, expect } from '@playwright/test';

import { SignInPage } from './pages/SignInPage';

test('login test using POM', async ({ page }) => {
  const signInPage = new SignInPage(page);

  await signInPage.goto();
  await signInPage.login('didouttojutro-1120@yopmail.com', 'ORG193', 'password');
  console.log('logged successfully');

});
