const { When, Then, Given } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { DeleteStudentPage } = require("../pageObjects/deleteStudentPage");

const deleteStudentPage = new DeleteStudentPage();

Given('the user with email {string} has been created', async function (email) {

  // set the user email to delete
  deleteStudentPage.setUserEmail(email);

  // Verify that user with provided email exists
  const elem = page.locator(deleteStudentPage.emailXpath);
  await expect(elem).toBeVisible();
});


When('the user clicks on corresponding delete button', async function () {

  await deleteStudentPage.clickDeleteBtn();
});
