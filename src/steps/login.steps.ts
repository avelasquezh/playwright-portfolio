import 'dotenv/config';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type{ ICustomWorld } from '../support/world.js';
import { LoginPage } from '../pages/LoginPage.js';
import { loginData } from '../fixtures/test-data.js';

Given('I am on the login page', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('I login with valid credentials', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(loginData.user.validUser, loginData.password.validPassword);
});

When('I login with locked user', async function (this: ICustomWorld) {
const loginPage = new LoginPage(this.page);
await loginPage.login(loginData.user.lockedUser, loginData.password.validPassword);
});

When('I login with {string} and {string}', async function (this: ICustomWorld, username: string, password: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(username, password);
});

Then('I can see the products page', async function (this: ICustomWorld) {
  await expect(this.page.locator('[data-test="title"]')).toBeVisible();
});

Then('I should see {string}', async function (this: ICustomWorld, message: string) {
  await expect(this.page.getByText(message)).toBeVisible();
});

Then('I can see the error message', async function (this: ICustomWorld) {
await expect(this.page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});