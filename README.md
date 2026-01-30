# Playwright Automation Testing Project

This repository contains automated UI test cases developed using Playwright.
The tests are designed to validate the functionality and behavior of the SwiftTranslator web application.

---

## Prerequisites

Before running this project, ensure the following are installed on your system:

- Node.js (version 18 or higher)
- npm (included with Node.js)

You can verify the installations using the following commands:
node -v
npm -v

Install the required project dependencies:
npm install

Install Playwright browsers:
npx playwright install

To execute all Playwright test cases, run:
npx playwright test

To run tests using the Playwright Test UI:
npx playwright test --ui

After executing the tests, an HTML test report will be generated automatically.
To view the report, use the following command:
npx playwright show-report
