const NAV_ENTER_INSURANT_DATA = '#enterinsurantdata';
const FIELD_FIRST_NAME = '#firstname';
const FIELD_LAST_NAME = '#lastname';
const FIELD_DATE_OF_BIRTH = '#birthdate';
const RADIO_GENDER = '.ideal-radio:visible';
const SELECT_COUNTRY_TYPE = '#country';
const FIELD_ZIP_CODE = '#zipcode';
const SELECT_OCCUPATION = '#occupation';
const RADIO_CHECK_HOBBIES = '.ideal-check:visible';

Cypress.Commands.add('preencherCamposObrigatoriosAbaEnterInsurantData', () => {
    cy.get(NAV_ENTER_INSURANT_DATA).click();
    cy.get(FIELD_FIRST_NAME).type('nome');
    cy.get(FIELD_LAST_NAME).type('sobrenome');
    cy.digitaData((function() {
        let data = new Date();
        data.setFullYear(data.getFullYear() - 18);
        return data;
    })(), FIELD_DATE_OF_BIRTH);
    cy.selecionaRadioAleatorio(RADIO_GENDER);
    cy.selecionaOpcaoAleatoria(SELECT_COUNTRY_TYPE);
    cy.get(FIELD_ZIP_CODE).type('101010');
    cy.selecionaOpcaoAleatoria(SELECT_OCCUPATION);
    cy.selecionaRadioAleatorio(RADIO_CHECK_HOBBIES);
})
