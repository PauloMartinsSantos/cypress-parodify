///<reference types="cypress"/>
import login from '../support/pages/LoginPage'
import player from '../support/pages/components/PlayerPage'
import header from '../support/pages/components/Header'


describe('Reproduzir parodia',()=>{
    it('Sprints de Luta Sprints de Gloria',()=>{
        login.go()
        login.fillForm('paulosantos@parodify.com','senha123')
        login.submit()
        header.userSholdLoggedIn()
        
        player.searchButton()
        player.rock()

        //Check Point
        cy.get('h2[class*="is-size-3 has-text-weight-bold"]').should('have.text','Rock')

        


    })
})