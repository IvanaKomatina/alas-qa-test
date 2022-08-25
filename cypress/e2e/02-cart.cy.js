import loginPage from "../page_object/loginPage.js"
import user from "../fixtures/user.json"
import products from "../page_object/products.js"

describe('Add product to a cart', () => {
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('')
            loginPage.login(user.userName, user.password)
        })
    })

    it('Add an item from the list to the cart', () => {
        cy.visit('?/inventory.html')
        products.addPorductFromList()
    })

    it('Add another item from the details page', () => {
        cy.visit('?/inventory.html')
        products.addProductFromTheDetailsPage()
    })

    it('Open the cart', () => {
        cy.visit('?/inventory.html')
        products.openCart()
    })

    it('Remove the first item from the cart', () => {
        cy.visit('?/inventory.html')
        products.removeItemFromCart()
    })
})