const {expect} = require("@playwright/test");

 class AddStudentPage {

    constructor() {
        this.addStudentBtnSelector = "button.registerButton";
        this.registerDivElement = ".register-heading-div.text-center";
        this.regStudentBtnSelector = "button.register-Button";
        this.nameInput = "input.name-input";
        this.emailInput = "input.email-input";
        this.addressInput = "input.address-input";
        this.phoneInput = "input.phone-input";
        this.qualSelectBox = '.qualification-select';
        this.bachelorsQualInput = "#react-select-3-option-1";
        this.mastersQualInput = "#react-select-3-option-2";
        this.destSelectBox = '.destination-select .css-1s2u09g-control';
        this.usaDestInput = "#react-select-5-option-1";
        this.canadaDestInput = "#react-select-5-option-2";
        this.japanDestInput = "#react-select-5-option-3";
        this.cgpaInput = "input.percentage-input";
        this.ieltsInputSelectBox = ".ielts-select";
        this.ieltsScoreBox = "div.ielts-score-div";
        this.ieltsYesElement = "#react-select-7-option-1";
        this.successMsgElement = "//div[contains(@class,'modaldiv text-center')]/p";

    }

    // fill the details
    async fillStudentDetails(dataTable) {
        // extract data from data table
        const nameValue = dataTable.raw()[0][1];
        const emailValue = dataTable.raw()[1][1];
        const addrValue = dataTable.raw()[2][1];
        const phoneValue = dataTable.raw()[3][1];
        const qualValue = dataTable.raw()[4][1];
        const cgpaValue = dataTable.raw()[5][1];
        const destValue = dataTable.raw()[6][1];
        const ieltsValue = dataTable.raw()[7][1];

        // click the add student button
        await page.click(this.addStudentBtnSelector);

        // wait for the register form to open
        const regDiv = page.locator(this.registerDivElement);

        // expect the form to be visible
        await expect(regDiv).toBeVisible();

        // fill the details
        await page.fill(this.nameInput, nameValue);
        await page.fill(this.emailInput, emailValue);
        await page.fill(this.addressInput, addrValue);
        await page.fill(this.phoneInput, phoneValue);


        // Default is +2, so only click if necessary for bachelors or masters
        if (qualValue === "bachelors") {
            // first list options and then click the bachelors option
            await page.locator(this.qualSelectBox).click();
            await page.locator(this.bachelorsQualInput).click();

        } else if (qualValue === "masters") {

            await page.locator(this.qualSelectBox).click();
            await page.locator(this.mastersQualInput).click();
        }

        await page.fill(this.cgpaInput, cgpaValue);
        // Default destination is australia, only to click if other options are mentioned
        if (destValue === "usa") {
            // click the select box and select usa option
            await page.locator(this.destSelectBox).click();
            await page.locator(this.usaDestInput).click();

        } else if (destValue === "canada") {
            await page.locator(this.destSelectBox).click();
            await page.locator(this.canadaDestInput).click();

        } else if (destValue === "japan") {
            await page.locator(this.destSelectBox).click();
            await page.locator(this.japanDestInput).click();
        }

        // if no ielts property is passed then it means yes to ielts score
        if (ieltsValue !== "no") {
            const listeningValue = dataTable.raw()[7][1];
            const readingValue = dataTable.raw()[8][1];
            const writingValue = dataTable.raw()[9][1];
            const speakingValue = dataTable.raw()[10][1];
            const overallValue = dataTable.raw()[11][1];

            // select the ielts select box
            await page.locator(this.ieltsInputSelectBox).click();
            // click yes on ietls
            await page.locator(this.ieltsYesElement).click();
            // expect the score box to be visible
            await expect(page.locator(this.ieltsScoreBox)).toBeVisible();


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

    }

    // Click the register button
    async clickRegisterBtn(){
        await page.click(this.regStudentBtnSelector);
    }
}


module.exports = {AddStudentPage};