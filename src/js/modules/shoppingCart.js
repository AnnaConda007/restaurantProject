const shoppingCart = async() => {
    const shoppingArr = []
    const shopBtn = document.querySelectorAll(".button-add")
    
    const takeData = (e) => {
        const сardProduct = e.target.closest(".product");
        const imgSrc = сardProduct.querySelector(".product__img").src;
        const name = сardProduct.querySelector(".product__figcaption").textContent;
        const price = сardProduct.querySelector(".product__price").textContent;
        const btn = сardProduct.querySelector(".button");
        btn.classList.add("added")
        const product = {
            img: imgSrc,
            nameProd: name,
            price: price
        };
        shoppingArr.push(product)
    }
    const renderCart = ()=>{
        document.querySelector(".background__products").innerHTML=``
        shoppingArr.forEach(({ img, nameProd, price }) => { 
            document.querySelector(".background__products").innerHTML +=`
            <div class="background_unit unit">
                <div class="unit__dish">
                    <img class="unit__img" src=${img} alt="фото блюда">
                    <h3 class="unit__name">${nameProd}</h3>
                </div>
                <div class="unit__price">
                    <div class="unit__calculator calculator">
                        <div class="calculator__buttons">
                            <button class="calculator__button">+</button>
                            <button class="calculator__button">-</button>
                        </div>
                        <h3 class="calculator__amount">2</h3>
                    </div>
                    <h3 class="unit__cost">${price}</h3>
                </div>
            </div>`
        });
       }


    shopBtn.forEach(btn => {
        btn.addEventListener("click", function (e) {
            if(!e.target.classList.contains("added")){
                takeData(e)
            }
           renderCart()
           
        })
    })


}

export default shoppingCart