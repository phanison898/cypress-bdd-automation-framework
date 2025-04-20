# cypress-bdd-automation-framework

This repository contains a **Cypress**-based **Behavior-Driven Development (BDD) automation framework** designed for testing web applications. The framework utilizes **Cypress** for fast and reliable testing, along with **Cucumber** for writing human-readable **Gherkin** scenarios, promoting collaboration between developers, testers, and business stakeholders.

## Test application

- Base page : https://www.blazedemo.com/
- Login page : https://www.blazedemo.com/login
- Register page : https://www.blazedemo.com/register

## Key Features:

- **BDD Integration**: Supports writing tests in Gherkin syntax, making them easily understandable for non-developers.
- **Page Object Model (POM)**: Implements the Page Object Model to keep the tests clean, modular, and maintainable.
- **Cypress Automation**: Leverages the power of **Cypress** for end-to-end testing with real-time browser interaction and automatic waiting.
- **Reusability & Scalability**: Structured to be easily extended for different features and use cases in the web application.
- **Excel Data Integration**: Allows for reading test data from Excel files to automate dynamic and data-driven tests.

## Technologies Used:

- **Cypress** for browser automation
- **Cucumber** and **Gherkin** for BDD-style scenarios
- **JavaScript** and **ES6 Classes** for automation scripting
- **Page Object Model (POM)** design pattern for test maintainability
- **ExcelJS** for reading data from Excel files

## Framework Structure:

- **Features**: Gherkin-based feature files that describe the application's behavior.
- **Step Definitions**: JavaScript files mapping Gherkin steps to Cypress commands.
- **Page Objects**: Separate files for each page in the application that encapsulate interaction methods.
- **Excel Data Integration**: Read login details, flight departure and arrival details, payment details from Excel sheets.

## Installation

To get started with this framework, follow the steps below to set up the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/cypress-bdd-automation-framework.git
   cd cypress-bdd-automation-framework
   ```
