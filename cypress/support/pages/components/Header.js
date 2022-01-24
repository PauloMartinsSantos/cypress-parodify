class Header{
    userSholdLoggedIn(){
        cy.get('a[href$=sign_out]').should('be.visible')

    }
}

export default new Header()