/// <reference types="cypress-xpath" />

import login from '../support/pages/LoginPage'
import player from '../support/pages/components/PlayerPage'
import header from '../support/pages/components/Header'
import "cypress-xpath"


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

        cy.xpath('//p[contains(text(),"Teste Longo Prazo Curto")]/..').click()

        cy.get('h2[class="is-size-5"]').should('have.text','Sprints de Luta Sprints de Gloria')

        
        

        

    })
})