//The contact page file contains the locators for our test page. Its basically our page object model class.
//Please note that the selectors might be not up to best practices but we're using these for demo purposes.

import type { Page, Locator } from "@playwright/test";

export default class ContactPage {
  page: Page;

  readonly pageTitle: Locator;
  readonly pageDescription: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator("header > h1");
    this.pageDescription = page.locator("header + p");
  }
}
