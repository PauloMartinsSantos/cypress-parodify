///<reference types="cypress"/>
import login from '../support/pages/LoginPage'
import header from '../support/pages/components/Header'
import { internet } from 'faker'

var faker = require('faker')

var email = internet.exampleEmail()
var senha = internet.password()

describe('Cadastro', () => {
    it('usuario deve se cadastrar corretamente', () => {

        login.go()     
        login.cadastro(email, senha)
    })


})

describe('Login', () => {
    it('usuario deve se logar corretamente', () => {

        senha

        login.go()
        login.fillForm(email,senha)
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