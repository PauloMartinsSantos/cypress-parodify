/// <reference types="cypress-xpath" />

//Testando o player de parodia

// aqui no player page colocar as açoes que vao ser invocadas pelo player.spec

class PlayerPage {

    searchButton(){
        cy.get('a[href*="search"]').click()
    }

    rock(){
        //cy.get('a[href*="categories/1" ] img[src$="rock.png"]').click()  //Css Selector
        cy.xpath('//img[contains(@src,"rock.png")]').click()
    }

    funk(){
        cy.get('a[href*="categories/2" ] img[src$="funk-cat.png"]').click()
    }

}

export default new PlayerPage()