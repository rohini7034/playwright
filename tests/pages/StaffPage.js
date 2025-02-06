export class StaffPage {
    constructor(page) {
      this.page = page;
      this.staffManagementLink = page.getByRole('link', { name: 'Manage Staff' }); // Updated locator
      this.addStaffButton = page.getByRole('button', { name: 'Add Staff' });
    }
  
    async navigateToStaffManagement() {
      await this.staffManagementLink.click();  // Fixed locator reference
    }
  
    async clickAddStaff() {
      await this.addStaffButton.click();
    }
  }
  