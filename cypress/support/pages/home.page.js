const NAV_AUTOMOVEL = '#nav_automobile';

Cypress.Commands.add('acessarSeguroAutomovelPage', () => {
    cy.visit('/')
    cy.get(NAV_AUTOMOVEL).click();    
})
