import 'dotenv/config';
import { When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { ICustomWorld } from '../support/world.js';
import { CartPage } from '../pages/CartPage.js';
import { inventoryProducts} from '../fixtures/test-data.js';

When ('I go to cart page', async function(this: ICustomWorld) {
    const cartPage = new CartPage(this.page);
    await this.page.locator('[data-test="shopping-cart-link"]').click(); 
    await expect (cartPage.title).toHaveText('Your Cart');
});

When ('I confirm the product added to cart', async function(this: ICustomWorld) {
    await expect (this.page.locator('[data-test="inventory-item-name"]')).toHaveText(inventoryProducts.Backpack.Name);
});
