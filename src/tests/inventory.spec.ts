import { test, expect } from 'allure-playwright'; 
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { loginData, inventoryProducts} from '../fixtures/test-data.js';
import { label, epic, feature, story, severity, description} from 'allure-js-commons';
import { Severity } from 'allure-js-commons';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(loginData.user.validUser, loginData.password.validPassword);
    await expect (page.getByTestId('title')).toBeVisible();
});

test ('should add product to cart and show badge count', async ({ page }) => {
    await label('priority', 'high');
    await epic('Saucedemo');
    await feature('Inventory');
    await story('Cart');
    await severity(Severity.CRITICAL);
    await description('Checks the succesfull add to cart process and badge count.');

    const inventory = new InventoryPage(page);
    await inventory.addToCart(inventoryProducts.sauceLabsBackpack.sauceLabsBackpackBTN);
    expect(await inventory.getCartCount()).toBe(1);
});