const { expect } = require("@playwright/test");

class HomePage {
  constructor() {
    this.menuSelector = ".menuButton";
    this.logoutSelector = 'li:has-text("Logout")';
    this.addStudentSelector = ".registerButton";
    this.deleteSuccessMsg = ".okButton";
  }

  async navigateToHomePage() {
    const menuLocator = page.locator(this.menuSelector);
    await expect(menuLocator).toBeVisible();
  }

  async logout() {
    await page.click(this.menuSelector);
    await page.locator(this.logoutSelector).click();
  }

  async addStudentBtn() {
    await page.click(this.addStudentSelector);
  }

  async clickDetailsBtn(email) {
    const row = page.locator(`td:has-text("${email}")`);
    expect(row).toBeVisible();
    await row.highlight();
    const detailsBtn = `//td[contains(text(),"${email}")]/following-sibling::td/a[contains(text(),"Details")]`;
    await page.locator(detailsBtn).click();
  }

  async clickDeleteBtn(email) {
    const row = page.locator(`td:has-text("${email}")`);
    expect(row).toBeVisible();
    await row.highlight();
    const deleteBtn = `//td[contains(text(),"${email}")]/following-sibling::td/a[contains(text(),"Delete")]`;
    await page.locator(deleteBtn).click();
  }

  async popUpDeleteSuccess() {
    await expect(page.locator(this.deleteSuccessMsg)).toBeVisible();
  }
}

module.exports = { HomePage };
