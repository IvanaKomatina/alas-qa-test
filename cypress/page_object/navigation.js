module.exports = {

    get loginBtn() {
        return cy.get('input[data-test="login-button"]')
    },

    get cart() {
        return cy.get('div[id="shopping_cart_container"]')
    }

}