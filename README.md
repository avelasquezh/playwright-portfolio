# playwright-portfolio
E2E test automation with Playwright and TypeScript

If yow want to run this project, you must prepare this configuration:

add a .env file in the project root
install dotenv with this command: npm i -D dotenv
add this lines in the playwright.config.ts file: 

    import dotenv from 'dotenv';
    dotenv.config();