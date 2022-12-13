const {When } = require("@cucumber/cucumber");
const {Helper} = require('../../helperTests/apiHelper');

const helper = new Helper();
When('admin logs in with following credentials', async function (dataTable) {
    const userDetails = dataTable.rowsHash();
    Helper.response = await helper.adminLogin(userDetails.username, userDetails.password)
});
When('sub-admin logs in with following credentials', async function (dataTable) {
    const userDetails = dataTable.hashes();
    for(let user of userDetails){
        Helper.response = await helper.adminLogin(user.username, user.password)
    }
});
