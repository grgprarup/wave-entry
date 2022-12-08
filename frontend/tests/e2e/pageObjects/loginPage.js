class LoginPage {
    constructor() {
        this.usernameSelector = '.username';
        this.passwordSelector = '.password';
        this.loginBtnSelector = '.submitbutton';
        this.homePageSelector = '.homeLogo';
        this.errorMsgSelector = '.error-message'
    }

    async navigate() {
        await page.goto('http://localhost:3000');
    }

    async fillLoginInputFields(username, password) {
        await page.fill(this.usernameSelector, username);
        await page.fill(this.passwordSelector, password);
    }

    async clickLoginBtn() {
        await page.click(this.loginBtnSelector);
    }
}
module.exports = {LoginPage};