const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const {HomePage} = require('../pageObjects/homePage');
const {LoginPage} = require('../pageObjects/loginPage');
const {RegisterPage} = require('../pageObjects/registerPage');

const homePage = new HomePage();
const loginPage = new LoginPage();
const registerPage = new RegisterPage();

Given('the user has browsed the home page', async function(){
    await loginPage.navigate();
    await loginPage.fillLoginInputFields('admin', 'admin');
    await loginPage.clickLoginBtn();
    await expect(page.locator(loginPage.homePageSelector)).toBeVisible();
})

When('the administrator registers the student with following details without IELTS score', async function(dataTable){
    await homePage.addStudentBtn();
    await registerPage.fillStudentDetails(dataTable);
    await registerPage.clickRegisterBtn();
})

When('the administrator registers the student with following details with ielts score', async function(dataTable){
    await homePage.addStudentBtn();
    await registerPage.fillStudentDetails(dataTable);
    await registerPage.clickRegisterBtn();
})

Then(`the user should see message "Student Registration Successfull!!"`, async function(){
    await registerPage.showSuccessMsg();
})