# ALAS doo QA test

## Setup End-to-End tests (Cypress)
### 1. Clone the repository
```
git clone git@github.com:IvanaKomatina/alas-qa-test.git
```
### 2. Install dependencies
```
yarn install
```
### 3. Run all tests

headed run
```
yarn cypress-run-headed
```

headless run
```
yarn cypress-run-headless
```
### 4. Run specific tests
headed run specific tests
```
yarn cypress-run-headed --spec=cypress/e2e/02-cart.cy.js
```
headless run specific tests
```
yarn cypress-run-headless --spec=cypress/e2e/02-cart.cy.js
```