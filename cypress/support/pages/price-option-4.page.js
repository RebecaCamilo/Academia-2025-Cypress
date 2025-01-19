const NAV_SELECT_PRICE_OPTION = '#selectpriceoption';
const RADIO_PRICE_OPTION = '.ideal-radio:visible';

Cypress.Commands.add('abrirAbaSelectPriceOption', () => {
    cy.get(NAV_SELECT_PRICE_OPTION).click();
})

Cypress.Commands.add('selecionarOpcaoAbaSelectPriceOption', () => {
    cy.selecionaRadioAleatorio(RADIO_PRICE_OPTION);
})
