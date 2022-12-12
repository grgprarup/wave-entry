const { When, Then } = require("@cucumber/cucumber");

const { expect } = require("@playwright/test");

const { AddStudentPage } = require("../pageObjects/addStudentPage");
const addStudentPage = new AddStudentPage();

When('the user adds a student with following details',
    async function (dataTable) {

        // fill the details
        await addStudentPage.fillStudentDetails(dataTable);

        // click the register button
        await addStudentPage.clickRegisterBtn();
    });

