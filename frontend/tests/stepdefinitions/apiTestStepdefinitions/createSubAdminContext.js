const { When, Then, Given} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const axios = require("axios");
const { Helper } = require('../../helperTests/apiHelper');

const helper = new Helper();
When('admin creates sub admin with following credentials', async function (dataTable) {
    const res = await helper.createSubAdmin(dataTable);
    const userDetails = dataTable.rowsHash();
    subAdminCreated.push(userDetails.username);
    // helper.setResponse(res)

    Helper.response=res;
});

Then('status code should be {int}', function (expectedStatusCode) {
    // const res = helper.getResponse();
    const actualStatusCode = Helper.response.status;
    expect(expectedStatusCode).toBe(actualStatusCode);
});

Then('the created sub-admin username should be {string}', function (expectedUserName) {
    const actualUserName = Helper.response.data.username;
   expect(expectedUserName).toBe(actualUserName);
});

