// @ts-check
const { expect } = require('@playwright/test');

class XYZBankAccount{

  constructor(page) {
    this.page = page;
    this.balanceValue = page.locator('xpath=/html/body/div[1]/div/div[2]/div/div[2]/strong[2]');
    this.transactionsButton = page.getByText('Transactions', { exact: true });
    this.depositButton = page.getByText('Deposit ', { exact: true });
    this.confirmDepositButton = page.getByText('Deposit ', { exact: true });
    this.withdrawlButton = page.getByText('Withdrawl', { exact: true });
    this.confirmWithdrawlButton = page.getByText('Withdraw', { exact: true });
  }
  
  async verifyAccountBalance() {
    return this.balanceValue;
  }


};


export default XYZBankAccount;