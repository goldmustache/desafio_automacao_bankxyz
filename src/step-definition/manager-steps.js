const { test, expect } = require('@playwright/test');
import XYZBankHome from '../poms/XYZBankHomePage.js';
import XYZBankManager from '../poms/XYZBankManagerPage.js';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();
const pageUrl='https://www.way2automation.com/angularjs-protractor/banking/#/';
let managerPage;
let capturedSucessMessage;


When(  "o usuario clicar no seção de Add Customer",  async ({page})=> {

  managerPage= new XYZBankManager(page);
  await managerPage.pressAddCustomerSection();
 

  })
  When(  "o usuario clicar no seção de Open Account",  async ({page})=> {

    managerPage= new XYZBankManager(page);
    await managerPage.pressOpenAccountSection();
   
  
    })
    When(  "o usuario clicar no botão de Customers",  async ({page})=> {

      managerPage= new XYZBankManager(page);
      await managerPage.pressCustomersSection();
     
    
      })
    
When(  "preencher os campos informados da tela de adicionar cliente",  async ()=> {
    await managerPage.fillAllCustomerFields();

    })
    When(  "preencher os campos informados da tela de Open Account",  async ()=> {
      await managerPage.fillAllAccountFields();
      
    
      })    
    
When(  "o usuário clicar no botão Add Customer",  async ({page})=> {
  
      await page.on('dialog',async (alert)=>{
        expect(alert.type()=== 'beforeunload');
        capturedSucessMessage=alert.message();
        await  page.waitForTimeout(3000);
        await alert.dismiss();
      
      });
      await managerPage.pressCustomerAddButton();

     
      await page.close({ runBeforeUnload: true });
      })
When(  "o usuário clicar no botão Process",  async ({page})=> {

  await page.on('dialog',async (alert)=>{
    expect(alert.type()=== 'beforeunload');  
    capturedSucessMessage=alert.message();
    await  page.waitForTimeout(3000);
    await alert.dismiss();
  
  });

        await managerPage.pressProcessButton();
  
       
        await page.close({ runBeforeUnload: true });
        })
        When(  "o usuario clicar no botão de Delete",  async ({page})=> {
               await managerPage.pressDeleteButton();
                await page.close({ runBeforeUnload: true });
                })
        
Then('a mensagem {string} de sucesso deve ser exibida', async ({page},sucessMessage) => {
  await managerPage.verifySucessMessage(capturedSucessMessage,sucessMessage);


  });
  Then('o customer deve ser apagado do banco', async ({page}) => {
    managerPage= new XYZBankManager(page);
    await managerPage.verifyDeletedUser();
  
  
    });
  
