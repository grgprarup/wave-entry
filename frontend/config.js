const { Before, BeforeAll, After, AfterAll } = require("@cucumber/cucumber");
const { Chromium } = require("@playwright/test");
// import deleteSubAdmin from 'tests/helperTests/deleteSubAdmin'
const deleteSubAdmin = require('./tests/helperTests/deleteSubAdmin');
global.subAdminCreated = [];

BeforeAll(async function () {
   
 
 });

AfterAll(async function () {

});

Before (async function () {

});


After (async function () {
    await deleteSubAdmin.deleteSubAdmin('hari')
});
