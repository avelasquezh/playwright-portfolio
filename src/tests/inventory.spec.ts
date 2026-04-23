import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Inventory } from '../pages/InventoryPage';

test ('should add product to cart and show badge count', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventory = new Inventory(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect (inventory.title).toBeVisible();
    
    await inventory.addToCart('add-to-cart-sauce-labs-backpack');
    await expect (await inventory.getCartCount()).toBe(1);
});