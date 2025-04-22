// This file is processed and loaded automatically before your test files.
// Use this to import custom commands, etc.

// Import commands.js using ES2015 syntax:
import "./commands";

// You can also write global `before` or `after` hooks here if needed
// In e2e.js or at the top of your test file
Cypress.on("uncaught:exception", (err, runnable) => {
  // Returning false prevents Cypress from failing the test
  return false;
});
