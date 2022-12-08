const {expect} = require('@playwright/test');

class RegisterPage {
    constructor() {
        this.registerPageSelector = '.register-heading';
        this.nameSelector = '.name-input';
        this.emailSelector = '.email-input';
        this.addressSelector = '.address-input';
        this.phoneSelector = '.phone-input';
        this.qualificationSelector = '.qualification-select';
        this.gpaSelector = '.percentage-input';
        this.destinationSelector = '.destination-select';
        this.ieltsSelector = '.ielts-select';
        this.listeningSelector = '.listening-input';
        this.readingSelector = '.reading-input';
        this.writingSelector = '.writing-input';
        this.speakingSelector = '.speaking-input';
        this.overallSelector = '.overallband-input';
        this.registerBtn = '.register-Button';
        this.ieltsInputSelector = '.ielts-input-div';
        this.successMsgSelector = '.okButton';
    }

    async fillStudentDetails(table){
        const items = table.rowsHash()

        await page.fill(this.nameSelector, items.name);
        await page.fill(this.emailSelector, items.email);
        await page.fill(this.addressSelector, items.address);
        await page.fill(this.phoneSelector, items.phone);
        
        await page.click(this.qualificationSelector);
        if(items.qualification === 'bachelors') await page.click('#react-select-3-option-1');
        if(items.qualification === 'masters') await page.click('#react-select-3-option-2');

        await page.fill(this.gpaSelector, items.gpa);
        
        await page.click(this.destinationSelector);
        if(items.destination === 'usa') await page.click('#react-select-5-option-1');
        if(items.destination === 'canada') await page.click('#react-select-5-option-2');
        if(items.destination === 'japan') await page.click('#react-select-5-option-3');

        await page.click(this.ieltsSelector);
        if(items.ielts === 'no') await page.click('#react-select-7-option-0');
        if(items.ielts === 'yes'){
            await page.click('#react-select-7-option-1');
            await expect(page.locator(this.ieltsInputSelector)).toBeVisible();
            await page.fill(this.listeningSelector, items.listening);
            await page.fill(this.readingSelector, items.reading);
            await page.fill(this.writingSelector, items.writing);
            await page.fill(this.speakingSelector, items.speaking);
            await page.fill(this.overallSelector, items.overall);
        }
    }

    async clickRegisterBtn() {
        await page.click(this.registerBtn);
    }

    async showSuccessMsg(){
        await expect(page.locator(this.successMsgSelector)).toBeVisible();
        await page.click(this.successMsgSelector);
    }
}

module.exports = {RegisterPage};