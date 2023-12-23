// @ts-check
const { expect } = require('@playwright/test');

class XYZBankHome{

  constructor(page) {
    this.page = page;
    this.customerButton = page.getByText('Customer Login', { exact: true });
    this.managerButton = page.getByText('Bank Manager Login', { exact: true });
    this.pageHeaderText = 'Protractor practice website - Banking App'
  }
  async pressCustomerLogin() {
    await this.customerButton.click();
    
  }

  async pressManagerLogin() {
    await this.managerButton.click();
   
  }

  async checkLoggedIn() {
    await expect(this.page).toHaveTitle(this.pageHeaderText);
   
  }

};


export default XYZBankHome;