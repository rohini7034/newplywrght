import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://178.16.137.82:3002/signin');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('didouttojutro-1120@yopmail.com');
  await page.getByRole('textbox', { name: 'Organisation Code' }).click();
  await page.getByRole('textbox', { name: 'Organisation Code' }).fill('ORG193');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Continue' }).click();
});