const filter = (tablo, prod) => {
    const allBtn = document.querySelectorAll(tablo)
    const removeAddClass = (elem, activeClass, act) => {
        if (document.querySelectorAll(elem)) {
            document.querySelectorAll(elem).forEach((product) => {
                product.classList[act](activeClass)
            })
        }
    }
    removeAddClass('[data-product="breakfast"]', 'active-product', "add")
    removeAddClass('[data-product="alcohol"]', 'active-product', "add")
    allBtn.forEach((btn) => {
        btn.addEventListener('click', function () {
            removeAddClass(tablo, 'active', "remove")
            removeAddClass(prod, 'active-product', "remove")
            btn.classList.add('active')
            removeAddClass(`[data-product="${this.id}"]`, 'active-product', "add")
        })
    })
}

export default filter

 