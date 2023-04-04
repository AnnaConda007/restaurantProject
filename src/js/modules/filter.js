const filter = () => {
    const allBtn = document.querySelectorAll('.menu-wrap__item')
    const allProduct = document.querySelectorAll('.product')
    const removeClass = (elem, classRem) => {
        elem.forEach((item) => {
            item.classList.remove(classRem)
        })
    }
    allBtn.forEach((btn) => {
        btn.addEventListener('click', function () {
            removeClass(allBtn, 'active')
            removeClass(allProduct, 'active-product')
            btn.classList.add('active')
            document.querySelectorAll(`.${this.id}`).forEach((product) => {
                product.classList.add('active-product')
            })
        })
    })
}

export default filter
