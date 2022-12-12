const {Then, Given, When} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const axios = require("axios");
const { Helper } = require('../../helperTests/apiHelper')

const helper = new Helper();
Given('admin has created sub-admin with following credentials', async function (dataTable) {
    Helper.response = await helper.createSubAdmin(dataTable);
    // console.log(helper.response)
    expect(Helper.response.status).toBe(201);
});
When('admin deletes sub-admin with username {string}', async function (username) {
    Helper.response = await helper.deleteSubAdmin(username)
    // console.log(helper.response)
});

