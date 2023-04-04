const JSON = async () => {
  try {
    const wrap = document.querySelector('.product-wrap-bar')
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
      `}
      })
  } catch (error) { }


  try {
    const wrap = document.querySelector('.product-wrap-menu')
    const responseSoup = await fetch('./js/modules/JSON-files/soup.JSON')
    const responseFish = await fetch('./js/modules/JSON-files/fish.JSON')
    const responseBrazier = await fetch('./js/modules/JSON-files/brazier.JSON')
    const responseBreakfast = await fetch(
      './js/modules/JSON-files/breakfast.JSON',
    )
    const responseBruschetta = await fetch(
      './js/modules/JSON-files/bruschetta.JSON',
    )
    const responseCanape = await fetch('./js/modules/JSON-files/canape.JSON')
    const responseGarnish = await fetch('./js/modules/JSON-files/garnish.JSON')
    const responseGrill = await fetch('./js/modules/JSON-files/grill.JSON')
    const responsePaste = await fetch('./js/modules/JSON-files/paste.JSON')
    const responseSalad = await fetch('./js/modules/JSON-files/salad.JSON')
    const allPromise = Promise.all([responseSoup, responseFish, responseBrazier,
      responseBreakfast, responseBruschetta, responseCanape, responseGarnish,
      responseGrill, responsePaste, responseSalad])
    allPromise.then((responses) =>
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
  } catch (error) { }
}

export default JSON
