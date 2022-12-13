const {When} = require("@cucumber/cucumber");
const {Helper} = require('../../helperTests/apiHelper');

const helper = new Helper();
When('admin updates sub-admin with following credentials', async function (dataTable) {
   const subAdminDetails = dataTable.rowsHash();
   Helper.response = await helper.updateSubAdmin(subAdminDetails.username, subAdminDetails.password);
});