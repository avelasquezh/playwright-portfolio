import 'dotenv/config';
import { When, Then, Given } from '@cucumber/cucumber';
import type { ICustomWorld } from '../support/world.js';
import { expect } from '@playwright/test';
import { NavbarPage } from '../pages/components/NavbarPage.js';

Given ('I am loged in the Saucedemo application', async function(this: ICustomWorld){
    await expect (this.page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});

When ('I select logout option', async function(this: ICustomWorld){
    const navbarPage = new NavbarPage(this.page);
    await navbarPage.logout();
});

Then ('I can finish the session', async function(this: ICustomWorld){
    await expect(this.page.locator('[data-test="login-button"]')).toBeVisible()
});