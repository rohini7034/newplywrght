
import { expect } from '@playwright/test';
import { log } from 'node:console';

export class ProjectPage {
  constructor(page) {
    this.page = page;
    this.addProjectButton = page.getByRole('button', { name: 'Add Project' });
    this.idInput = page.getByRole('textbox', { name: 'ID *' });
    this.nameInput = page.getByRole('textbox', { name: 'Name *' });
    this.ownerDropdown = page.getByRole('combobox').filter({ hasText: 'Select Owner' });
    this.managerDropdown = page.getByRole('combobox').filter({ hasText: 'Select Manager' });
    this.clientDropdown = page.getByRole('combobox').filter({ hasText: 'Select Client' });
    this.categoryDropdown = page.getByRole('combobox').filter({ hasText: 'Select Category' });
    this.proposalStatusDropdown = page.getByRole('combobox').filter({ hasText: 'Select Proposal Status' });
    this.projectStageDropdown = page.getByRole('combobox').filter({ hasText: 'Select Project Stage' });
    this.workNumberInput = page.getByRole('textbox', { name: 'Work Number' });
    this.startDateInput = page.getByRole('textbox', { name: 'Start Date' });
    this.endDateInput = page.getByRole('textbox', { name: 'End Date' });
  }

  async navigate() {
    await this.page.goto('https://neweudit1-4tjg.vercel.app/landing');
    await this.page.locator('div').filter({ hasText: /^ProjectExplore and manage ongoing projects seamlessly\.show$/ }).getByRole('link').click();
  }

  async addProject({ id, name, owner, manager, client, category, proposalStatus, projectStage, workNumber, startDate, endDate }) {
    
    await this.addProjectButton.click();
    await this.idInput.fill(id);
    await this.nameInput.fill(name);
    
    await this.ownerDropdown.click();
    await this.page.getByLabel(owner).getByText(owner).click();
    
    await this.managerDropdown.click();
    await this.page.getByRole('option', { name: manager }).click();
    
    await this.clientDropdown.click();
    await this.page.getByLabel(client).getByText(client).click();
    
    await this.categoryDropdown.click();
    await this.page.getByRole('option', { name: category }).click();
    
    await this.proposalStatusDropdown.click();
    await this.page.getByRole('option', { name: proposalStatus }).click();
    
    await this.projectStageDropdown.click();
    await this.page.getByRole('option', { name: projectStage }).click();
    
    await this.workNumberInput.fill(workNumber);
    await this.startDateInput.fill(startDate);
    await this.endDateInput.fill(endDate);
   

   
  }
  
}
