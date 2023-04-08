import { menuBar, filter, modal, shoppingCart, send } from "./modules/index.js"
window.addEventListener("DOMContentLoaded", async function () {
    await menuBar()
    filter()
    modal({
        trigerSelector: ".menu",
        modalSelector: ".burger-nav",
        modalClose: ".modal-close-button",
        display: "flex"
    });
    modal({
        trigerSelector: ".item-order",
        modalSelector: ".modal-form",
        modalClose: ".modal-form__form-background",
        display: "block"
    });
    modal({
        trigerSelector: ".shopping-cart",
        modalSelector: ".cart",
        modalClose: ".background__close",
        display: "flex"
    });
    shoppingCart()
    send()
})    