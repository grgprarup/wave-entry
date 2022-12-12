class HomePage {

    constructor() {

        // locators
        this.homeLogoSelector = ".homeLogo";
        this.addStudentSelector = "button.registerButton";
        this.menuSelector = "button.menuButton";
        this.logoutBtnSelector = 'li:has-text("Logout")';
    }

    // click the add student button
    async clickAddStudentBtn() {
        await page.click(this.addStudentSelector);
    }

    async clickLogoutBtn() {
        // click the menu item
        await page.locator(this.menuSelector).click();
        // click on logout
        await page.locator(this.logoutBtnSelector).click();
    }
}


// export the class
module.exports = { HomePage };