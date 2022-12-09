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
    helper.response=res;
});

Given('admin has created sub-admin with following credentials', async function (dataTable) {
    helper.response = await helper.createSubAdmin(dataTable);
    expect(helper.response.status).toBe(201);
});
Then('status code should be {int}', function (expectedStatusCode) {
    // const res = helper.getResponse();

    console.log(helper.response)
    const actualStatusCode = helper.response.status;
    console.log(helper.response)
    expect(expectedStatusCode).toBe(actualStatusCode);
});

Then('the created sub-admin username should be {string}', function (expectedUserName) {
    const actualUserName = helper.response.data.username;
   expect(expectedUserName).toBe(actualUserName);
});

When('admin deletes sub-admin with username {string}', async function (username) {
    // console.log(res)
    console.log(helper.response)
    helper.response = await helper.deleteSubAdmin(username)
});