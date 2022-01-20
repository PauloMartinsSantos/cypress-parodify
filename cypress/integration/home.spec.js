///<reference types="cypress"/>

describe('home page',()=>{
    it('pagina deve estar online',()=>{
        cy.viewport(1680,1050)
        cy.visit('https://parodify.herokuapp.com/')
        cy.get('a[href$=sign_in]').should('have.text','Login')
    })
})