import { test, expect } from 'allure-playwright'; 
import { InventoryPage } from '../pages/InventoryPage.js';
import { inventoryProducts} from '../fixtures/test-data.js';
import { label, epic, feature, story, severity, description} from 'allure-js-commons';
import { Severity } from 'allure-js-commons';

test.beforeEach(async ({ page }) => {
    await page.goto('/inventory.html');
});

test ('should add product to cart and show badge count', async ({ page }) => {
    await label('priority', 'high');
    await epic('Saucedemo');
    await feature('Inventory');
    await story('Cart');
    await severity(Severity.CRITICAL);
    await description('Checks the successful add to cart process and badge count.');

    const inventory = new InventoryPage(page);
    await inventory.addToCart(inventoryProducts.Backpack.BTN);
    expect(await inventory.getCartCount()).toBe(1);
});

test ('should add multiple products to cart and show badge count', async ({ page }) => {
    await label('priority', 'high');
    await epic('Saucedemo');
    await feature('Inventory');
    await story('Cart');
    await severity(Severity.CRITICAL);
    await description('Checks the successful multiple products add to cart process and badge count.');

    const inventory = new InventoryPage(page);
    await inventory.addToCart(inventoryProducts.Backpack.BTN);
    await expect (page.getByTestId('remove-sauce-labs-backpack')).toHaveText('Remove');
    await inventory.addToCart(inventoryProducts.BikeLight.BTN);
    expect(await inventory.getCartCount()).toBe(2);
});