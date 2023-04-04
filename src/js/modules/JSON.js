const menuBar = async () => {
  
  if(document.querySelector('.product-wrap-bar')){
    const wrap = document.querySelector('.product-wrap-bar')
    let responseAlco = await fetch('./js/modules/menuBar-data/bar-alco.JSON')
    const responseFree = await fetch('./js/modules/menuBar-data/bar-free.JSON')
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
  }
   
  

if(document.querySelector('.product-wrap-menu')){
  const wrap = document.querySelector('.product-wrap-menu')
  const responseSoup = await fetch('./js/modules/menuBar-data/soup.JSON')
  const responseFish = await fetch('./js/modules/menuBar-data/fish.JSON')
  const responseBrazier = await fetch('./js/modules/menuBar-data/brazier.JSON')
  const responseBreakfast = await fetch(
    './js/modules/menuBar-data/breakfast.JSON',
  )
  const responseBruschetta = await fetch(
    './js/modules/menuBar-data/bruschetta.JSON',
  )
  const responseCanape = await fetch('./js/modules/menuBar-data/canape.JSON')
  const responseGarnish = await fetch('./js/modules/menuBar-data/garnish.JSON')
  const responseGrill = await fetch('./js/modules/menuBar-data/grill.JSON')
  const responsePaste = await fetch('./js/modules/menuBar-data/paste.JSON')
  const responseSalad = await fetch('./js/modules/menuBar-data/salad.JSON')
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
}
 
    
 
}

export default menuBar
