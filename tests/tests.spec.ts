import exp from "constants";
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

test1.only(
  "Add contact and check successfully added",
  async ({ homePage, contactPage, page }) => {
    //Add a contact
    contactPage.addContactBtn.click();
    const currentDate = new Date().toISOString().slice(0, 10);
    await contactPage.firstNameInput.fill("Test");
    await contactPage.lastNameInput.fill("Contact");
    await contactPage.dobInput.fill(currentDate);
    await contactPage.emailInput.fill("test@hanan.com");
    await contactPage.phoneNumberInput.fill("123456789");
    await contactPage.streetAddressOneInput.fill("P Sherman 42");
    await contactPage.streetAddressTwoInput.fill("Wallaby Way");
    await contactPage.cityInput.fill("Sydney");
    await contactPage.stateInput.fill("Sydney");
    await contactPage.postalCodeInput.fill("123456");
    await contactPage.countryInput.fill("Austrialia");
    await contactPage.submitBtn.click();

    //Check contact is added on the table view
    //This approach picks which ever table row that contains the required text

    await expect(
      page.locator(".contactTableBodyRow > td").getByText("Test Contact")
    ).toHaveCount(1);

    //Delete the contact and check it is deleted
    await page
      .locator(".contactTableBodyRow > td")
      .getByText("Test Contact")
      .click();

    //For some reason, the playwright test was too quick on the details page and not deleting the contact properly
    //To overcome this I added an additional assertion on the details page
    await expect(contactPage.firstNameInput).toHaveText("Test");
    page.on("dialog", (dialog) => dialog.accept());
    await contactPage.deleteBtn.click();

    await expect(
      page.locator(".contactTableBodyRow > td").getByText("Test Contact")
    ).not.toBeAttached();
  }
);
