const {Then, Given, When} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const axios = require("axios");
const { Helper } = require('../../helperTests/apiHelper')

const helper = new Helper();
Given('admin creates sub-admin with following credentials', async function (dataTable) {
    await helper.createSubAdmin(dataTable);
});
When('admin deletes sub-admin with username {string}', async function (username) {
    console.log(helper.response.status)
    await helper.deleteSubAdmin(username)
});
// Then('status code should be {int}', function (expectedStatusCode) {
//     const actualStatusCode = helper.response.status;
//     console.log(helper.response)
//     console.log(actualStatusCode)
//     console.log(expectedStatusCode)
//     expect(expectedStatusCode).toBe(actualStatusCode);
// });

