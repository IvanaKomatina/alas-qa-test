module.exports = {

    get loginBtn() {
        return cy.get('input[data-test="login-button"]')
    },

    get cart() {
        return cy.get('div[id="shopping_cart_container"]')
    },

    get pageTitle() {
        return cy.get('span[class="title"]')
    },

    openCart() {
        this.cart.click()
        this.pageTitle.should('have.text', 'Your Cart')
    }

}