# Playwright Portfolio

A modern automation framework built with **Playwright** and **TypeScript** for **UI** and **API** testing, following industry best practices such as Page Object Model (POM), Cucumber BDD, Session Caching, CI/CD, static analysis and professional reporting.

---

# Overview

This repository demonstrates how to build a scalable and maintainable automation framework rather than a project tied to a single application.

The UI automation currently targets **SauceDemo**, while the API automation uses **JSONPlaceholder** as a public REST API for integration testing.

The project showcases multiple automation concepts frequently used in enterprise environments:

- End-to-End (System Testing)
- API Integration Testing
- Behavior Driven Development (BDD)
- Session Caching
- CI/CD
- Static Code Analysis
- Professional Reporting

---

# Framework Evolution

This project has been progressively improved following industry best practices instead of implementing every pattern from the beginning.

Current evolution:

- ✅ Playwright project setup
- ✅ TypeScript configuration
- ✅ Page Object Model (POM)
- ✅ Centralized Fixtures
- ✅ Strict ESLint configuration
- ✅ Allure Reporting
- ✅ GitHub Actions CI/CD
- ✅ Cucumber BDD
- ✅ Authentication Session Caching
- ✅ REST API Testing
- ✅ Typed API Models
- ✅ API Client Architecture

Next planned improvements:

- Screenplay Pattern
- JSON Schema Contract Validation
- Docker execution
- Visual Testing
- Performance Testing
- Retry Strategies
- API Request/Response Logging

---

# Testing Pyramid

Following ISTQB recommendations, the framework currently covers multiple testing levels.

| Testing Level | Technology | Status |
|---------------|------------|--------|
| Unit Testing | - | Planned |
| Integration Testing | Playwright API | ✅ Implemented |
| System Testing | Playwright UI | ✅ Implemented |
| BDD | Cucumber | ✅ Implemented |

API tests execute significantly faster than UI tests because they communicate directly with the backend and do not depend on browser rendering.

---

# Technologies

| Technology | Purpose |
|------------|---------|
| Playwright | Browser automation and API testing |
| TypeScript | Strong typing and maintainable code |
| Cucumber | Behavior Driven Development (BDD) |
| ESLint | Static code analysis |
| Allure Report | Professional reporting |
| dotenv | Environment variable management |
| GitHub Actions | Continuous Integration |

---

# Project Structure

```text
.
├── .github/
│   └── workflows/
│
├── playwright/
│   └── .auth/
│
├── src/
│
│   ├── api/
│   │   ├── clients/
│   │   │   ├── JsonPlaceholderClient.ts
│   │   │   ├── GitHubClient.ts
│   │   │   └── ReqResClient.ts
│   │   │
│   │   └── models/
│   │       └── Post.ts
│   │
│   ├── features/
│   │
│   ├── fixtures/
│   │
│   ├── pages/
│   │
│   ├── reports/
│   │
│   ├── steps/
│   │
│   ├── support/
│   │
│   ├── tests/
│   │   ├── api/
│   │   │   └── posts.api.spec.ts
│   │   │
│   │   ├── auth.setup.ts
│   │   ├── Checkout.spec.ts
│   │   ├── inventory.spec.ts
│   │   ├── login.spec.ts
│   │   └── logout.spec.ts
│   │
│   └── utils/
│
├── playwright.config.ts
├── cucumber.js
├── tsconfig.json
├── eslint.config.js
└── README.md
```

---

# Architecture

## UI Automation

The UI automation follows the **Page Object Model**.

```
Tests
    ↓
Page Objects
    ↓
Playwright
    ↓
Browser
```

Responsibilities

- Tests → Business scenarios
- Page Objects → UI interactions
- Fixtures → Test data
- Config → Framework configuration

---

## API Automation

The API automation follows a layered architecture.

```
Tests
    ↓
API Clients
    ↓
REST API
```

Responsibilities

- Tests → Business validations
- Clients → HTTP communication
- Models → Response contracts

---

# UI Automation

Current automated business flows

- Login
- Inventory
- Add products to cart
- Checkout
- Logout

Framework capabilities

- Page Object Model
- Session Caching
- Parallel execution
- Fixtures
- Type-safe data
- Cross-project configuration

---

# API Testing

The framework also includes REST API automation using Playwright's native HTTP client (`request`).

Unlike browser automation, API tests communicate directly with the server, making execution significantly faster and more reliable.

Current API

**JSONPlaceholder**

Base URL

```
https://jsonplaceholder.typicode.com
```

Current scenarios

### GET /posts

- Status 200
- Returns an array
- Collection contains 100 posts

### GET /posts/3

- Status 200
- Property validation
- Contract validation
- Data type validation

### POST /posts

- Status 201
- Response body validation
- Payload validation

### GET /posts/999

- Status 404
- Resource not found validation

Current API implementation includes

- GET requests
- POST requests
- Contract validation
- Type validation
- Typed models
- API Client architecture

---

# Why API Testing?

Modern automation frameworks should not rely exclusively on browser automation.

API testing offers several advantages:

- Faster execution
- Greater stability
- Lower maintenance
- Earlier defect detection
- Better CI/CD performance
- Independent from UI changes

For this reason, this framework combines **Integration Testing** (API) and **System Testing** (UI).

---

# Authentication Session Caching

Authentication persistence has been implemented using Playwright's **storageState**.

