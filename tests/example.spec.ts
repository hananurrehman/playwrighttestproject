import { test, expect } from "@playwright/test";
test.describe("Parabank homepage", () => {
  test("Check login form title", async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    const title = page.locator("#leftPanel > h2");
    await page.pause();
    await expect.soft(title).toHaveText("Customer Login");
    await expect(page.locator("#topPanel > p")).toHaveText(
      "Experience the difference"
    );
  });

  test("Check username label", async ({ page, browserName }) => {
    test.fixme(browserName === "chromium", "Fix this test");
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    const text = page.locator("#loginPanel > form > p:nth-child(1) > b");
    await expect(text).toHaveText("Username");
  });
});
//TODO: Watch tutorials for fixtures and extending them
