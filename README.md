# Playwright Portfolio

End-to-End (E2E) test automation framework built with **Playwright**, **TypeScript**, and **Cucumber**, following modern QA Automation and SDET best practices.

---

# Description

This project demonstrates a scalable, maintainable, and production-oriented automation framework for **SauceDemo**.

The repository contains two automation approaches:

- **Playwright Test** for functional E2E automation.
- **Cucumber (BDD)** using Gherkin feature files and reusable step definitions.

The framework follows industry best practices including:

- Page Object Model (POM)
- Session Caching (storageState)
- Centralized test data
- Static code analysis
- CI/CD integration
- Advanced reporting
- Strong TypeScript typing

---

# Tech Stack

- Playwright
- TypeScript
- Cucumber (BDD)
- Page Object Model (POM)
- ESLint (Strict Configuration)
- GitHub Actions
- Allure Framework
- dotenv

---

# Project Structure

```text
src/
│
├── features/          # Gherkin feature files
├── steps/             # Cucumber step definitions
├── pages/             # Page Objects
├── fixtures/          # Test data
├── support/           # Hooks and World
├── tests/             # Playwright Test suites
└── utils/
```

Additional directories

```text
.github/workflows/     # GitHub Actions pipeline

playwright/.auth/      # Cached authenticated session

allure-results/
allure-report/

reports/
```

---

# Features

- Page Object Model (POM)
- Playwright Test
- Cucumber (BDD)
- Reusable Page Objects
- Typed fixtures
- Centralized test data
- Session Caching using storageState
- Secure credentials using .env
- Strict TypeScript linting
- GitHub Actions CI/CD
- Allure reporting
- Modular architecture
- Separation of concerns

---

# Session Caching

The framework implements Playwright's **storageState** mechanism.

Authentication is executed only once using **auth.setup.ts**, generating a reusable authenticated session stored in:

```text
playwright/.auth/user.json
```

Business tests reuse this session instead of performing the login flow repeatedly.

Benefits

- Faster execution
- Reduced duplicated code
- Lower maintenance effort
- Better separation between authentication and business scenarios

Current execution time after enabling Session Caching:

**Approximately 23 seconds** for the complete Playwright suite.

---

# Reporting

The framework integrates **Allure Framework** providing:

- Execution details
- Severity classification
- Epic
- Feature
- Story
- Test traceability
- Historical trends (when configured)

Reports can be:

- Generated locally
- Uploaded as GitHub Actions artifacts
- Published through GitHub Pages

---

# CI/CD

The project includes a GitHub Actions pipeline.

Pipeline stages:

- Install dependencies
- Install Playwright browsers
- Static code analysis (ESLint)
- Execute Playwright tests
- Generate Allure Report
- Upload execution artifacts

Execution is automatically triggered on:

- Push
- Pull Request

---

# Quality Standards

- Strict TypeScript configuration
- ESLint Type-Aware Rules
- Strong typing
- Page Object Model
- Separation of responsibilities
- Reusable components
- Secure Secrets management
- Session reuse

---

# Automated Scope

## Playwright Test

- Login
- Logout
- Inventory
- Cart
- Checkout

## Cucumber (BDD)

- Login
- Logout
- Inventory
- Checkout

---

# Available Commands

## Run Playwright Tests

```bash
npm test
```

## Run Cucumber Tests

```bash
npm run cucumber
```

## Execute ESLint

```bash
npm run lint
```

## Generate Allure Report

```bash
npm run allure:generate
```

## Open Allure Report

```bash
npm run allure:open
```

## Serve Allure Report

```bash
npm run allure:serve
```

---

# Metrics

## Automated Tests

Playwright Test

- 11 automated E2E test cases

Cucumber

- Login
- Logout
- Inventory
- Checkout

---

## Severity Distribution

Total test cases

- Critical: 6
- Normal: 5

### Authentication

- Critical: 3
- Normal: 2

### Inventory

- Critical: 2

### Checkout

- Critical: 1
- Normal: 3

---

## Average Execution Time

Previous execution time

**Approximately 28–30 seconds**

Current execution time

**Approximately 23 seconds**

Performance improvement

**20–25% faster** after implementing Session Caching.

---

# Coverage

## Critical Business Flows

- Successful Login
- Failed Login
- Locked User Validation
- Product Inventory Validation
- Add Product to Cart
- Complete Checkout
- Logout

Coverage

**100%**

---

# Exploratory Testing

## Defect 001

### Environment

- Windows 11
- Chrome
- SauceDemo

### Description

The login page accepts extremely long values (500+ characters) in the username and password fields, producing noticeable browser performance degradation and, in some cases, browser instability.

### Steps to Reproduce

1. Navigate to https://www.saucedemo.com
2. Wait until the login form is displayed.
3. Enter at least 500 characters in the username field.
4. Enter at least 500 characters in the password field.

### Observed Behavior

The browser becomes slow while typing or deleting characters and may even restart due to excessive resource consumption.

### Expected Behavior

The application should validate the maximum allowed input length on the backend to prevent unnecessary resource usage and improve user experience.

### Severity

**Normal**

---

# Configuration

## Environment Variables

Create a `.env` file in the project root.

Example:

```env
BASE_URL=https://www.saucedemo.com

VALID_USER=standard_user
LOCKED_USER=locked_out_user

VALID_PASSWORD=secret_sauce
INVALID_PASSWORD=invalidPassword
```

---

# Objective

This repository demonstrates practical experience with:

- Playwright Test
- Cucumber BDD
- Page Object Model
- TypeScript
- Session Caching (storageState)
- GitHub Actions
- Allure Reporting
- ESLint
- CI/CD pipelines
- Professional Automation Framework Design

The project is intended to showcase the skills expected from a QA Automation Engineer / SDET using modern testing technologies and software engineering best practices.