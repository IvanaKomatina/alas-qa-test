import navigation from "../page_object/navigation.js"
module.exports = {

    get addToCartBtn() {
        return cy.get('button[class="btn btn_primary btn_small btn_inventory"]')
    },

    get cartBadge() {
        return cy.get('span[class="shopping_cart_badge"]').contains(1)
    },

    get itemNameInList() {
        return cy.get('a[id="item_1_title_link"]')
    },

    get firstItemInCart() {
        return cy.get('div[class="inventory_item_name"]').eq(0)
    },

    get secondItemInCart() {
        return cy.get('div[class="inventory_item_name"]').eq(1)
    },

    get removeItem() {
        return cy.get('button[class="btn btn_secondary btn_small cart_button"]').eq(0)
    },

    addPorductFromList() {
        this.addToCartBtn.eq(0).click()
        this.cartBadge.should('be.visible')
    },

    addProductFromTheDetailsPage() {
        this.addToCartBtn.eq(0).click()
        this.itemNameInList.click()
        this.addToCartBtn.click()
    },

    openCart() {
        this.addToCartBtn.eq(0).click()
        this.itemNameInList.click()
        this.addToCartBtn.click()
        navigation.cart.click()
        this.firstItemInCart.should('be.visible',)
        this.secondItemInCart.should('be.visible',)
    },

    removeItemFromCart() {
        this.addToCartBtn.eq(0).click()
        this.itemNameInList.click()
        this.addToCartBtn.click()
        navigation.cart.click()
        this.removeItem.click()
        this.cartBadge.should('have.text', '1',)
        this.firstItemInCart.should('be.visible', )
    }
}