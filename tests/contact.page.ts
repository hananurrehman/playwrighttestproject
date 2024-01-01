//The contact page file contains the locators for our test page. Its basically our page object model class.
//Please note that the selectors might be not up to best practices but we're using these for demo purposes.

import type { Page, Locator } from "@playwright/test";

export default class ContactPage {
  page: Page;

  //Contacts list
  readonly pageTitle: Locator;
  readonly pageDescription: Locator;
  readonly addContactBtn: Locator;

  //Add contact form
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly dobInput: Locator;
  readonly phoneNumberInput: Locator;
  readonly emailInput: Locator;
  readonly streetAddressOneInput: Locator;
  readonly streetAddressTwoInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly postalCodeInput: Locator;
  readonly countryInput: Locator;
  readonly submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    //Contacts list
    this.pageTitle = page.locator("header > h1");
    this.pageDescription = page.locator("header + p");
    this.addContactBtn = page.locator("#add-contact");

    //Add contact form
    this.firstNameInput = page.locator("#firstName");
    this.lastNameInput = page.locator("#lastName");
    this.dobInput = page.locator("#birthdate");
    this.emailInput = page.locator("#email");
    this.phoneNumberInput = page.locator("#phone");
    this.streetAddressOneInput = page.locator("#street1");
    this.streetAddressTwoInput = page.locator("#street2");
    this.cityInput = page.locator("#city");
    this.stateInput = page.locator("#stateProvince");
    this.postalCodeInput = page.locator("#postalCode");
    this.countryInput = page.locator("#country");
    this.submitBtn = page.locator("#submit");
  }
}
