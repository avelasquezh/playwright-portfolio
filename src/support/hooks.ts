import 'dotenv/config';
import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import type{ ICustomWorld } from './world.js';


Before({ timeout: 30000 }, async function (this: ICustomWorld) {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: ICustomWorld) {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});