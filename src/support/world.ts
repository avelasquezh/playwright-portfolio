import 'dotenv/config';
import { setWorldConstructor, World  } from '@cucumber/cucumber';
import type { IWorldOptions} from '@cucumber/cucumber';
import type { BrowserContext, Page, Browser } from '@playwright/test';

export interface ICustomWorld extends World {
  browser: Browser;
  context: BrowserContext;
  page: Page;
}

export class CustomWorld extends World implements ICustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);