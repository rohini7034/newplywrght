import { Page } from '@playwright/test';

export class AddStaffPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillStaffDetails(details: {
    salutation: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    id: string;
    dob: string;
    language: string;
    gender: string;
    
  }) {
    await this.page.getByRole('combobox').filter({ hasText: 'Select your Salutation' }).click();
    await this.page.getByRole('option', { name: details.salutation }).click();

    await this.page.getByRole('textbox', { name: 'First Name' }).fill(details.firstName);
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(details.lastName);
    await this.page.getByRole('textbox', { name: 'Email' }).fill(details.email);
    await this.page.getByRole('textbox', { name: 'Please enter at least 10' }).fill(details.phone);
    await this.page.getByRole('textbox', { name: 'Enter your id' }).fill(details.id);
    await this.page.getByPlaceholder('DD/MM/YYYY').fill(details.dob);

    await this.page.getByRole('combobox').filter({ hasText: 'Select your languages' }).click();
    await this.page.getByLabel(details.language).getByText(details.language).click();

    await this.page.getByRole('combobox').filter({ hasText: 'Select your gender' }).click();
    await this.page.getByRole('option', { name: details.gender, exact: true }).click();

    
  }

  async saveStaff() {
    console.log('Saving')
    await this.page.getByRole('button', { name: 'Save' }).click();
  }
}
