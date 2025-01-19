const NAV_ENTER_VEHICLE_DATA = '#entervehicledata';
const SELECT_MAKE = '#make';
const FIELD_ENGINE_PERFORMANCE = '#engineperformance';
const FIELD_DATE_OF_MANUFACTURE = '#dateofmanufacture';
const SELECT_NUMBER_OF_SEATS = '#numberofseats';
const SELECT_FUEL_TYPE = '#fuel';
const FIELD_LIST_PRICE = '#listprice';
const FIELD_ANNUAL_MILEAGE = '#annualmileage';

Cypress.Commands.add('preencherCamposObrigatoriosAbaEnterVehicleData', () => {
    cy.get(NAV_ENTER_VEHICLE_DATA).click();
    cy.selecionaOpcaoAleatoria(SELECT_MAKE);
    cy.get(FIELD_ENGINE_PERFORMANCE).type('2000');
    cy.digitaData(new Date(), FIELD_DATE_OF_MANUFACTURE)
    cy.selecionaOpcaoAleatoria(SELECT_NUMBER_OF_SEATS);
    cy.selecionaOpcaoAleatoria(SELECT_FUEL_TYPE);
    cy.get(FIELD_LIST_PRICE).type('50000');
    cy.get(FIELD_ANNUAL_MILEAGE).type('1000');
})

Cypress.Commands.add('preencherCampoEnginePerformanceErradoAbaEnterVehicleData', () => {
    cy.get(NAV_ENTER_VEHICLE_DATA).click();
    cy.get(FIELD_ENGINE_PERFORMANCE).type('2000000');
})

Cypress.Commands.add('verificarMensagemDeErroCampoEnginePerformance', () => {
    cy.get(FIELD_ENGINE_PERFORMANCE).type('2000000');
    cy.get('.error').should('contain', 'Must be a number between 1 and 2000');
})

