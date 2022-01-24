
class LoginPage{

    go(){
        cy.viewport(1680, 1050)
        cy.visit('https://parodify.herokuapp.com/')
        cy.get('a[href$=sign_in]').click()
        cy.get('#new_user').should('be.visible')
    }

    fillForm(email,password){
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