
Cypress.Commands.add('login', (Usuario, senha) => { 
      cy.get('#username').type(Usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
 })

 Cypress.Commands.add('Precadastro', (email, senha, nome, sobrenome) => {

       cy.get('#reg_email').type(email)
            cy.get('#reg_password').type(senha)
            cy.get(':nth-child(4) > .button').click()
            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
            cy.get('#account_first_name').type(nome)
            cy.get('#account_last_name').type(sobrenome)
            cy.get('.woocommerce-Button').click()

 })