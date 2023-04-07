const shoppingCart = async () => {
    const shoppingArr = []
    const shopBtn = document.querySelectorAll(".button-add")
    let product={}
    const takeData = (e) => {
        const сardProduct = e.target.closest(".product");
        const imgSrc = сardProduct.querySelector(".product__img").src;
        const name = сardProduct.querySelector(".product__figcaption").textContent;
        const price = сardProduct.querySelector(".product__price").textContent;
        const idProduct = сardProduct.id
        const btn = сardProduct.querySelector(".button");
        btn.classList.add("added")
          product = {
            img: imgSrc,
            nameProd: name,
            price: price,
            amount: 1,
            id: idProduct
        };
        shoppingArr.push(product)
    }
    const renderCart = () => {
        document.querySelector(".background__products").innerHTML = ``
        shoppingArr.forEach(({ img, nameProd, price,amount,id}) => {
            document.querySelector(".background__products").innerHTML += `
            <div class="background_unit unit" data-articul="${id}">
                <div class="unit__dish">
                    <img class="unit__img" src=${img} alt="фото блюда">
                    <h3 class="unit__name">${nameProd}</h3>
                </div>
                <div class="unit__price">
                    <div class="unit__calculator calculator">
                        <div class="calculator__buttons">
                            <button class="calculator__button plus">+</button>
                            <button class="calculator__button minus">-</button>
                        </div>
                        <h3 class="calculator__amount">${amount}</h3>
                    </div>
                    <h3 class="unit__cost">${price}</h3>
                </div>
            </div>` 
 
        });
    }
const calculatorBtn = ()=>{
const plusBtns = document.querySelectorAll('.plus')
plusBtns.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
       product.amount++  
        const amountText = e.target.closest(".calculator");
        amountText.querySelector(".calculator__amount").innerHTML=product.amount
    })
})
const minusBtns = document.querySelectorAll('.minus')
minusBtns.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        if(product.amount!=0){
            product.amount= product.amount-1
        } 
       const amountText = e.target.closest(".calculator");
        amountText.querySelector(".calculator__amount").innerHTML=product.amount
        if(product.amount===0){
            const cardProduct = e.target.closest(".unit");
             const idBtn = cardProduct.getAttribute('data-articul') 
             document.getElementById(idBtn).querySelector(".button").classList.remove("added")
               cardProduct.remove()
        }
    })
})
}

    shopBtn.forEach(btn => {
        btn.addEventListener("click", function (e) {
            if (!e.target.classList.contains("added")) {
                takeData(e)
            }
            renderCart()
            calculatorBtn()
        })
    })


}

export default shoppingCart