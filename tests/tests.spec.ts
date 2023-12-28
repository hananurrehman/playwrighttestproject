import { test1, expect } from "./fixture";

test1("Check login form title", async ({ homePage, page }) => {
  await expect(
    page.locator("body > div.main-content > p:nth-child(1)")
  ).toHaveText("Log In:");
});

test1("Check email label", async ({ homePage, page }) => {
  await expect(page.locator("#email")).toHaveAttribute("placeholder", "Email");
});
