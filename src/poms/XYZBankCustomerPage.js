// @ts-check
const { expect } = require('@playwright/test');

class XYZBankCustomer{

  constructor(page) {
    this.page = page;
    this.userSelect = page.getByLabel('Your Name :', { exact: true });
    this.loginButton = page.getByText('Login', { exact: true });
  }
  async selectUserName(name) {
    await this.userSelect.selectOption(name);;
  }


};


export default XYZBankCustomer;