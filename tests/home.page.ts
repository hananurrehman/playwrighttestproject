//The homepage file contains the locators and goto method call for our test page. Its basically our page object model class

import type { Page, Locator } from "@playwright/test";

export default class HomePage {
  page: Page;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginSubmitButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.loginSubmitButton = page.locator("#submit");
  }

  async goto() {
    await this.page.goto("https://thinking-tester-contact-list.herokuapp.com/");
  }

  async login() {
    await this.emailInput.fill("test@hanan.com");
    await this.passwordInput.fill("123456789");
    await this.loginSubmitButton.click();
  }
}
