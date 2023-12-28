import { test as base } from "@playwright/test";
import HomePage from "./homepage";

type homePageFixture = {
  homePage: HomePage;
};
export const test1 = base.extend<homePageFixture>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
  },
});
export { expect } from "@playwright/test";
