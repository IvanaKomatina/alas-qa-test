module.exports = {

    get loginBtn() {
        return cy.get('input[id="login-button"]')
    },

    get cart() {
        return cy.get('a[class="shopping_cart_link"]')
    }

}