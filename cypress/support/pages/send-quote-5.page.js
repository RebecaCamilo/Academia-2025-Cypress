const NAV_SEND_QUOTE = '#sendquote';
const FIELD_EMAIL = '#email';
const FIELD_USERNAME = '#username';
const FIELD_PASSWORD = '#password';
const FIELD_CONFIRM_PASSWORD = '#confirmpassword';
const BTN_SEND = '#sendemail';
const ALERT_MESSAGE = '.sweet-alert';

Cypress.Commands.add('preencherCamposObrigatoriosAbaSendQuote', () => {
    cy.get(NAV_SEND_QUOTE).click();
    cy.get(FIELD_EMAIL).type('teste@mail.com');
    cy.get(FIELD_USERNAME).type('username');
    cy.get(FIELD_PASSWORD).type('P@ssw0rd');
    cy.get(FIELD_CONFIRM_PASSWORD).type('P@ssw0rd');
    cy.get(BTN_SEND).click();
})

Cypress.Commands.add('validarMensagemDeSucesso', () => {
    cy.get(ALERT_MESSAGE, { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Sending e-mail success!');
});
