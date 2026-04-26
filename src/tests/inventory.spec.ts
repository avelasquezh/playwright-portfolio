import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { loginData, inventoryProducts} from '../fixtures/test-data.js';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(loginData.user.validUser, loginData.pasword.validPassword);
    await expect (page.getByTestId('title')).toBeVisible();
});

test ('should add product to cart and show badge count', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addToCart(inventoryProducts.sauceLabsBackpack.sauceLabsBackpackBTN);
    expect(await inventory.getCartCount()).toBe(1);
});