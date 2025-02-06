import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { StaffPage } from '../pages/StaffPage.js';
import { AddStaffPage } from '../pages/AddStaffPage.js';

test('Add new staff member', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const staffPage = new StaffPage(page);
  const addStaffPage = new AddStaffPage(page);

  await loginPage.goto();
  await loginPage.login('test@gmail.com', 'test');

  // Ensure the staff page is loaded before proceeding
  await staffPage.navigateToStaffManagement();
  await page.waitForTimeout(1000);  // Wait for elements to load

  await staffPage.clickAddStaff();
  await page.waitForTimeout(1000);  // Ensure form is ready

  // Debugging the fillStaffDetails() function
  console.log('Filling staff details...');
  await addStaffPage.fillStaffDetails({
    salutation: 'Mrs.',
    firstName: 'Rohini',
    lastName: 'S',
    email: 'rohinir@gmail.com',
    phone: '7736067508',
    id: '11',
    dob: '1999-11-11'
  });

  console.log('Saving staff details...');
  await addStaffPage.saveStaff();
  await page.waitForTimeout(2000); // Allow saving to complete
});
