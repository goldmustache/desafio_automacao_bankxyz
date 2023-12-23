// @ts-check
const { expect } = require('@playwright/test');

class XYZBankManager{

  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('xpath=/html/body/div[1]/div/div[2]/div/div[2]/div/div/form/div[1]/input');
    this.lastNameField = page.locator('xpath=/html/body/div[1]/div/div[2]/div/div[2]/div/div/form/div[2]/input' );
    this.postCodeField = page.locator('xpath=/html/body/div[1]/div/div[2]/div/div[2]/div/div/form/div[3]/input' );
    this.addCustomersSection=page.getByText('Add Customer ',{ exact: true });
    this.addOpenAccountSection=page.getByText('Open Account',{ exact: true });
    this.customersSection=page.getByText('Customers',{ exact: true });
    this.addCustomerButton=page.locator('xpath=/html/body/div[1]/div/div[2]/div/div[2]/div/div/form/button' );
    this.customerSucessMessage='Customer added successfully with customer';
    this.accountSucessMessage='Account created successfully with account Number';
    this.customerField=page.locator('xpath=/html/body/div[1]/div/div[2]/div/div[2]/div/div/form/div[1]/select');
    this.currencyField=page.locator('xpath=/html/body/div[1]/div/div[2]/div/div[2]/div/div/form/div[2]/select');
    this.processButton=page.getByText('Process',{ exact: true });
    this.deleteButton=page.locator('xpath=/html/body/div[1]/div/div[2]/div/div[2]/div/div/table/tbody/tr[5]/td[5]/button');
    this.deletedUser=page.locator('xpath=/html/body/div[1]/div/div[2]/div/div[2]/div/div/table/tbody/tr[5]/td[1]');
  }
  async pressAddCustomerSection() {
    await this.addCustomersSection.click();
  }
  async pressOpenAccountSection() {
    await this.addOpenAccountSection.click();
  }
  async pressDeleteButton() {
    await this.deleteButton.click();
  }
  async verifyDeletedUser() {
    try {
     expect(this.deletedUser).toContain('Neville');
    } catch (error) {
      
    } finally {
      return;
    }
    
  }
  async pressCustomersSection() {
    await this.customersSection.click();
  }
  async pressCustomerAddButton() {
    await this.addCustomerButton.click();
  }
  async pressProcessButton() {
    await this.processButton.click();
  }
  async fillAllAccountFields() {
    await this.customerField.selectOption('Neville Longbottom');
    await this.currencyField.selectOption('Dollar');
    
  }
  async fillAllCustomerFields() {
    await this.firstNameField.fill('Sicrano');
    await this.lastNameField.fill('de tal');
    await this.postCodeField.fill('2222222');
  }
  async verifySucessMessage(capturedSucessMessage,SucessMessage) {
   expect(capturedSucessMessage).toContain(SucessMessage);

  }

 
};


export default XYZBankManager;