const NAV_SELECT_PRICE_OPTION = '#selectpriceoption';
const RADIO_PRICE_OPTION = '.ideal-radio:visible';

Cypress.Commands.add('preencherCamposObrigatoriosAbaSelectPriceOption', () => {
    cy.get(NAV_SELECT_PRICE_OPTION).click();
    cy.selecionaRadioAleatorio(RADIO_PRICE_OPTION);
})
