const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const {LoginPage} = require('../pageObjects/loginPage');
const {HomePage} = require('../pageObjects/homePage');

const loginPage = new LoginPage();
const homePage = new HomePage();

Given('the administrator has browsed to the home page with username {string} and password {string}', async function(uname, pwd){
    await loginPage.navigate();
    await loginPage.fillLoginInputFields(uname, pwd);
    await loginPage.clickLoginBtn();
    await expect(page.locator(loginPage.homePageSelector)).toBeVisible();
})

When('the administrator deletes the student record with email {string}', async function(email){
    await homePage.clickDeleteBtn(email);
})

Then(`the administrator should see the message "User Delete Successfull!!"`, async function(){
    await homePage.popUpDeleteSuccess();
})