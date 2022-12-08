

class LoginPage {

    constructor(page) {
        page = page;
        // locators
        this.usernameSelector = ".username";
        this.passwordSelector = ".password";
        this.loginBtnSelector = ".submitbutton";
        this.errorMsgSelector = "//p[contains(@class,'error-message')]";
        this.loginPageUrl = "http://localhost:3000";
    }

    // Navigate to the login page
    async navigate() {
        await page.goto(this.loginPageUrl);
    }

    // Fill the login input fields
    async fillLoginInputFields(inputData) {
        await page.fill(this.usernameSelector, inputData.username);
        await page.fill(this.passwordSelector, inputData.password);

    }

    // Click the login button
    async clickLoginBtn() {
        await page.click(this.loginBtnSelector);
    }


}

module.exports = {LoginPage};