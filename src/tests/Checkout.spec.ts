import {test, expect} from '@playwright/test';
<<<<<<< HEAD
import {LoginPage } from '../pages/LoginPage';
import {InventoryPage } from '../pages/InventoryPage';
import {CartPage } from '../pages/CartPage';
import {CheckoutPage } from '../pages/CheckoutPage';
import {CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import {loginData, checkoutData, inventoryProducts} from '../fixtures/test-data';
=======
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
>>>>>>> 999465061fed641360a0e30df43738d836bfeb2c

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(loginData.user.validUser, loginData.pasword.validPassword);
    await expect (page.getByTestId('title')).toBeVisible();
    const inventory = new InventoryPage(page);
    await inventory.addToCart(inventoryProducts.sauceLabsBackpack.sauceLabsBackpackBTN);
    expect(await inventory.getCartCount()).toBe(1);
    await page.getByTestId('shopping-cart-link').click(); 
});

test ('should complete checkout successfully with valid customer data', async ({ page }) => {
    const cartPage = new CartPage(page);
    //se espera que se encuentre en la pagina cart
    await expect (cartPage.title).toHaveText('Your Cart');//OK //Los localizadores no necesitan await
    //se espera que el carrito tenga productos
    await expect (page.getByTestId('inventory-item-name')).toHaveText(inventoryProducts.sauceLabsBackpack.sauceLabsBackpackName);//OK
    //se espera que permita navegar a la pagina checkout (metodo)
    await cartPage.navigateToCheckout();//OK
    //Se espera que se encuentre en la pagina checkout
    const checkoutPage = new CheckoutPage(page);
    await expect (checkoutPage.title).toHaveText('Checkout: Your Information');//OK
    //se espera que permita llenar y enviar el formulario (metodo)
    await checkoutPage.sendCheckout(checkoutData.name.validName, checkoutData.lastName.validLastName, checkoutData.postalCode.validPostalCode);//OK
    //Se espera que se encuentre en la pagina checkoutOverview
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    await expect (checkoutOverviewPage.title).toHaveText('Checkout: Overview');//OK
    //se espera que el checkout contenga el producto correcto
    await expect (page.getByTestId('inventory-item-name')).toHaveText(inventoryProducts.sauceLabsBackpack.sauceLabsBackpackName);//OK
    //se espera que se permita finalizar el checkout (metodo)
    await checkoutOverviewPage.finishCheckout();
    //se espera que se encuentre en la pagina de confirmación
    await expect (page.getByTestId('title')).toHaveText('Checkout: Complete!');//OK
    //se espera que se muestre el mensaje de confirmación del checkout completado
    await expect (page.getByTestId('complete-header')).toHaveText('Thank you for your order!');//OK
});

test.describe('checkout form validation with invalid inputs', () => {
        
    test.beforeEach(async ({ page }) => {
        const cartPage = new CartPage(page);
        await expect (cartPage.title).toHaveText('Your Cart');
        await expect (page.getByTestId('inventory-item-name')).toHaveText(inventoryProducts.sauceLabsBackpack.sauceLabsBackpackName);
        await cartPage.navigateToCheckout();
    });

    test('should not complete checkout with non valid customer name', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        await expect (checkoutPage.title).toHaveText('Checkout: Your Information');
        await checkoutPage.sendCheckout(checkoutData.name.voidName, checkoutData.lastName.validLastName, checkoutData.postalCode.validPostalCode);
        await expect(page.getByTestId('error')).toHaveText('Error: First Name is required');
        
    });

    test('should not complete checkout with non valid customer last name', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        await expect (checkoutPage.title).toHaveText('Checkout: Your Information');
        await checkoutPage.sendCheckout(checkoutData.name.validName, checkoutData.lastName.voidLastName, checkoutData.postalCode.validPostalCode);
        await expect(page.getByTestId('error')).toHaveText('Error: Last Name is required');
    });

    test('should not complete checkout with non valid customer postal code', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        await expect (checkoutPage.title).toHaveText('Checkout: Your Information');
        await checkoutPage.sendCheckout(checkoutData.name.validName, checkoutData.lastName.validLastName, checkoutData.postalCode.voidPostalCode);
        await expect(page.getByTestId('error')).toHaveText('Error: Postal Code is required');
    });
});
