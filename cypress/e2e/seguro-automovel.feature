# utf-8
# language: pt

Funcionalidade: testeSeguroAutomovel-01 - Solicitação Seguro Automóvel
    Cenário: Validação Solicitação Seguro Automóvel Válida errado
        Dado que estou na página de solicitação de seguro de automóvel
        Quando estou na aba Enter Vehicle Data e preencho os campos obrigatorios
        E estou na aba Enter Insurant Data e preencho os campos obrigatorios
        E estou na aba Enter Product Data e preencho os campos obrigatorios
        E estou na aba Select Price Option e seleciona opção de preço
        E estou na aba Send Quote e preencho os campos obrigatorios
        Então será exibida mensagem de e-mail enviado com sucesso

    Cenário: Validação Solicitação Seguro Automóvel Inválida
        Dado que estou na página de solicitação de seguro de automóvel
        Quando estou na aba Enter Vehicle Data e preencho o campo Engine Performance incorretamente
        Então uma mensagem de erro deve ser exibida para o usuário informando os valores válidos
