const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const {LoginPage} = require('../pageObjects/loginPage');
const {HomePage} = require('../pageObjects/homePage');

const loginPage = new LoginPage();
const homePage = new HomePage();

Given('the user has browsed to the home page', async function(){
    await loginPage.navigate();
    await loginPage.fillLoginInputFields('admin', 'admin');
    await loginPage.clickLoginBtn();
    await expect(page.locator(loginPage.homePageSelector)).toBeVisible();
})

When('the user logs out of the homepage', async function(){
    await homePage.logout();
})

Then('the user should redirect to the login page', async function(){
    await expect(page.locator(loginPage.usernameSelector)).toBeVisible();
})