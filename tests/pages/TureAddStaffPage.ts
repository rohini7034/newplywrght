import { Page } from "@playwright/test";
 export class TrueAddStaffPage {
    private page:Page;

    constructor(page:Page){
        this.page = page;
    }
    async fillStaffDetails(details: {
        salutation:string;
        firstName: string;
        lastName: string;
        adress:string;
        gender: string;
        lineManager:string;
        LanguagePreferences:string;
        dob:string;
        Nationality:string;
        EmployeeCode:string;
        Religion:string;
        MaritalStatus:string;
        EmailAddress:string;
        WorkNumber:string;
        Mobile:string;
        PreferredContactMethod:string;

    })
    {
        await this.page.getByRole('combobox').filter({ hasText: 'Select your Salutation' }).click();
        await this.page.getByRole('option', { name: details.salutation }).click();
    
        await this.page.getByRole('textbox', { name: 'First Name' }).fill(details.firstName);
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill(details.lastName);
        await this.page.getByText('textbox').fill(details.adress);
        await this.page.getByRole('combobox').filter({ hasText: 'Select your gender' }).click();
        await this.page.getByRole('option', { name: details.gender, exact: true }).click();
        await this.page.getByRole('combobox').filter({ hasText: 'Select your languages' }).click();
        await this.page.getByLabel(details.LanguagePreferences).getByText(details.LanguagePreferences).click();
        await this.page.getByRole('textbox', { name: 'Email' }).fill(details.EmailAddress);
        // await this.page.getByRole('textbox', { name: 'Please enter at least 10' }).fill(details.phone);
        // await this.page.getByRole('textbox', { name: 'Enter your id' }).fill(details.code);
        await this.page.getByPlaceholder('DD/MM/YYYY').fill(details.dob);
        await this.page.getByRole('textbox',{name: 'Enter your code'}).fill(details.EmployeeCode);

        await this.page.getByRole('combobox').filter({ hasText: 'Select your Nationality' }).click();
        await this.page.getByRole('option', { name: details.Nationality, exact: true }).click();

        await this.page.getByRole('combobox').filter({ hasText: 'Select your MaritalStatus' }).click();
        await this.page.getByRole('option', { name: details.MaritalStatus, exact: true }).click();
        

      }

    //   async goto(){
    //     await this.page.goto('http://178.16.137.82:3002/staffdetails/detail/addstaff')
    //   }
    async saveStaff(){
        console.log('saving')
        await this.page.getByRole('button', { name: 'Save' }).click();

    }
 }