Feature: Login de usuário na home page
    Como usuário
    Quero realizar um login na plataforma
    
    @debug
    Scenario: ID-001: SUCESSO - Cadastrar um cliente
   Given que o usuário está na homepage
    When o usuario clicar no botão de Bank Manager Login
    And o usuario clicar no seção de Add Customer
    And preencher os campos informados da tela de adicionar cliente
    And o usuário clicar no botão Add Customer
   Then a mensagem "Customer added successfully with customer" de sucesso deve ser exibida

 Scenario: ID-002: SUCESSO - Atribuir uma conta a um cliente
   Given que o usuário está na homepage
    When o usuario clicar no botão de Bank Manager Login
    And o usuario clicar no seção de Open Account
    And preencher os campos informados da tela de Open Account
     And o usuário clicar no botão Process
   Then a mensagem "Account created successfully with account Number" de sucesso deve ser exibida


Scenario: ID-003: SUCESSO - Deletar uma conta de um cliente
   Given que o usuário está na homepage
    When o usuario clicar no botão de Bank Manager Login
    And o usuario clicar no botão de Customers
    And o usuario clicar no botão de Delete
   Then o customer deve ser apagado do banco
  
