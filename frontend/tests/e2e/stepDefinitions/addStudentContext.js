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


When('the user tries to add a student with name {string}, email {string}, address {string}, phone {string}, qualification {string}, cgpa {string}, destination {string} and ielts {string}',
    async function (name, email, address, phone, qualification, cgpa, destination, ielts) {

        // goto register page
        //await page.goto(addStuentURL);

        // Since we're already on home page, just click add student button

        // click the add student button
        await page.click(addStudentElement);

        // wait for the register form to open
        const regDiv = page.locator(registerDivElement);

        // expect the form to be visible
        await expect(regDiv).toBeVisible();

        // fill the details
        await page.fill(nameInput, name);
        await page.fill(emailInput, email);
        await page.fill(addressInput, address);
        await page.fill(phoneInput, phone);


        // Default is +2, so only click if necessary for bachelors or masters
        if (qualification === "bachelors") {
            // first list options and then click the bachelors option
            await page.locator(qualSelectBox).click();
            await page.locator(bachelorsQualInput).click();

        } else if (qualification === "masters") {

            await page.locator(qualSelectBox).click();
            await page.locator(mastersQualInput).click();
        }


        await page.fill(cgpaInput, cgpa);

        // // Default destination is australia, only to click if other options are mentioned
        if (destination === "usa") {
            // click the select box and select usa option
            await page.locator(destSelectBox).click();
            await page.locator(usaDestInput).click();

        } else if (destination === "canada") {
            await page.locator(destSelectBox).click();
            await page.locator(canadaDestInput).click();

        } else if (destination === "japan") {
            await page.locator(destSelectBox).click();
            await page.locator(japanDestInput).click();
        }

        // For this, ielts option is no so skip clicking 
        // if (ielts === "yes"){
        //     await page.locator(ieltsInputSelectBox).click();
        //     await expect(page.locator(ieltsScoreBox)).toBeVisible();
        //     const listenInput = page.locator("input.listening-input");
        //     const readingInput = page.locator("input.reading-input");
        //     const writingInput = page.locator("input.writing-input");
        //     const speakigInput = page.locator("input.speaking-input");
        //     const overallInput = page.locator("overallband-number");
        // }
        //await page.fill(ieltsInput,ielts);

        // click register button
        await page.click(registerStudentElement);
    });

When('the user tries to add a student with name {string}, email {string}, address {string}, phone {string}, qualification {string}, cgpa {string}, destination {string} and scores of listening {string}, reading {string}, writing {string}, speaking {string} and overall {string}',
    async function (name, email, address, phone, qualification, cgpa, destination, listening, reading, writing, speaking, overall) {

        // Since we're already on home page, just click add student button

        // click the add student button
        await page.click(addStudentElement);

        // wait for the register form to open
        const regDiv = page.locator(registerDivElement);

        // expect the form to be visible
        await expect(regDiv).toBeVisible();

        // fill the details
        await page.fill(nameInput, name);
        await page.fill(emailInput, email);
        await page.fill(addressInput, address);
        await page.fill(phoneInput, phone);


        // Default is +2, so only click if necessary for bachelors or masters
        if (qualification === "bachelors") {
            // first list options and then click the bachelors option
            await page.locator(qualSelectBox).click();
            await page.locator(bachelorsQualInput).click();

        } else if (qualification === "masters") {

            await page.locator(qualSelectBox).click();
            await page.locator(mastersQualInput).click();
        }


        await page.fill(cgpaInput, cgpa);

        // // Default destination is australia, only to click if other options are mentioned
        if (destination === "usa") {
            // click the select box and select usa option
            await page.locator(destSelectBox).click();
            await page.locator(usaDestInput).click();

        } else if (destination === "canada") {
            await page.locator(destSelectBox).click();
            await page.locator(canadaDestInput).click();

        } else if (destination === "japan") {
            await page.locator(destSelectBox).click();
            await page.locator(japanDestInput).click();
        }

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


        await page.fill(listenInput, listening);
        await page.fill(readingInput, reading);
        await page.fill(writingInput, writing);
        await page.fill(speakigInput, speaking);
        await page.fill(overallInput, overall);


        // click register button
        await page.click(registerStudentElement);

    });



Then('the user should be provided with add successful message', async function () {
    // check for success msg
    const msg = page.locator(successMsgElement);
    await expect(msg).toBeVisible();
    //await page.click(okButton);
});

