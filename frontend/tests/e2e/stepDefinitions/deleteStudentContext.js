const {When, Then, Given } = require("@cucumber/cucumber");
const { extractEventHandlers } = require("@mui/material");
const {expect } = require("@playwright/test");

// "User Delete Successfull !!" , div .modaldiv .text-center <- delete successfull
// Set the mail here from the Given function
let userEmail = "";

const msgBoxElement = 'div.modaldiv.text-center';


  Given('the user with email {string} has been created', async function (email) {

    // Verify that user with provided email exists
    const elem = page.locator(`td:has-text("${email}")`);
    await expect(elem).toBeVisible();

    // set email to respective content
    userEmail = email;
  });


  When('the user clicks on corresponding delete button', async  function () {

    const elem = page.locator(`td:has-text("${userEmail}")`);
    // the email should exist

    await elem.highlight();
    // Click delete for the corresponding user email
    const deleteBtn = `//td[contains(text(),"${userEmail}")]/following-sibling::td/a[contains(text(),"Delete")]`
    await page.locator(deleteBtn).click();

  });


  Then('the user should be provided with delete successful message', async  function () {
    const msg = page.locator(msgBoxElement);
    await expect(msg).toBeVisible();
  });