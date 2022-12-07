const { Given, When, Then } = require("@cucumber/cucumber");

const { expect } = require("@playwright/test");

const landingPageURL = "http://localhost:3000/";

const usernameInput = ".username";
const passwordInput = ".password";
const loginBtnElement = ".submitbutton";

const searchElement = ".homeLogo";

const errorMsgElement = 'p.error-message';

Given('the user has navigated to the login page', async function () {
    // navigate to the landing page
    // eslint-disable-next-line no-undef
    await page.goto(landingPageURL)
    // extract the text from login button
    const button = page.locator(loginBtnElement);

    // the text content should be "LOGIN"
    await expect(button).toBeVisible();
});



When('the user logins with username {string} and password {string}', async function (username, password) {

    // fill the username
    await page.fill(usernameInput, username)
    // fill the password
    await page.fill(passwordInput, password)
    // click the login btn
    await page.click(loginBtnElement)

});

Then('the user should be redirected to the home page', async function () {

    // locator for search input
    const searchLocator = page.locator(searchElement);

    // expect the search field to be visible
    await expect(searchLocator).toBeVisible();

});

Then('the user should see message "Invalid login"', async function () {

    const errorLocator = page.locator(errorMsgElement);

    await expect(errorLocator).toBeVisible();

});
