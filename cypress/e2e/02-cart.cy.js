import loginPage from "../page_object/loginPage.js"
import user from "../fixtures/user.json"
import products from "../page_object/products.js"
import navigation from "../page_object/navigation.js"

describe('Add product to a cart', () => {
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('')
            loginPage.login(user.userName, user.password)
        })
        cy.visit('?/inventory.html')
    })

    it('Add an item from the list to the cart', () => {
        products.addFirstProductFromList()
        products.cartBadge.should('have.text', '1')
    })

    it('Add another item from the details page', () => {
        products.addFirstProductFromList()
        products.addProductFromTheDetailsPage()
        products.cartBadge.should('have.text', '2')
    })

    it('Open the cart', () => {
        products.addFirstProductFromList()
        products.addProductFromTheDetailsPage()
        navigation.openCart()
        products.firstItemInCart.should('be.visible')
        products.secondItemInCart.should('be.visible')
    })

    it('Remove the first item from the cart', () => {
        products.addFirstProductFromList()
        products.addProductFromTheDetailsPage()
        navigation.openCart()
        products.removeFirstItemFromCart()
        products.cartBadge.should('have.text', '1')
        products.firstItemInCart.should('be.visible')
    })
})