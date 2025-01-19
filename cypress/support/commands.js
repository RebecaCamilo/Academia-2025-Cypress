// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('selecionaOpcaoAleatoria', (campo) => {
    cy.get(campo).then(($select) => {
        const options = $select.find('option');
        const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
        const randomValue = options[randomIndex].value;

        cy.get(campo).select(randomValue);
    });
});

Cypress.Commands.add('digitaData', (data, campo) => {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    cy.get(campo).type(`${mes}/${dia}/${ano}`);
});

Cypress.Commands.add('selecionaRadioAleatorio', (classeRadio) => {
    cy.get(classeRadio).then(($radios) => {
        const radios = $radios.toArray();
        const randomIndex = Math.floor(Math.random() * radios.length);
        
        cy.wrap(radios[randomIndex]).click();
    });
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })