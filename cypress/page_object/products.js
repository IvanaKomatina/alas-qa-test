import navigation from "../page_object/navigation.js"
module.exports = {

    get addToCartBtn() {
        return cy.get('button[class="btn btn_primary btn_small btn_inventory"]')
    },

    get cartBadge() {
        return cy.get('span[class="shopping_cart_badge"]')
    },

    get itemNameInList() {
        return cy.get('div[class="inventory_item_name"]')
    },

    get firstItemInCart() {
        return cy.get('div[class="inventory_item_name"]').eq(0)
    },

    get secondItemInCart() {
        return cy.get('div[class="inventory_item_name"]').eq(1)
    },

    get removeItem() {
        return cy.get('button[class="btn btn_secondary btn_small cart_button"]')
    },

    addFirstProductFromList() {
        this.addToCartBtn.eq(0).click()
        this.cartBadge.should('be.visible')
    },

    addProductFromTheDetailsPage() {
        this.itemNameInList.eq(2).click()
        this.addToCartBtn.click()
        this.cartBadge.should('be.visible')
    },

    removeFirstItemFromCart() {
        this.removeItem.eq(0).click()
    }

}