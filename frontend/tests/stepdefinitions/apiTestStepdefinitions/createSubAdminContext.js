const { When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const axios = require("axios");
let response = "";
const baseUrl = "http://localhost:3001"
When('admin creates sub admin with following credentials', async function (dataTable) {
    const userDetails = dataTable.rowsHash();
    const token = `admin:admin`;
    const encodedToken = Buffer.from(token).toString('base64');
        response = await axios.post(`${baseUrl}/admin/`, {
            "username":userDetails.username,
            "password":userDetails.password
        }, {
            headers: {
                "Authorization": 'Basic ' + encodedToken,
                'Content-Type': 'application/json',
            }
        })
});

Then('status code should be {int}', function (expectedStatuscode) {
    const actualStatusCode = response.status;
    console.log(actualStatusCode);
    expect(expectedStatuscode).toBe(actualStatusCode);

});

Then('the created sub-admin username should be {string}', function (expectedUserName) {
   const actualUserName = response.data.username;
   expect(expectedUserName).toBe(actualUserName);
   console.log(actualUserName)
});
