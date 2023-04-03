const barJSON = async (wrapSelector) => {
  const wrap = document.querySelector(wrapSelector)
  let responseAlco = await fetch('./js/modules/JSON-files/bar-alco.JSON')
  const responseFree = await fetch('./js/modules/JSON-files/bar-free.JSON')
  const allPromise = Promise.all([responseAlco, responseFree])
  allPromise
    .then((responses) =>
      Promise.all(responses.map((response) => response.json())),
    )
    .then((jsonObjects) =>
      jsonObjects.reduce((acc, cur) => acc.concat(cur), []),
    )
    .then((data) => {
      for (let key in data) {
        wrap.innerHTML += `  
        <div class="product-wrap__product product ${data[key].class}"  id=${data[key].id}>
        <figure class="product__figure">
            <img class="product__img" src=${data[key].src} alt="фото напитка">
            <figcaption class="product__figcaption">${data[key].name}</figcaption>
        </figure>
        <div class="product__order">
            <h2 class="product__price">${data[key].price} &#x20bd</h2>
            <button class="button button--smal"> В корзину</button>
        </div>
    </div>  
           
    `
      }
    })
}

export default barJSON
