///<reference types="cypress"/>

describe('Login', () => {
    it('usuario deve se logar corretamente', () => {
        cy.viewport(1680, 1050)
        cy.visit('https://parodify.herokuapp.com/')
        cy.get('a[href$=sign_in]').click()

        cy.get('label[for=user_email]').should('have.text', 'Email')

        cy.get('#user_email').type('paulosantos@parodify.com')
        cy.get('#user_password').type('senha123')

        cy.get('input[type=submit]').click()

        cy.get('a[href$=sign_out]').should('be.visible')

    })

    describe('Login com senha incorreta', () => {

        it('senha incorreta', () => {
            cy.viewport(1680, 1050)
            cy.visit('https://parodify.herokuapp.com/')
            cy.get('a[href$=sign_in]').click()

            cy.get('label[for=user_email]').should('have.text', 'Email')

            cy.get('#user_email').type('paulosantos@parodify.com')
            cy.get('#user_password').type('123')

            cy.get('input[type=submit]').click()


            cy.get('div[class=message-body]').contains('Oops! Email e/ou senha incorretos.')
        })

        describe('Login com email incorreto', () => {

            it('email incorreto', () => {
                cy.viewport(1680, 1050)
                cy.visit('https://parodify.herokuapp.com/')
                cy.get('a[href$=sign_in]').click()
    
                cy.get('label[for=user_email]').should('have.text', 'Email')
    
                cy.get('#user_email').type('noemail@hotmail.com')
                cy.get('#user_password').type('123')
    
                cy.get('input[type=submit]').click()
    
    
                cy.get('div[class=message-body]').contains('Oops! Email e/ou senha incorretos.')
            })

        })

        describe('Login com campos vazios', () => {

            it('campos vazios', () => {
                cy.viewport(1680, 1050)
                cy.visit('https://parodify.herokuapp.com/')
                cy.get('a[href$=sign_in]').click()
    
                cy.get('label[for=user_email]').should('have.text', 'Email') 
                
                   
                cy.get('input[type=submit]').click()
    
    
                cy.get('div[class=message-body]').contains('Oops! Email e/ou senha incorretos.')
            })

        })


    })
})