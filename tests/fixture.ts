//This fixture is used to access the home page and we use this in our tests.
import { test as base } from "@playwright/test";
import HomePage from "./home.page";
import ContactPage from "./contact.page";

type testFixture = {
  homePage: HomePage;
  contactPage: ContactPage;
};
export const test1 = base.extend<testFixture>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.login();
    await use(homePage);
  },
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await use(contactPage);
  },
});
export { expect } from "@playwright/test";
