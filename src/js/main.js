import menuBar from "./modules/menuBar.js"
import filter from "./modules/filter.js"
import modal from "./modules/modal.js"
window.addEventListener("DOMContentLoaded", async function () {
   await menuBar()
    filter()
 modal(".menu", ".burger-nav",".modal-close-button","flex")
 modal(".item-order", ".modal-form",".modal-form__form-background","block")
})   