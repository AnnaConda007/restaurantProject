const barJSON = async (wrapSelector) => {
  const wrap = document.querySelector(wrapSelector)
  let response = await fetch('./js/modules/JSON-files/bar-alco.JSON')
  let result = await response.json()
  for (let key in result) {
    wrap.innerHTML += `    
        <div class="product-wrap__product product ${result[key].class}"  id=${result[key].id}>
        <figure class="product__figure">
            <img class="product__img" src=${result[key].src} alt="фото напитка">
            <figcaption class="product__figcaption">${result[key].name}</figcaption>
        </figure>
        <div class="product__order">
            <h2 class="product__price">${result[key].price} &#x20bd</h2>
            <button class="button button--smal"> В корзину</button>
        </div>
    </div>
`
  }

  response = await fetch('./js/modules/JSON-files/bar-free.JSON')
  result = await response.json()
  for (let key in result) {
    wrap.innerHTML += `    
    <div class="product-wrap__product product ${result[key].class}"  id=${result[key].id}>
    <figure class="product__figure">
        <img class="product__img" src=${result[key].src} alt="фото напитка">
        <figcaption class="product__figcaption">${result[key].name}</figcaption>
    </figure>
    <div class="product__order">
        <h2 class="product__price">${result[key].price} &#x20bd</h2>
        <button class="button button--smal"> В корзину</button>
    </div>
</div>
`
  }
}

export default barJSON
