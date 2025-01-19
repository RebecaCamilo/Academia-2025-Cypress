Given('que estou na página de solicitação de seguro de automóvel', () => {
    cy.acessarSeguroAutomovelPage();
})

When('estou na aba Enter Vehicle Data', () => {
    cy.abrirAbaEnterVehicleData();
})

And('preencho os campos obrigatorios da aba Enter Vehicle Data', () => {
    cy.preencherCamposObrigatoriosAbaEnterVehicleData();
})

And('estou na aba Enter Insurant Data', () => {
    cy.abrirAbaEnterInsurantData();
})

And('preencho os campos obrigatorios da aba Enter Insurant Data', () => {
    cy.preencherCamposObrigatoriosAbaEnterInsurantData();
})

And('estou na aba Enter Product Data', () => {
    cy.abrirAbaEnterProductData();
})

And('preencho os campos obrigatorios da aba Enter Product Data', () => {
    cy.preencherCamposObrigatoriosAbaEnterProductData();
})

And('estou na aba Select Price Option', () => {
    cy.abrirAbaSelectPriceOption();
})

And('seleciono uma opção de preço da aba Select Price Option', () => {
    cy.selecionarOpcaoAbaSelectPriceOption();
})

And('estou na aba Send Quote', () => {
    cy.abrirAbaSendQuote();
})

And('preencho os campos obrigatorios da aba Send Quote', () => {
    cy.preencherCamposObrigatoriosAbaSendQuote();
})

And('clico no botão Send', () => {
    cy.clicarNoBotaoSend();
})

Then('será exibida mensagem de e-mail enviado com sucesso', () => {
    cy.validarMensagemDeSucesso();
})

And('preencho o campo Engine Performance incorretamente', () => {
    cy.preencherCampoEnginePerformanceErradoAbaEnterVehicleData();
})

Then('uma mensagem de erro deve ser exibida para o usuário informando os valores válidos', () => {
    cy.verificarMensagemDeErroCampoEnginePerformance();
})
