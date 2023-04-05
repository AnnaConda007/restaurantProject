const filter = () => {
    const allBtn = document.querySelectorAll('.menu-wrap__item')
    const removeAddClass = (elem, activeClass, act) => {
        if (document.querySelectorAll(elem)) {
            document.querySelectorAll(elem).forEach((product) => {
                product.classList[act](activeClass)
            })
        }
    }
    removeAddClass(`.breakfast`, 'active-product', "add")
    removeAddClass(".alcohol", 'active-product', "add")
    allBtn.forEach((btn) => {
        btn.addEventListener('click', function () {
            removeAddClass(".menu-wrap__item", 'active', "remove")
            removeAddClass(".product", 'active-product', "remove")
            btn.classList.add('active')
            removeAddClass(`.${this.id}`, 'active-product', "add")
        })
    })
}

export default filter
