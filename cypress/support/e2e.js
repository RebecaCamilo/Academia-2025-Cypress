// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/home.page'
import './pages/vehicle-data-1.page'
import './pages/insurant-data-2.page'
import './pages/product-data-3.page'
import './pages/price-option-4.page'
import './pages/send-quote-5.page'

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('e is not defined')) {
        return false
    }
})
