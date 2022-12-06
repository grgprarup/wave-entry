const { Given, When, Then } = require("@cucumber/cucumber");

const { expect } = require("@playwright/test");

const landingPageURL = "http://localhost:3000/";

const usernameInput = ".username";
const passwordInput = ".password";
const loginBtnElement = ".submitbutton";

const searchElement = ".homeLogo";

const errorMsgElement = 'p.error-message';

const menuButton = "button.menuButton";
const logoutButton = 'li:has-text("Logout")';


Given('the user has navigated to the landing page', async function () {
    // navigate to the landing page
    // eslint-disable-next-line no-undef
    await page.goto(landingPageURL)
    // extract the text from login button
    const button = page.locator(loginBtnElement);

    // the text content should be "LOGIN"
    await expect(button).toBeVisible();
});



When('the user tries to login with username {string} and password {string}', async function (username, password) {

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

Then('the user should be warned about invalid credentials', async function () {

    const errorLocator = page.locator(errorMsgElement);

    await expect(errorLocator).toBeVisible();

});


Given('the user has already logged in and navigated to the home page with username {string} and password {string}', async function (username, password) {

    // navigate to the landing page
    // eslint-disable-next-line no-undef
    await page.goto(landingPageURL)
    // extract the text from login button
    const loginButton = page.locator(loginBtnElement);

    // the text content should be "LOGIN"
    await expect(loginButton).toBeVisible();

    // now fill up login details
    await page.fill(usernameInput,username)
    await page.fill(passwordInput, password)

    // click login button
    await page.click(loginBtnElement)

    // wait for redirection to home page having dashboard
    // locator for search input
    const searchLocator = page.locator(searchElement);

    // expect the search field to be visible
    await expect(searchLocator).toBeVisible();

  });



When('the user clicks on logout', async function() {
    
    // click the menu item
    await page.locator(menuButton).click();

    // click on logout
    await page.locator(logoutButton).click();

});

Then('the user should be logged out and redirected to landing page', async function () {

    const loginBtnElement = ".submitbutton";
    const button = page.locator(loginBtnElement);
    // the text content should be "LOGIN"
    await expect(button).toBeVisible();

  });