import { Page } from '@playwright/test';

export class StaffPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToStaffManagement() {
    console.log('Navigating to staff management page');
    await this.page.locator('div').filter({ hasText: /^StaffManage and View staff information with ease\.show$/ }).getByRole('link').click();
    await this.page.waitForSelector('button[name="Add Staff"]'); // Ensure "Add Staff" button is visible
  }

  async clickAddStaff() {
    console.log('Clicking Add Staff button');
    await this.page.click('button[name="Add Staff"]');
    await this.page.waitForSelector('input[name="First Name"]'); // Ensure the form is loaded
  }
}
