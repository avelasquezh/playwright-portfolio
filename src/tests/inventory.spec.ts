import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { loginData, inventoryProducts} from '../fixtures/test-data';

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