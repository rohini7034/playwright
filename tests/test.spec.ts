import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { StaffPage } from './StaffPage';
import { AddStaffPage } from './AddStaffPage';

test('Add new staff member', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const staffPage = new StaffPage(page);
  const addStaffPage = new AddStaffPage(page);

  // Log in
  await loginPage.goto();
  await loginPage.login('test@gmail.com', 'test');

  // Navigate to staff management page
  await staffPage.navigateToStaffManagement();

  // Add new staff member
  await staffPage.clickAddStaff();

  // Fill in the staff details
  await addStaffPage.fillStaffDetails({
    salutation: 'Mrs.',
    firstName: 'Rohini',
    lastName: 'S',
    email: 'rohinir@gmail.com',
    phone: '7736067508',
    id: '11',
    dob: '1999-11-11',
    language: 'English',
    gender: 'Female'
  });

  // Save the staff member
  await addStaffPage.saveStaff();

  // Verify if the staff member was added (check for success message)
  const successMessage = await page.locator('text=Staff added successfully'); // Adjust based on actual success message
  await expect(successMessage).toBeVisible();
});
