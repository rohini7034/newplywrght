import { test, expect } from '@playwright/test';

import { LoginPage } from './pages/LoginPage';
import { StaffManagementPage } from './pages/ StaffManagementPage';
import { AddStaffPage } from './pages/AddStaffPage';

test('User should be able to add a staff member', async ({ page }) => {
  await page.waitForTimeout(3000);  

  const loginPage = new LoginPage(page);
  const staffPage = new StaffManagementPage(page);
  const addStaffPage = new AddStaffPage(page);

  await loginPage.goto();
  await loginPage.login('test@gmail.com', 'test');

  await staffPage.navigateToStaffManagement();
  await page.waitForTimeout(3000);
  await staffPage.clickAddStaff();
  await page.waitForTimeout(2000);  

  console.log('Filling staff details...');
  await addStaffPage.fillStaffDetails({
    salutation: 'Mr.',
    firstName: 'wwww',
    lastName: 'zzzzzzzz',
    email: 'qwe@gmail.com',
    phone: '3456782345',
    id: 'pp',
    dob: '1978-02-11',
    language: 'English',
    gender: 'Male',
  });

  await addStaffPage.saveStaff();
  console.log('staff added successfully');

});