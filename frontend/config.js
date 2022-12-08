const { Before, BeforeAll, After, AfterAll } = require("@cucumber/cucumber");
const { Chromium } = require("@playwright/test");
// const deleteSubAdmin = require('./tests/helperTests/apiHelper');
const {Helper} = require('./tests/helperTests/apiHelper')
global.subAdminCreated = [];

const helper = new Helper();
BeforeAll(async function () {
   
 
 });

AfterAll(async function () {

});

Before (async function () {

});


After (async function () {
 console.log(subAdminCreated)
 if(subAdminCreated.length !== 0){
  for(let subAdmin of subAdminCreated ){
   console.log(subAdmin)
   await helper.deleteSubAdmin(subAdmin)
  }
 }
    // await subAdminCreated.forEach(helper.deleteSubAdmin)
    // await helper.deleteSubAdmin('hari')
    // await subAdminCreated.every(helper.deleteSubAdmin)
});
