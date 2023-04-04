const filter = () => {
    const allBtn = document.querySelectorAll(".menu-wrap__item")
    const allProduct = document.querySelectorAll(".product")
   
    const removeClass = (elem, remClass)=>{
        elem.forEach(item=>{
            item.classList.remove(remClass)
        })   
    }

    allBtn.forEach(btn => {

        
        btn.addEventListener("click", function () {
            allBtn.forEach(btn=>{
                btn.classList.remove("active")
            })
            btn.classList.add("active")
            allProduct.forEach(product=>{
                product.classList.remove("active-product") 
            })
            let activeClass = this.id
            document.querySelectorAll(`.${activeClass}`).forEach(
                product=>{product.classList.add("active-product")}
            ) 
        })})
 




}

export default filter

/* document.querySelectorAll(`.${activeClass}`).forEach(
            product=>{product.classList.add("active-product")}
        ) 
        
        let activeClass = this.id
        
         const removeClass = (elem, remClass)=>{
        elem.forEach(item=>{
            item.classList.remove(remClass)
        })   
    }
        
        */