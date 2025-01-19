const NAV_ENTER_PRODUCT_DATA = '#enterproductdata';
const FIELD_START_DATE = '#startdate';
const SELECT_INSURANCE_SUM = '#insurancesum';
const SELECT_MERIT_RATING = '#meritrating';
const SELECT_DAMAGE_INSURANCE = '#damageinsurance';
const RADIO_CHECK_HOBBIES = '.ideal-check:visible';
const SELECT_COURTESY_CAR = '#courtesycar';

Cypress.Commands.add('preencherCamposObrigatoriosAbaEnterProductData', () => {
    cy.get(NAV_ENTER_PRODUCT_DATA).click();
    cy.digitaData((function() {
        let data = new Date();
        data.setMonth(data.getMonth() + 2);
        return data;
    })(), FIELD_START_DATE);
    cy.selecionaOpcaoAleatoria(SELECT_INSURANCE_SUM);
    cy.selecionaOpcaoAleatoria(SELECT_MERIT_RATING);
    cy.selecionaOpcaoAleatoria(SELECT_DAMAGE_INSURANCE);
    cy.get(NAV_ENTER_PRODUCT_DATA).click();
    cy.get(RADIO_CHECK_HOBBIES).eq(1).click();
    // cy.selecionaRadioAleatorio(RADIO_CHECK_HOBBIES);
    cy.selecionaOpcaoAleatoria(SELECT_COURTESY_CAR);
})
