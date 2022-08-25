import loginPage from "../page_object/loginPage.js"
import user from "../fixtures/user.json"
import products from "../page_object/products.js"
import itemOrder from "../page_object/itemOrder.js"
import navigation from "../page_object/navigation.js"

describe('Complete the order', () => {
    before(() => {
        cy.generateFixture()
        cy.visit('')
        loginPage.login(user.userName, user.password)
        products.addPorductFromList()
        navigation.cart.click()
    })

    it('Order completed successfully', () => {
        cy.fixture('faker').then(orderData => {
            itemOrder.order(orderData.FirstName, orderData.LastName, orderData.PostalCode)
        })
    })
})