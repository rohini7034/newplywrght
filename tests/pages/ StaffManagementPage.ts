import { Page } from '@playwright/test';

export class StaffManagementPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToStaffManagement() {
    await this.page.locator('div')
      .filter({ hasText: /^StaffManage and View staff information with ease\.show$/ })
      .getByRole('link').click();
  }

  async clickAddStaff() {
    await this.page.getByRole('button', { name: 'Add Staff' }).click();
  }
}
