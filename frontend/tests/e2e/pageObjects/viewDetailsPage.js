const { expect } = require("@playwright/test");

class ViewDetailsPage {
  constructor() {
    this.detailsPageSelector = ".heading";
  }

  async viewDetails() {
    await expect(page.locator(this.detailsPageSelector)).toBeVisible();
  }
}

module.exports = { ViewDetailsPage };
