import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Inventory } from '../pages/InventoryPage';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect (page.getByTestId('title')).toBeVisible();
});

test ('should add product to cart and show badge count', async ({ page }) => {
    const inventory = new Inventory(page);
    await inventory.addToCart('add-to-cart-sauce-labs-backpack');
    await expect (await inventory.getCartCount()).toBe(1);
});