const shoppingCart = () => {
    const shoppingArr = []
    const shopBtn = document.querySelectorAll(".button-add")





    shopBtn.forEach(btn => {
        btn.addEventListener("click", function (e) {
         
         const takeData=()=>{
            const сardProduct = e.target.closest(".product");
            const imgSrc = сardProduct.querySelector(".product__img").src;
            const name = сardProduct.querySelector(".product__figcaption").textContent;
            const price = сardProduct.querySelector(".product__price").textContent;
            const product = {
                img: imgSrc,
                name: name,
                price: price
            };
            shoppingArr.push(product)
            console.log(shoppingArr)
         }   
         takeData()

        })
    })


}

export default shoppingCart