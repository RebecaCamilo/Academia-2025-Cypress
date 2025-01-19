# utf-8
# language: pt

Funcionalidade: testeSeguroAutomovel-01 - Solicitação Seguro Automóvel

    Cenário: Validação Solicitação Seguro Automóvel Válida
        Dado que estou na página de solicitação de seguro de automóvel
        Quando estou na aba Enter Vehicle Data
        E preencho os campos obrigatorios da aba Enter Vehicle Data
        E estou na aba Enter Insurant Data
        E preencho os campos obrigatorios da aba Enter Insurant Data
        E estou na aba Enter Product Data
        E preencho os campos obrigatorios da aba Enter Product Data
        E estou na aba Select Price Option
        E seleciono uma opção de preço da aba Select Price Option
        E estou na aba Send Quote
        E preencho os campos obrigatorios da aba Send Quote
        E clico no botão Send
        Então será exibida mensagem de e-mail enviado com sucesso

    Cenário: Validação Solicitação Seguro Automóvel Inválida
        Dado que estou na página de solicitação de seguro de automóvel
        Quando estou na aba Enter Vehicle Data
        E preencho o campo Engine Performance incorretamente
        Então uma mensagem de erro deve ser exibida para o usuário informando os valores válidos
