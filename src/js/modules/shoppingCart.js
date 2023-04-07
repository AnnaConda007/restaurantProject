const shoppingCart = async () => {
    const shoppingArr = []
    const shopBtn = document.querySelectorAll(".button-add")
    let product = {}
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
            countPrice:price,
            amount: 1,
            id: idProduct
        };
        shoppingArr.push(product)
    }
    const renderCart = () => {
        document.querySelector(".background__products").innerHTML = ``
        shoppingArr.forEach(({ img, nameProd, price, amount, id }) => {
            document.querySelector(".background__products").innerHTML += `
            <div class="background_unit unit" data-articul="${id}">
                <div class="unit__dish">
                    <img class="unit__img" src=${img} alt="фото блюда">
                    <h3 class="unit__name">${nameProd}</h3>
                </div>
                <div class="unit__price">
                    <div class="unit__calculator calculator">
                        <div class="calculator__buttons">
                            <button class="calculator__button plus" data-articul="${id}">+</button>
                            <button class="calculator__button minus" data-articul="${id}">-</button>
                        </div>
                        <h3 class="calculator__amount">${amount}</h3>
                    </div>
                    <h3 class="unit__cost">${price}</h3>
                </div>
            </div>`

        });
    }

    const calculatorBtn = () => {
        const plusBtns = document.querySelectorAll('.plus')
        plusBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const productIndex = shoppingArr.findIndex(p => p.id === e.target.dataset.articul);
                const product = shoppingArr[productIndex];
                product.amount++
                const amountText = e.target.closest(".calculator");
                amountText.querySelector(".calculator__amount").innerHTML = product.amount
                count(e)
                renderSum()  
            })
        })
        const minusBtns = document.querySelectorAll('.minus')
        minusBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const productIndex = shoppingArr.findIndex(p => p.id === e.target.dataset.articul);
                const product = shoppingArr[productIndex];
                if (product.amount != 0) {
                    product.amount = product.amount - 1
                    count(e)
                    renderSum()  
                }
                const amountText = e.target.closest(".calculator");
                amountText.querySelector(".calculator__amount").innerHTML = product.amount
                removeUnitProduct (e)
            })
        })
    }
   
const count = (e)=>{
    const productIndex = shoppingArr.findIndex(p => p.id === e.target.dataset.articul);
    const product = shoppingArr[productIndex];
     const unit = e.target.closest(".unit");
     const price = unit.querySelector(".unit__cost")
      price.innerHTML=parseFloat(product.price)*product.amount
      product.countPrice=parseFloat(product.price)*product.amount
 
   }

const renderSum = ()=>{
    let sum = shoppingArr.reduce((acc, cur) => acc + parseFloat(cur.countPrice), 0);
    document.querySelector(".background__sum").innerHTML=sum
}


  

    const removeUnitProduct = (e)=>{
        const productIndex = shoppingArr.findIndex(p => p.id === e.target.dataset.articul);
    const product = shoppingArr[productIndex];
        if (product.amount<1) {
            shoppingArr.splice(productIndex, 1);

            const cardProduct = e.target.closest(".unit");
            const idBtn = cardProduct.getAttribute('data-articul')
            document.getElementById(idBtn).querySelector(".button").classList.remove("added")
            cardProduct.remove()
        }

    }

    shopBtn.forEach(btn => {
        btn.addEventListener("click", function (e) {
            if (!e.target.classList.contains("added")) {
                takeData(e)
            }
            renderCart()
            calculatorBtn()
            renderSum()
        })
    })


}

export default shoppingCart