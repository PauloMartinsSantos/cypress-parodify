///<reference types="cypress"/>

describe('Login',()=>{
    it('usuario deve se logar corretamente',()=>{
        cy.viewport(1680,1050)
        cy.visit('https://parodify.herokuapp.com/')
        cy.get('a[href$=sign_in]').click()

        cy.get('label[for=user_email]').should('have.text','Email')
        
        cy.get('#user_email').type('paulosantos@parodify.com')
        cy.get('#user_password').type('senha123')

        cy.get('input[type=submit]').click()     

        cy.get('a[href$=sign_out]').should('be.visible')

    })
})