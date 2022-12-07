const { When, Then } = require("@cucumber/cucumber");

const { expect } = require("@playwright/test");


const addStudentElement = "button.registerButton";
const registerStudentElement = "button.register-Button";
const nameInput = "input.name-input";
const emailInput = "input.email-input";
const addressInput = "input.address-input";
const phoneInput = "input.phone-input";

const qualSelectBox = '.qualification-select';
const bachelorsQualInput = "#react-select-3-option-1";
const mastersQualInput = "#react-select-3-option-2";

const destSelectBox = '.destination-select .css-1s2u09g-control';
const usaDestInput = "#react-select-5-option-1";
const canadaDestInput = "#react-select-5-option-2";
const japanDestInput = "#react-select-5-option-3";


const cgpaInput = "input.percentage-input";
const ieltsInputSelectBox = ".ielts-select";
const ieltsScoreBox = "div.ielts-score-div";
const ieltsYesElement = "#react-select-7-option-1";


const successMsgElement = 'div.modaldiv.text-center';

const registerDivElement = "div.main-register-div";


When('the user tries to add a student with details',
    async function (dataTable) {

       const nameValue = dataTable.raw()[0][1];
       const emailValue = dataTable.raw()[1][1];
       const addrValue = dataTable.raw()[2][1];
       const phoneValue = dataTable.raw()[3][1];
       const qualValue = dataTable.raw()[4][1];
       const cgpaValue = dataTable.raw()[5][1];
       const destValue = dataTable.raw()[6][1];
       const ieltsValue = dataTable.raw()[7][1];


        // Since we're already on home page, just click add student button

        // click the add student button
        await page.click(addStudentElement);

        // wait for the register form to open
        const regDiv = page.locator(registerDivElement);

        // expect the form to be visible
        await expect(regDiv).toBeVisible();

        // fill the details
        await page.fill(nameInput, nameValue);
        await page.fill(emailInput, emailValue);
        await page.fill(addressInput, addrValue);
        await page.fill(phoneInput, phoneValue);


        // Default is +2, so only click if necessary for bachelors or masters
        if (qualValue === "bachelors") {
            // first list options and then click the bachelors option
            await page.locator(qualSelectBox).click();
            await page.locator(bachelorsQualInput).click();

        } else if (qualValue === "masters") {

            await page.locator(qualSelectBox).click();
            await page.locator(mastersQualInput).click();
        }


        await page.fill(cgpaInput, cgpaValue);

        // // Default destination is australia, only to click if other options are mentioned
        if (destValue === "usa") {
            // click the select box and select usa option
            await page.locator(destSelectBox).click();
            await page.locator(usaDestInput).click();

        } else if (destValue === "canada") {
            await page.locator(destSelectBox).click();
            await page.locator(canadaDestInput).click();

        } else if (destValue === "japan") {
            await page.locator(destSelectBox).click();
            await page.locator(japanDestInput).click();
        }

        // if no ielts property is passed then it means yes to ielts score
        if (ieltsValue !== "no"){
            const listeningValue = dataTable.raw()[7][1];
            const readingValue = dataTable.raw()[8][1];
            const writingValue = dataTable.raw()[9][1];
            const speakingValue = dataTable.raw()[10][1];
            const overallValue = dataTable.raw()[11][1];
     
        // select the ielts select box
        await page.locator(ieltsInputSelectBox).click();
        // click yes on ietls
        await page.locator(ieltsYesElement).click();
        // expect the score box to be visible
        await expect(page.locator(ieltsScoreBox)).toBeVisible();


        const listenInput = ".listening-input";
        const readingInput = ".reading-input";
        const writingInput = ".writing-input";
        const speakigInput = ".speaking-input";
        const overallInput = ".overallband-input";


        await page.fill(listenInput, listeningValue);
        await page.fill(readingInput, readingValue);
        await page.fill(writingInput, writingValue);
        await page.fill(speakigInput, speakingValue);
        await page.fill(overallInput, overallValue);
        }


        // click register button
        await page.click(registerStudentElement);

    });



Then('the user should see message "Student Registration Successfull!!"', async function () {
    // check for success msg
    const msg = page.locator(successMsgElement);
    await expect(msg).toBeVisible();
    //await page.click(okButton);
});

