const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60000);

const { chromium } = require("playwright");



// launch the browser 
BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 200,
    });

});

// close the browser
AfterAll(async function () {

    await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
    await global.page.close();
    await global.context.close();
});
