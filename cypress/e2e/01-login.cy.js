import loginPage from "../page_object/loginPage.js"
import user from "../fixtures/user.json"

describe('Login', () => {

    it('Login with valid credentials', () =>{
        cy.visit('')
        loginPage.login(user.userName,user.password)
    })
})
