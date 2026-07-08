import 'dotenv/config';
import { When, Then } from '@cucumber/cucumber';
import type { ICustomWorld } from '../support/world.js';
import { expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { CartPage } from '../pages/CartPage.js';
import { checkoutData} from '../fixtures/test-data.js';

When ('I go to checkout page', async function(this: ICustomWorld) {
    const cartPage = new CartPage(this.page);
    await cartPage.navigateToCheckout();
});

Then('I can fill the checkout form with valid data', async function (this: ICustomWorld) {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.sendCheckout(checkoutData.name.validName, checkoutData.lastName.validLastName, checkoutData.postalCode.validPostalCode);
});

Then('I can fill the checkout form with {string}, {string} and {string}', async function (this: ICustomWorld, name: string, lastName: string, postalCode: string) {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.sendCheckout(name, lastName, postalCode);
    
});

Then(' I should see {string}',async function(this: ICustomWorld, message: string){
    await expect(this.page.getByText(message)).toBeVisible();
});