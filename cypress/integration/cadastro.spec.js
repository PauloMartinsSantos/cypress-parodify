///<reference types="cypress"/>
import login from '../support/pages/LoginPage'
import header from '../support/pages/components/Header'

describe('Login', () => {
    it('usuario deve se logar corretamente', () => {

        login.go()
        login.fillForm('paulosantos@parodify.com', 'senha123')
        login.submit()
        header.userSholdLoggedIn()

    })

    describe('Login com senha incorreta', () => {

        it('senha incorreta', () => {

            login.go()
            login.fieldEmailShoudBeVisible()
            login.fillForm('paulosantos@parodify.com', 'wrongPwd') //preenchimento manual da massa de dados
            login.submit()


            login.alert()
                .should('contain', 'Oops! Email e/ou senha incorretos.')
        })

        describe('Login com email incorreto', () => {

            it('email incorreto', () => {
                login.go()

                login.fieldEmailShoudBeVisible()
                login.fillForm('wrong@email.com', 'xxxxx')
                login.submit()

                login.alert().should('contain', 'Oops! Email e/ou senha incorretos.')
            })

        })
        
    })
})