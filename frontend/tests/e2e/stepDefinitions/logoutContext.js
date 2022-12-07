
const { Given, When, Then } = require("@cucumber/cucumber");

const { expect } = require("@playwright/test");

const landingPageURL = "http://localhost:3000/";

const usernameInput = ".username";
const passwordInput = ".password";
const loginBtnElement = ".submitbutton";

const searchElement = ".homeLogo";


const menuButton = "button.menuButton";
const logoutButton = 'li:has-text("Logout")';




Given('the user has logged in with username {string} and password {string}', async function (username, password) {

    // navigate to the landing page
    // eslint-disable-next-line no-undef
    await page.goto(landingPageURL)
    // extract the text from login button
    const loginButton = page.locator(loginBtnElement);

    // the text content should be "LOGIN"
    await expect(loginButton).toBeVisible();

    // now fill up login details
    await page.fill(usernameInput, username)
    await page.fill(passwordInput, password)

    // click login button
    await page.click(loginBtnElement)

    // wait for redirection to home page having dashboard
    // locator for search input
    const searchLocator = page.locator(searchElement);

    // expect the search field to be visible
    await expect(searchLocator).toBeVisible();

});



When('the user clicks on logout', async function () {

    // click the menu item
    await page.locator(menuButton).click();

    // click on logout
    await page.locator(logoutButton).click();

});

Then('the user should be logged out and redirected to login page', async function () {

    const loginBtnElement = ".submitbutton";
    const button = page.locator(loginBtnElement);
    // the text content should be "LOGIN"
    await expect(button).toBeVisible();

});