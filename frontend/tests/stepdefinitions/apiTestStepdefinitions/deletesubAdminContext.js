const {Then, Given, When} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const axios = require("axios");
const { Helper } = require('../../helperTests/apiHelper')

const helper = new Helper();

// When('admin deletes sub-admin with username {string}', async function (username) {
//     // console.log(res)
//     console.log(helper.response)
//     helper.response = await helper.deleteSubAdmin(username)
// });


