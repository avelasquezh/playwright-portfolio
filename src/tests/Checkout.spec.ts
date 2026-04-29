import { test, expect } from 'allure-playwright'; 
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage.js';
import { loginData, checkoutData, inventoryProducts} from '../fixtures/test-data.js';
import { label, epic, feature, story, severity, description, Severity } from 'allure-js-commons';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(loginData.user.validUser, loginData.password.validPassword);
    await expect (page.getByTestId('title')).toBeVisible();
    const inventory = new InventoryPage(page);
    await inventory.addToCart(inventoryProducts.sauceLabsBackpack.sauceLabsBackpackBTN);
    expect(await inventory.getCartCount()).toBe(1);
    await page.getByTestId('shopping-cart-link').click(); 
});

test ('should complete checkout successfully with valid customer data', async ({ page }) => {
    await label('priority', 'high');
    await epic('Saucedemo');
    await feature('Checkout');
    await story('Checkout Form');
    await severity(Severity.CRITICAL);
    await description('Checks the succesfull checkout with valid customer information.');

    const cartPage = new CartPage(page);
    await expect (cartPage.title).toHaveText('Your Cart');
    await expect (page.getByTestId('inventory-item-name')).toHaveText(inventoryProducts.sauceLabsBackpack.sauceLabsBackpackName);
    await cartPage.navigateToCheckout();
    const checkoutPage = new CheckoutPage(page);
    await expect (checkoutPage.title).toHaveText('Checkout: Your Information');
    await checkoutPage.sendCheckout(checkoutData.name.validName, checkoutData.lastName.validLastName, checkoutData.postalCode.validPostalCode);
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    await expect (checkoutOverviewPage.title).toHaveText('Checkout: Overview');
    await expect (page.getByTestId('inventory-item-name')).toHaveText(inventoryProducts.sauceLabsBackpack.sauceLabsBackpackName);
    await checkoutOverviewPage.finishCheckout();
    await expect (page.getByTestId('title')).toHaveText('Checkout: Complete!');
    await expect (page.getByTestId('complete-header')).toHaveText('Thank you for your order!');
});

test.describe('checkout form validation with invalid inputs', () => {
        
    test.beforeEach(async ({ page }) => {
        const cartPage = new CartPage(page);
        await expect (cartPage.title).toHaveText('Your Cart');
        await expect (page.getByTestId('inventory-item-name')).toHaveText(inventoryProducts.sauceLabsBackpack.sauceLabsBackpackName);
        await cartPage.navigateToCheckout();
    });

    test('should not complete checkout with invalid customer name', async ({ page }) => {
        await label('priority', 'high');
        await epic('Saucedemo');
        await feature('Checkout');
        await story('Checkout Form');
        await severity(Severity.NORMAL);
        await description('Checks the unsuccesfull checkout with invalid customer name.');

        const checkoutPage = new CheckoutPage(page);
        await expect (checkoutPage.title).toHaveText('Checkout: Your Information');
        await checkoutPage.sendCheckout(checkoutData.name.voidName, checkoutData.lastName.validLastName, checkoutData.postalCode.validPostalCode);
        await expect(page.getByTestId('error')).toHaveText('Error: First Name is required');
        
    });

    test('should not complete checkout with invalid customer last name', async ({ page }) => {
        await label('priority', 'high');
        await epic('Saucedemo');
        await feature('Checkout');
        await story('Checkout Form');
        await severity(Severity.NORMAL);
        await description('Checks the unsuccesfull checkout with invalid customer last name.');

        const checkoutPage = new CheckoutPage(page);
        await expect (checkoutPage.title).toHaveText('Checkout: Your Information');
        await checkoutPage.sendCheckout(checkoutData.name.validName, checkoutData.lastName.voidLastName, checkoutData.postalCode.validPostalCode);
        await expect(page.getByTestId('error')).toHaveText('Error: Last Name is required');
    });

    test('should not complete checkout with invalid customer postal code', async ({ page }) => {
        await label('priority', 'high');
        await epic('Saucedemo');
        await feature('Checkout');
        await story('Checkout Form');
        await severity(Severity.NORMAL);
        await description('Checks the unsuccesfull checkout with invalid customer postal code.');

        const checkoutPage = new CheckoutPage(page);
        await expect (checkoutPage.title).toHaveText('Checkout: Your Information');
        await checkoutPage.sendCheckout(checkoutData.name.validName, checkoutData.lastName.validLastName, checkoutData.postalCode.voidPostalCode);
        await expect(page.getByTestId('error')).toHaveText('Error: Postal Code is required');
    });
});
