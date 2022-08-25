module.exports = {

    get checkoutBtn() {
        return cy.get('button[data-test="checkout"]')
    },

    get firstName() {
        return cy.get('input[data-test="firstName"]')
    },

    get lastName() {
        return cy.get('input[data-test="lastName"]')
    },

    get postalCode() {
        return cy.get('input[data-test="postalCode"]')
    },

    get continueBtn() {
        return cy.get('input[data-test="continue"]')
    },

    get finishBtn() {
        return cy.get('button[data-test="finish"]')
    },

    get orderAcceptedMessage() {
        return cy.get('h2').contains('THANK YOU FOR YOUR ORDER')
    },

    get dispatchedMessage() {
        return cy.get('div').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    },

    order(FirstName,LastName,PostalCode) {
        this.checkoutBtn.click()
        this.firstName.type(FirstName)
        this.lastName.type(LastName)
        this.postalCode.type(PostalCode)
        this.continueBtn.click()
        this.finishBtn.click()
        this.orderAcceptedMessage.should('be.visible')
        this.dispatchedMessage.should('be.visible')
    }
}