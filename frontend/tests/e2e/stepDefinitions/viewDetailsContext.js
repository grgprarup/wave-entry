const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { LoginPage } = require("../pageObjects/loginPage");
const { HomePage } = require("../pageObjects/homePage");
const { ViewDetailsPage } = require("../pageObjects/viewDetailsPage");

const loginPage = new LoginPage();
const homePage = new HomePage();
const viewDetailsPage = new ViewDetailsPage();

Given(
  "the administrator has browsed to the homepage with username {string} and password {string}",
  async function (uname, pwd) {
    await loginPage.navigate();
    await loginPage.fillLoginInputFields(uname, pwd);
    await loginPage.clickLoginBtn();
    await expect(page.locator(loginPage.homePageSelector)).toBeVisible();
  }
);

When(
  "the administrator tries to view the student details with email {string}",
  async function (email) {
    await homePage.clickDetailsBtn(email);
  }
);

Then("the individual details should be displayed", async function () {
  await viewDetailsPage.viewDetails();
});
