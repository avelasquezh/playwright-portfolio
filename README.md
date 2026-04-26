# playwright-portfolio
E2E test automation with Playwright and TypeScript

If you want to run this project, you must prepare this configuration:

DOTENV
add a .env file on the project root
install dotenv with this command: 
    npm i -D dotenv
add this lines in the playwright.config.ts file: 

    import dotenv from 'dotenv';
    dotenv.config();

ESLINT
ESLint is a static testing tool who provides us the posibility to make a code strict review, allows identify bad configurations, imports unused or non called variables, in addition the tool give a command output with all the issues.

complete this steps con configure correctli ESLint:

add the eslint.config.js file on the project root
add the tsconfig.json file on the project root
install ESLint with this command:
    npm install -D eslint @eslint/js typescript-eslint
Edit your package.json file adding the next lines under description line:
    "type": "module",
    "scripts": {
        "lint": "eslint .",
        "test": "playwright test"
    },