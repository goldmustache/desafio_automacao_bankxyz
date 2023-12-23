const { test, expect } = require('@playwright/test');
import XYZBankHome from '../poms/XYZBankHomePage.js';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();
const pageUrl='https://www.way2automation.com/angularjs-protractor/banking/#/';
let homepage;



Given("que o usuário está na homepage", async ({page}) =>{

  await page.goto(`${pageUrl}login`);
  homepage= new XYZBankHome(page);
});
When(  "o usuario clicar no botão de Customer Login",  async ()=> {
  await homepage.pressCustomerLogin();
  

  })
  When(  "o usuario clicar no botão de Bank Manager Login",  async ()=> {
    await homepage.pressManagerLogin();
    
  
    })
Then('a página customer deve carregar e trazer o campo Your Name', async () => {
    await homepage.checkLoggedIn();
  });


