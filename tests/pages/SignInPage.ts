import { Page } from '@playwright/test';

export class SignInPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  
  emailInput = () => this.page.getByRole('textbox', { name: 'Email' });
  organisationCodeInput = () => this.page.getByRole('textbox', { name: 'Organisation Code' });
  passwordInput = () => this.page.getByRole('textbox', { name: 'Password' });
  continueButton = () => this.page.getByRole('button', { name: 'Continue' });

  
  async goto() {
    await this.page.goto('http://178.16.137.82:3002/signin');
  }

  async login(email: string, orgCode: string, password: string) {
    await this.emailInput().fill(email);
    await this.organisationCodeInput().fill(orgCode);
    await this.passwordInput().fill(password);
    await this.continueButton().click();
  }
}
