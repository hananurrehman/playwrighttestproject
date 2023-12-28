import { test1, expect } from "./fixture";

test1(
  "Verify contacts page title and description",
  async ({ homePage, contactPage, page }) => {
    await expect(contactPage.pageTitle).toHaveText("Contact List");
    await expect(contactPage.pageDescription).toHaveText(
      "Click on any contact to view the Contact Details"
    );
    console.log("Checked contact page title and description");
  }
);
//TODO: Add contacts and test
