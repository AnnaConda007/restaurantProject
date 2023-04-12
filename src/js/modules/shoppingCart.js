const shoppingCart = async () => {
    if (document.querySelector(".inner-container")) {
        let products = JSON.parse(localStorage.products) || [];
        let sum = 0
       let fullHtmlDocument
        document.querySelectorAll(".button-add").forEach(btn => {
            btn.addEventListener("click", (e) => {
                takeData(e)
                renderCart()
            })
        })
        renderCart()

        if (products.length > 0) {
            products.forEach(({ id }) => {
                const wrap = document.getElementById(`${id}`)
                wrap.querySelector(".button").classList.add("added")
            })
        }

        const takeData = (e) => {
            if (!e.target.classList.contains("added")) {
                const сardProduct = e.target.closest(".product");
                const imgSrc = сardProduct.querySelector(".product__img").src;
                const name = сardProduct.querySelector(".product__figcaption").textContent;
                const price = сardProduct.querySelector(".product__price").textContent;
                const idProduct = сardProduct.id
                const btn = сardProduct.querySelector(".button");
                btn.classList.add("added")
                const product = {
                    img: imgSrc,
                    nameProd: name,
                    price: price,
                    countPrice: price,
                    amount: 1,
                    id: idProduct
                };
                products.push(product)
                localStorage.setItem("products", JSON.stringify(products))
            }
        }

        function renderCart() {
            document.querySelector(".background__products").innerHTML = ``
            products.forEach(({ img, nameProd, countPrice, amount, id }) => {
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
                        <h3 class="unit__cost">${countPrice}</h3>
                    </div>
                </div>`
            });
            CountAmount()
            renderTotalPrice()
        }

        function CountAmount() {
            document.querySelectorAll('.plus').forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const product = products.find(product => {
                        return product.id === e.target.dataset.articul
                    })
                    product.amount++
                    const amountText = e.target.closest(".calculator");
                    renderlPrice(e)
                    renderTotalPrice()
                    localStorage.setItem("products", JSON.stringify(products));
                    amountText.querySelector(".calculator__amount").innerHTML = product.amount
                })
            })
            document.querySelectorAll('.minus').forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const product = products.find(product => {
                        return product.id === e.target.dataset.articul
                    })
                    if (product.amount != 0) {
                        product.amount = product.amount - 1
                        renderlPrice(e)
                        renderTotalPrice()
                    }
                    const amountText = e.target.closest(".calculator");
                    localStorage.setItem("products", JSON.stringify(products));
                    amountText.querySelector(".calculator__amount").innerHTML = product.amount
                    removeProduct(e)
                })
            })
        }

        const renderlPrice = (e) => {
            const product = products.find(product => {
                return product.id === e.target.dataset.articul
            })
            const unit = e.target.closest(".unit");
            const price = unit.querySelector(".unit__cost")
            product.countPrice = parseFloat(product.price) * product.amount
            price.innerHTML = product.countPrice
            localStorage.setItem("products", JSON.stringify(products));
        }

        function renderTotalPrice() {
            sum = products.reduce((acc, cur) => acc + parseFloat(cur.countPrice), 0);
            document.querySelector(".background__sum").innerHTML = sum
            if (sum === 0) {
                document.querySelector(".cart").style.display = "none"
                document.body.classList.remove("hidden")
            }
        }

        const removeProduct = (e) => {
            const productIndex = products.findIndex(p => p.id === e.target.dataset.articul);
            const product = products[productIndex];
            if (product.amount < 1) {
                products.splice(productIndex, 1);
                localStorage.setItem("products", JSON.stringify(products));
                const cardProduct = e.target.closest(".unit");
                const idBtn = cardProduct.getAttribute('data-articul')
                document.getElementById(idBtn).querySelector(".button").classList.remove("added")
                cardProduct.remove()
            }
        }

        const orderFormation = () => {
            let htmlString
            products.forEach(({ nameProd, amount, price }) => {
                htmlString += `
                <li class="order__li" > Наименование: ${nameProd}, колличество: ${amount}, цена: ${price}, </li> `;
            })
          fullHtmlDocument = `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <title>Заказ</title>
            </head>
            <body>
            <section class="order">
            <h3 class="order__title">Новый заказ</h3>
            <div class="order__content">
                <ol class="order__ol">
                 ${htmlString}
                </ol>
                <h5 class="order__title">Итого: ${sum}</h5>
            </div>
        </section> 
            </body>
            </html>`;
            console.log(fullHtmlDocument)
        }


        /* шаблон*/
        const CLIENT_ID = "661085015733-f8a5qebqp1otlmfu4k0i243r7ph5empg.apps.googleusercontent.com";
        const SCOPES = "https://www.googleapis.com/auth/gmail.send";
        function initGapi() {
          gapi.load("client:auth2", () => {
            gapi.client.init({
              clientId: CLIENT_ID,
              scope: SCOPES
            }).then(() => {
              if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
                gapi.auth2.getAuthInstance().signIn();
              }
            });
          });
        }
        
        initGapi();

        function sendEmail(htmlDocument) {
            const email = {
              to: 'annahrulckova@yandex.ru',  
              subject: 'Новый заказ',
              body: htmlDocument,
            };
          
            const base64EncodedEmail = btoa(
              `To: ${email.to}\r\n` +
              `Subject: ${email.subject}\r\n` +
              "\r\n" +
              `${email.body}`
            ).replace(/\+/g, "-").replace(/\//g, "_");
             
            const message = {
              raw: base64EncodedEmail
            };
          
            return gapi.client.gmail.users.messages.send({
              userId: "me",
              resource: message
            }).then(response => {
              console.log("Email sent:", response);
            }).catch(error => {
              console.error("Error sending email:", error);
            });
          }

        /*шаблон заканчивается */

        document.querySelector(".button--order").addEventListener("click", () => {
            orderFormation()
            products = []
            localStorage.setItem("products", JSON.stringify(products));
            document.querySelectorAll(".button").forEach(btn => {
                btn.classList.remove("added")
            })
            renderCart()
            sendEmail(fullHtmlDocument);

        })
    }
}

export default shoppingCart