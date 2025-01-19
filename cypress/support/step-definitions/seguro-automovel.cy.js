Given('que estou na página de solicitação de seguro de automóvel', () => {
    cy.acessarSeguroAutomovelPage();
})

When('estou na aba Enter Vehicle Data e preencho os campos obrigatorios', () => {
    cy.preencherCamposObrigatoriosAbaEnterVehicleData();
})

And('estou na aba Enter Insurant Data e preencho os campos obrigatorios', () => {
    cy.preencherCamposObrigatoriosAbaEnterInsurantData();
})

And('estou na aba Enter Product Data e preencho os campos obrigatorios', () => {
    cy.preencherCamposObrigatoriosAbaEnterProductData();
})

And('estou na aba Select Price Option e seleciona opção de preço', () => {
    cy.preencherCamposObrigatoriosAbaSelectPriceOption();
})

And('estou na aba Send Quote e preencho os campos obrigatorios', () => {
    cy.preencherCamposObrigatoriosAbaSendQuote();
})

Then('será exibida mensagem de e-mail enviado com sucesso', () => {
    cy.validarMensagemDeSucesso();
})

When('estou na aba Enter Vehicle Data e preencho o campo Engine Performance incorretamente', () => {
    cy.preencherCampoEnginePerformanceErradoAbaEnterVehicleData();
})

Then('uma mensagem de erro deve ser exibida para o usuário informando os valores válidos', () => {
    cy.verificarMensagemDeErroCampoEnginePerformance();
})

