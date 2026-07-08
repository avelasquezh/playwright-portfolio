import 'dotenv/config';
import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { ICustomWorld } from '../support/world.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { inventoryProducts} from '../fixtures/test-data.js';

When ('I add product to cart', async function(this: ICustomWorld) {
    const inventoryPage = new InventoryPage(this.page);
    await inventoryPage.addToCart(inventoryProducts.Backpack.BTN);
});

Then('I can see the cart badge count', async function (this: ICustomWorld) {
    const inventoryPage = new InventoryPage(this.page);
    expect(await inventoryPage.getCartCount()).toBe(1);
});

When ('I add {string} and {string} to cart', async function(this: ICustomWorld, productName1: string, productName2: string) {
    const inventoryPage = new InventoryPage(this.page);
    const product1 = Object.values(inventoryProducts).find(item => item.Name === productName1);
    await inventoryPage.addToCart(product1!.BTN);
    const product2 = Object.values(inventoryProducts).find(item => item.Name === productName2);
    await inventoryPage.addToCart(product2!.BTN);
});

Then('I can see the cart badge count is {string}', async function (this: ICustomWorld, count: string) {
    const inventoryPage = new InventoryPage(this.page);
    expect(await inventoryPage.getCartCount()).toBe(Number(count));
});

