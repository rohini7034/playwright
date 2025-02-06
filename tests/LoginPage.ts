import { Page } from '@playwright/test';

export class LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    console.log('Navigating to login page');
    await this.page.goto('https://neweudit1-4u7e.vercel.app/login');
  }

  async login(email: string, password: string) {
    console.log('Filling login details');
    await this.page.fill('input[name="Email"]', email);
    await this.page.fill('input[name="Password"]', password);
    console.log('Clicking login button');
    await this.page.click('button[name="Login"]');
    await this.page.waitForLoadState('networkidle'); // Wait for the network to be idle after login
  }
}
