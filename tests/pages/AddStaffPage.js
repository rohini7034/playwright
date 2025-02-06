export class AddStaffPage {
  constructor(page) {
    this.page = page;
    this.salutationDropdown = page.locator('select[name="salutation"]'); // Ensure this is correct
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.phoneInput = page.getByRole('textbox', { name: 'Phone' });
    this.idInput = page.getByRole('textbox', { name: 'ID' });
    this.dobInput = page.getByPlaceholder('DD/MM/YYYY');
    this.languageDropdown = page.locator('select[name="language"]'); // Update locator if necessary
    this.genderDropdown = page.locator('select[name="gender"]'); // Update locator if necessary
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async fillStaffDetails(staff) {
    // Debugging steps for each field
    await this.salutationDropdown.selectOption(staff.salutation);
    await this.firstNameInput.fill(staff.firstName);
    await this.lastNameInput.fill(staff.lastName);
    await this.emailInput.fill(staff.email);
    await this.phoneInput.fill(staff.phone);
    await this.idInput.fill(staff.id);
    
    // Date picker handling (if it requires clicks)
    await this.dobInput.click();
    await this.dobInput.fill(staff.dob); 
    await this.page.keyboard.press('Enter');  // Confirm date entry
    
    // Handle dropdowns properly
    await this.languageDropdown.selectOption('English');
    await this.genderDropdown.selectOption('Female');
  }

  async saveStaff() {
    await this.saveButton.click();
  }
}
