const { Given, When, Then } = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const {LoginPage} = require('../pageObjects/loginPage');

const loginPage = new LoginPage();

Given('the user has browsed to the login page', async function(){
    await loginPage.navigate();
})

When('the user tries to log in with username {string} and password {string}', async function(username, password){
    await loginPage.fillLoginInputFields(username, password);
    await loginPage.clickLoginBtn();
})

Then('the user should redirect to the home page', async function(){
    const homePageLocator = page.locator(loginPage.homePageSelector)
    await expect(homePageLocator).toBeVisible()
})

Then(`the user should see message "Invalid login"`, async function(){
    const errorMsgLocator = page.locator(loginPage.errorMsgSelector)
    await expect(errorMsgLocator).toBeVisible()
})