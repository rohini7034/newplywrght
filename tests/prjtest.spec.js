import { test, expect } from '@playwright/test';
import { ProjectPage } from './pages/ProjectPage';

test('for creating a new project', async ({ page }) => {
  const projectPage = new ProjectPage(page);
  await projectPage.navigate();

  await projectPage.addProject({
     
    id: 'fff',
    name: 'eeee',
    owner: 'whooos hello',
    manager: 'ggff dfs',
    client: 'ssooll',
    category: 'General Audit',
    proposalStatus: 'Won',
    projectStage: 'On Going',
    workNumber: '4',
    startDate: '2022-01-12',
    endDate: '2023-12-12'
  });

});
