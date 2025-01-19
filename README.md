# Academia-2025-Cypress - Automação de Testes
### Solicitação de Seguro Automóvel no site [Tricentis](https://sampleapp.tricentis.com/101/index.php) 🚗

## 🎯 Objetivo
Este projeto tem como objetivo automatizar o teste de uma solicitação de seguro automóvel utilizando as melhores práticas de automação. Os principais objetivos incluem:
- **Page Object**: Organização do código para facilitar a manutenção.
- **Gherkin**: Escrita de cenários em linguagem simples e legível.
- **Cypress.env**: Proteção de dados sensíveis.
- Levantamento de dois cenários de teste:
  - **Cenário positivo**: Preenchimento completo de todas as abas do formulário e envio do e-mail.
  - **Cenário negativo**: Inserção de um valor inválido em um dos campos do formulário.



## 📁 Estrutura do Projeto
### **e2e/**
Contém os arquivos com os cenários de teste escritos em **Gherkin**, descrevendo os fluxos testados.

### **support/**
- **pages/**: Define as interações com os elementos de cada página. Aqui é implementada a estrutura do **Page Objects**.
- **step-definitions/**: Implementação dos steps dos cenários escritos em Gherkin.

### **e2e.js**
Arquivo de configuração onde foram realizadas importações globais para simplificar o uso de funções e comandos.

### **commands.js**
Arquivo que contém os comandos personalizados, permitindo a reutilização de interações em várias partes do código.



## 🚀 Tecnologias Utilizadas
- **Cypress**: Framework de testes para automação.
- **Cucumber**: Escrita de testes no formato Gherkin.
- **Page Object Pattern**: Organização do código de automação.
