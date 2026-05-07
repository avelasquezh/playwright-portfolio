# playwright-portfolio
E2E test automation with Playwright and TypeScript
Description

This project implements end-to-end (E2E) test automation for SauceDemo using Playwright with TypeScript.

The goal is to demonstrate a robust, maintainable, and scalable test automation framework following industry best practices.

Tech Stack
Playwright – Browser automation
TypeScript – Strong typing and code reliability
ESLint (strict configuration) – Code quality enforcement
Allure Framework – Advanced test reporting
dotenv – Secure environment variable management
Project Structure
src/
 ├── pages/        # Page Object Model (POM)
 ├── tests/        # Test specifications
 ├── fixtures/     # Test data and configuration

The framework follows a clear separation of concerns:

Page Objects → UI interactions
Tests → business flows
Fixtures → test data management
Features
Page Object Model (POM) design pattern
Centralized and typed test data
Secure handling of credentials using .env
Strict linting rules for TypeScript
Scalable and maintainable architecture
Clean and readable test structure
Reporting

Test results are integrated with Allure Framework, providing:

Execution details and traceability
Severity classification (critical, normal, etc.)
Test metadata (epic, feature, story)
Historical trends (when configured)

Reports can be:

generated locally
uploaded as CI artifacts
published via GitHub Pages
CI/CD Integration

The project includes integration with GitHub Actions:

Automated test execution on push
Allure report generation
Artifact upload
Optional deployment to GitHub Pages
Quality Standards
Strict ESLint configuration for TypeScript
Type-safe test data handling
Consistent coding standards
Clean separation of responsibilities
Scope

The automated flows focus on critical business scenarios:

User authentication
Product inventory validation
Add to cart
Checkout process
Objective

This project is designed to showcase:

Modern E2E automation practices
Strong TypeScript usage
Clean architecture and maintainability
Professional reporting and CI/CD integration

Metrics 

Total automated Tests
    8 test cases including login tests (valid and invalid, locked or wrong credentials), inventory tests an checkout tests

Severity Distribution
    Total test cases: 8 (3 Critical, 5 Normal)

Severity Distribution per feature
    Authentication 
        - Critical 1 - 12.5%
        - Normal 2 - 25%

    Checkout
        - Critical 1 - 12.5%
        - Normal 3 - 37.5%

    Inventory
        - Critical 1 - 12.5%

Average execution time per suite
     2s,74ms

Coverage of critical business flows

    Critical business flows
        - Succesfull login 1
        - Failed login 3
        - Inventory verification 1
        - Add product to cart 1
        - Complete checkout 4
        - Logout 1

    Critical business flows automated
        - Succes login 1
        - Failed login 3
        - Inventory verification 1
        - Add product to cart 1
        - Complete checkout 4

    Residual risks
        The automated suite reduces the risk of regression in critical flows; however, residual risk still exists due to some flows that may occur and are listed below. It should be clarified that these flows are not included in the automations because their probability of occurrence is low and because they are flows with greater automation complexity.

        - Checkout behavior upon browser reload
        - Session behavior after prolonged time
        - Checkout completion in a different session
        
        Current estimated residual risk: Medium

Coverage
    (5/6) *100 = 83.3 %

Defects identified during exploratory testing
    Id: 001
    Environment: 
        - Windows 11
        - Chrome 124
        - Saucedemo.com
        
    Description
        During exploratory tests has been identified the possibility fill the login fields with at least 500 characters, causing performance problems in the page, even restarting the page.
    Reproduction conditions
        to reproduce this issue needs follow this steps
            1 Navigate to https://www.saucedemo.com/
            2 Be sure that charges the login form
            3 type at least 500 characters in username field
            4 type at least 500 characters in password field

    Observed behavior
        Once the system receives the characters it is observable delays in mouse moves and erase or add any character, browser delays and even browser restarts.

    Desired behavior
        should be necessary include in the web site backend validation that limit the amount of allowed characters in all the web site forms. it will avoid this performance problems.

    Severity.
        To this bug  the severity is normal because is not a frequent case, however it could degrade the experience and cause unnecessary use of browser ram memory.

If you want to run this project, you must prepare this configuration:

DOTENV
add a .env file on the project root
install dotenv with this command: 
    npm i -D dotenv
add this lines in the playwright.config.ts file: 

    import dotenv from 'dotenv';
    dotenv.config();

ESLINT
ESLint is a static testing tool that provides us the possibility to make a code strict review, allows identify bad configurations, imports unused or non called variables, in addition the tool generates a command output with all the issues.

complete this steps to configure correctly ESLint:

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