Authentication is executed only once through

```
auth.setup.ts
```

The authenticated session is stored as

```
playwright/.auth/user.json
```

Business tests reuse the stored session without executing the login flow again.

Benefits

- Faster execution
- Cleaner tests
- Less duplicated code
- Better maintainability
- Better CI performance

Execution time decreased approximately from

**40 seconds → 23 seconds**

---

# BDD Support

Business scenarios are also implemented using Cucumber.

Current features

- Login
- Inventory
- Checkout
- Logout

The framework includes

- Feature files
- Step Definitions
- Shared World
- Hooks

---

# API Models

API responses are represented using strongly typed TypeScript models.

Current models

- Post

Benefits

- Compile-time validation
- Better IntelliSense
- Safer refactoring
- Basic contract testing

---

# API Clients

HTTP communication is encapsulated inside reusable clients.

Current client

```
JsonPlaceholderClient
```

Future clients

- ReqResClient
- GitHubClient
- SalesforceClient

This architecture avoids duplicating HTTP logic across tests.

---

# Reporting

Test execution reports are generated using **Allure Report**.

Reports include

- Execution history
- Severity
- Features
- Stories
- Attachments
- Screenshots
- Traces
- Categories
- Execution duration

Reports can be

- Generated locally
- Published through GitHub Actions
- Downloaded as CI artifacts

---

# Static Code Analysis

The project uses **ESLint** with strict TypeScript rules.

Current validations

- Unsafe types
- Unused variables
- Invalid imports
- Promise handling
- Type safety
- Code consistency

---

# Environment Variables

Sensitive data is managed using `.env`.

Example

```env
BASE_URL=
VALID_USER=
VALID_PASSWORD=
```

Environment variables are loaded through **dotenv**.

---

# Continuous Integration

GitHub Actions automatically executes

- Install dependencies
- Install Playwright browsers
- Static code analysis
- Playwright UI tests
- Playwright API tests
- Allure report generation
- Artifact publication

---

# Execution Performance

Average execution time

| Suite | Average Time |
|--------|-------------:|
| Authentication Setup | ~6 s |
| API Tests | ~2.5 s |
| Complete UI Suite | ~23 s |

API automation executes approximately **9 times faster** than browser automation because it communicates directly with the REST service without rendering the UI.

---

# Automation Metrics

## Playwright

| Area | Tests |
|------|------:|
| Authentication | 3 |
| Inventory | 2 |
| Checkout | 4 |
| Logout | 2 |
| API | 4 |
| Authentication Setup | 1 |

**Total Playwright Tests: 16**

---

## Cucumber

Implemented Features

- Login
- Inventory
- Checkout
- Logout

**BDD Scenarios: 11**

---

## Overall Automation

| Type | Total |
|------|------:|
| Playwright Tests | 16 |
| Cucumber Scenarios | 11 |
| Automated Executions | 27 |

---

# Coverage

## UI Coverage

- Authentication
- Inventory
- Shopping Cart
- Checkout
- Logout

Current Coverage

**100% of the selected critical business flows**

---

## API Coverage

- Resource collection
- Single resource
- Resource creation
- Error handling
- Basic contract validation

---

# Design Decisions

Several architectural decisions were made to improve maintainability and scalability.

Current design decisions

- Page Object Model for UI abstraction
- Typed Fixtures
- Authentication persistence using storageState
- API Client Pattern
- Typed API Models
- Strict ESLint configuration
- TypeScript Strict Mode
- GitHub Actions CI/CD
- Allure Reporting
- Cucumber BDD

---

# Quality Practices

This framework demonstrates

- Page Object Model
- API Client Pattern
- Typed Models
- Environment isolation
- Session Caching
- Parallel execution
- REST API Testing
- System Testing
- Integration Testing
- Continuous Integration
- Static Code Analysis
- Professional Reporting

---

# Roadmap

Completed

- Playwright
- TypeScript
- Page Object Model
- Fixtures
- ESLint
- Allure
- GitHub Actions
- Cucumber
- Session Caching
- REST API Testing
- Typed Models
- API Clients

Next

- Screenplay Pattern
- JSON Schema Validation
- Docker
- Visual Testing
- Performance Testing
- API Logging
- Retry Strategies
- Cross-browser Matrix

---

# Running the Project

Install dependencies

```bash
npm install
```

Run all Playwright tests

```bash
npm test
```

Run only UI tests

```bash
npx playwright test --project=chromium
```

Run only API tests

```bash
npx playwright test --project=api
```

Generate authentication session

```bash
npx playwright test --project=setup
```

Run Cucumber scenarios

```bash
npm run cucumber
```

Generate Allure Report

```bash
npx allure generate allure-results --clean -o allure-report
```

Open Allure Report

```bash
npx allure open allure-report
```

---

# Learning Objectives

This repository demonstrates practical experience with

- Playwright
- TypeScript
- REST API Testing
- Page Object Model
- API Client Pattern
- Typed Models
- Authentication Persistence
- Cucumber BDD
- Session Caching
- GitHub Actions
- Allure Reporting
- ESLint
- Modern Automation Framework Design

---

# Future Vision

The long-term objective is to evolve this repository into a complete enterprise automation framework capable of supporting UI, API, contract, visual and performance testing under a unified architecture while adopting the Screenplay Pattern for improved scalability and maintainability.