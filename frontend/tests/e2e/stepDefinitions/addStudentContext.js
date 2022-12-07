const {Given, When, Then} = require('@cucumber/cucumber')
const {expect} = require('@playwright/test')

const url = 'http://localhost:3000'

Given('the user has browsed the home page', async () => {
    await page.goto(url)
    await expect(page.locator('.submitbutton')).toBeVisible()

    await page.fill('.username', 'admin')
    await page.fill('.password', 'admin')
    await page.click('.submitbutton')

    await expect(page.locator('.registerButton')).toBeVisible()

    await page.click('.registerButton')

    await expect(page.locator('.register-heading')).toBeVisible()
})

When('the administrator registers the student with following details with no ielts score', async (table) => {
    const items = table.rowsHash()

    await page.fill('.name-input', items.name)
    await page.fill('.email-input', items.email)
    await page.fill('.address-input', items.address)
    await page.fill('.phone-input', items.phone)

    await page.click('.qualification-select')
    if(items.qualification === 'bachelors') await page.click('#react-select-3-option-1')
    if(items.qualification === 'masters') await page.click('#react-select-3-option-2')

    await page.fill('.percentage-input', items.gpa)

    await page.click('.destination-select')
    if(items.destination === 'usa') await page.click('#react-select-5-option-1')
    if(items.destination === 'canada') await page.click('#react-select-5-option-2')
    if(items.destination === 'japan') await page.click('#react-select-5-option-3')

    // await page.click('.ielts-select')
    // if(items.ielts === 'no') await page.click('#react-select-7-option-0')
    // if(items.ielts === 'yes'){
    //     await expect(page.locator('.ielts-input-div')).toBeVisible();
    // }

    await page.click('.register-Button')
})

When('the administrator registers the student with following details with ielts score', async (table) => {
    const items = table.rowsHash()

    await page.fill('.name-input', items.name)
    await page.fill('.email-input', items.email)
    await page.fill('.address-input', items.address)
    await page.fill('.phone-input', items.phone)

    await page.click('.qualification-select')
    if(items.qualification === 'bachelors') await page.click('#react-select-3-option-1')
    if(items.qualification === 'masters') await page.click('#react-select-3-option-2')

    await page.fill('.percentage-input', items.gpa)

    await page.click('.destination-select')
    if(items.destination === 'usa') await page.click('#react-select-5-option-1')
    if(items.destination === 'canada') await page.click('#react-select-5-option-2')
    if(items.destination === 'japan') await page.click('#react-select-5-option-3')

    await page.click('.ielts-select')
    if(items.ielts === 'no') await page.click('#react-select-7-option-0')
    if(items.ielts === 'yes'){
        await page.click('#react-select-7-option-1')
        await expect(page.locator('.ielts-input-div')).toBeVisible();

        await page.fill('.listening-input', items.listening)
        await page.fill('.reading-input', items.reading)
        await page.fill('.writing-input', items.writing)
        await page.fill('.speaking-input', items.speaking)
        await page.fill('.overallband-input', items.overall)
    }

    await page.click('.register-Button')
})

Then('the user should see success message', async () => { 
    await expect(page.locator('.okButton')).toBeVisible()
    await page.click('.okButton')
    await expect(page.locator('.registerButton')).toBeVisible()
})