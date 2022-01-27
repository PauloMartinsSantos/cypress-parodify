
class LoginPage{
    

    go(){
        cy.viewport(1680, 1050)
        cy.visit('https://parodify.herokuapp.com/')
        cy.get('a[href$=sign_in]').click()
        cy.get('#new_user').should('be.visible')
    }

    cadastro(email,password){
        cy.get('a[href*="sign_up"]').click()

        cy.get('h4').should('have.text','Pronto para se cadastrar?')
        
        
        cy.get('#user_email').type(email)
        cy.get('#user_password').type(password)
        cy.get('#user_password_confirmation').type(password)
        cy.get('input[type="submit"]').click()
        
    }

    fillForm(email,password){
        cy.get('#user_email').click()
        cy.get('#user_email').type(email)
        cy.get('#user_password').type(password)
    }

    submit(){

        cy.get('input[type=submit]').click()

        
    }

    fieldEmailShoudBeVisible(){
        cy.get('label[for=user_email]').should('have.text', 'Email')
    }

    alert(){
        return cy.get('div[class=message-body]') 
    }

}

export default new LoginPage()