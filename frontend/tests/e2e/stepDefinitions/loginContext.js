const {Given, When, Then} = require('@cucumber/cucumber')
const {expect} = require('@playwright/test')

const url = 'http://localhost:3000'

const loginPageElement = '.loginlogo'
const usernameInput = '.username'
const passwordInput = '.password'
const loginBtn = '.submitbutton'
const homePageElement = '.homelogo'
const errorMsg = '.error-message'
const menuBtn = '.menuButton'

Given('the user has browsed the login page', async function() {
    await page.goto(url)
    const locator = page.locator(loginPageElement)
    expect(locator).toBeVisible()
})

When('the user logs in with username {string} and password {string}', async function(username, password) {
    await page.fill(usernameInput, username)
    await page.fill(passwordInput, password)
    await page.click(loginBtn)
})

Then('the user should redirect to the home', async function() {
    const locator = page.locator(homePageElement)
    expect(locator).toBeVisible()
})

Then('the user should see the invalid login message', async function() {
    const locator = page.locator(errorMsg)
    expect(locator).toBeVisible()
})

Given('the admin has browsed the home page', async function(){
    await page.goto(url)
    const loginLocator = page.locator(loginPageElement)
    expect(loginLocator).toBeVisible()

    await page.fill(usernameInput, 'admin')
    await page.fill(passwordInput, 'admin')
    await page.click(loginBtn)

    const locator = page.locator(homePageElement)
    expect(locator).toBeVisible()
})

When('the admin logs out of the homepage', async function() {
    await page.click(menuBtn)
    await page.locator('li:has-text("Logout")').click()
})

Then('the admin should redirect to the login page', async function() {
    const locator = page.locator(loginPageElement)
    expect(locator).toBeVisible()
})