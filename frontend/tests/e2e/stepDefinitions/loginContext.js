const { Given, When, Then } = require("@cucumber/cucumber");

const { expect } = require("@playwright/test");

const { LoginPage } = require("../pageObjects/loginPage");
const { HomePage } = require("../pageObjects/homePage");
const { AddStudentPage } = require("../pageObjects/addStudentPage");

const loginPage = new LoginPage();
const homePage = new HomePage();
const addStudentPage = new AddStudentPage();

Given('the user has navigated to the login page', async function () {
    // navigate to login page
    await loginPage.navigate();

});

When('the user logs in with username {string} and password {string}', async function (username, password) {

    // fill the details of login fields and click login
    await loginPage.fillLoginInputFields({ "username": username, "password": password });
    await loginPage.clickLoginBtn();

});

Then('the user should be redirected to the home page', async function () {

    const homeLogo = page.locator(homePage.homeLogoSelector);
    // home logo to be visible
    await expect(homeLogo).toBeVisible();

});

Then('the user should see message {string}', async function (msg) {

    if (msg === "\"Student Registration Successfull!!\"") {
        const text = await page.innerText(addStudentPage.successMsgElement);
        await expect(text).toBe(msg);
        
    } else if (msg === "Invalid login") {
        const text = await page.innerText(loginPage.errorMsgSelector);
        // the paragraph should contain given msg
        await expect(text).toBe(msg);
    }else if (msg === "User Delete Successfull !!") {
        
    }
});
