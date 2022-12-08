const { When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const axios = require("axios");
const { Helper } = require('../../helperTests/apiHelper');

const helper = new Helper();
When('admin creates sub admin with following credentials', async function (dataTable) {
    await helper.createSubAdmin(dataTable);
    const userDetails = dataTable.rowsHash();
    subAdminCreated.push(userDetails.username);
});

Then('status code should be {int}', function (expectedStatusCode) {
    console.log(helper.response)
    const actualStatusCode = helper.response.status;
    // console.log(actualStatusCode)
    // console.log(expectedStatusCode)
    expect(expectedStatusCode).toBe(actualStatusCode);
});

Then('the created sub-admin username should be {string}', function (expectedUserName) {
   // const actualUserName = response.data.username;
    const actualUserName = helper.response.data.username;
   expect(expectedUserName).toBe(actualUserName);
});
