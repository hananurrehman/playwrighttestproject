import type { Page } from "@playwright/test";

export default class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://thinking-tester-contact-list.herokuapp.com/");
  }
}
