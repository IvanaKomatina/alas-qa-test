import navigation from "../page_object/navigation.js"
module.exports = {

    get userName() {
        return cy.get('input[data-test="username"]')
    },

    get password() {
        return cy.get('input[data-test="password"]')
    },

    get logo() {
        return cy.get('div[class="login_logo"]')
    },

    login(userName,password) {
        this.logo.should('be.visible')
        this.userName.type(userName)
        this.password.type(password)
        navigation.loginBtn.click()
        navigation.loginBtn.should('not.exist')
    }
}