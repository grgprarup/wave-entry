
const { Given, When, Then } = require("@cucumber/cucumber");

const { expect } = require("@playwright/test");
const { HomePage } = require("../pageObjects/homePage");
const { LoginPage } = require("../pageObjects/loginPage");

const homePage = new HomePage();
const loginPage = new LoginPage();

Given('the user has logged in with username {string} and password {string}', async function(username,password){
    await loginPage.navigate();
    await loginPage.fillLoginInputFields({"username":username,"password":password});
    await loginPage.clickLoginBtn();

    // expect home page logo to be visible
    await expect(page.locator(homePage.homeLogoSelector)).toBeVisible();
});

When('the user logs out', async function () {

    // click the logout
    await homePage.clickLogoutBtn();
});

Then('the user should be to the login page', async function () {

    const loginBtnElement = page.locator(loginPage.loginBtnSelector);
    // the login button to be visible
    await expect(loginBtnElement).toBeVisible();

});