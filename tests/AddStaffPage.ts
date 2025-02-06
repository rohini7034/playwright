import { Page } from '@playwright/test';

export class AddStaffPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillStaffDetails({
    salutation,
    firstName,
    lastName,
    email,
    phone,
    id,
    dob,
    language,
    gender
  }: {
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
    console.log('Filling staff details');
    await this.page.selectOption('select[name="Salutation"]', salutation);
    await this.page.fill('input[name="First Name"]', firstName);
    await this.page.fill('input[name="Last Name"]', lastName);
    await this.page.fill('input[name="Email"]', email);
    await this.page.fill('input[name="Phone"]', phone);
    await this.page.fill('input[name="ID"]', id);
    await this.page.fill('input[name="DOB"]', dob);
    
    // Select language and gender
    await this.page.selectOption('select[name="Languages"]', language);
    await this.page.selectOption('select[name="Gender"]', gender);
  }

  async saveStaff() {
    console.log('Saving staff details');
    await this.page.click('button[name="Save"]');
    await this.page.waitForSelector('text=Staff added successfully'); // Adjust based on actual success message
  }
}
