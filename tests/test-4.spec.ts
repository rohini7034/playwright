import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://neweudit1-4u7e.vercel.app/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('div').filter({ hasText: /^StaffManage and View staff information with ease\.show$/ }).getByRole('link').click();
  await page.getByRole('button', { name: 'Add Staff' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Select your Salutation' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('wwww');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('zzzzzzzz');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('qwe@gmail.com');
  await page.getByRole('textbox', { name: 'Please enter at least 10' }).click();
  await page.getByRole('textbox', { name: 'Please enter at least 10' }).fill('3456782345');
  await page.getByRole('textbox', { name: 'Enter your id' }).click();
  await page.getByRole('textbox', { name: 'Enter your id' }).fill('pp');
  await page.getByPlaceholder('DD/MM/YYYY').fill('31778-02-11');
  await page.getByRole('combobox').filter({ hasText: 'Select your languages' }).click();
  await page.getByLabel('English').getByText('English').click();
  await page.getByRole('combobox').filter({ hasText: 'Select your gender' }).click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});