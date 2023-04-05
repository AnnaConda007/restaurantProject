const menuBar = async () => {

  if (document.querySelector('.product-wrap-bar')) {
    const wrap = document.querySelector('.product-wrap-bar')
    const responseAlco = await fetch('./js/modules/menuBar-data/bar-alco.JSON')
    const responseFree = await fetch('./js/modules/menuBar-data/bar-free.JSON')
    const allPromise = await Promise.all([responseAlco, responseFree])
    const jsonObjects = await Promise.all(allPromise.map(response => response.json()));
    const data = await jsonObjects.reduce((acc, cur) => acc.concat(cur), [])
    data.forEach(({ id, src, name, price, type }) => {
      wrap.innerHTML += `
        <div class="product-wrap__product product ${type}" id=${id}>
          <figure class="product__figure">
            <img class="product__img" src=${src} alt="фото напитка">
            <figcaption class="product__figcaption">${name}</figcaption>
          </figure>
          <div class="product__order">
            <h2 class="product__price">${price} &#x20bd</h2>
            <button class="button button--smal"> В корзину</button>
          </div>
        </div>
      `;
    });
  }

  if (document.querySelector('.product-wrap-menu')) {
    const wrap = document.querySelector('.product-wrap-menu')
    const responseSoup = await fetch('./js/modules/menuBar-data/soup.JSON')
    const responseFish = await fetch('./js/modules/menuBar-data/fish.JSON')
    const responseBrazier = await fetch('./js/modules/menuBar-data/brazier.JSON')
    const responseBreakfast = await fetch('./js/modules/menuBar-data/breakfast.JSON')
    const responseBruschetta = await fetch('./js/modules/menuBar-data/bruschetta.JSON')
    const responseCanape = await fetch('./js/modules/menuBar-data/canape.JSON')
    const responseGarnish = await fetch('./js/modules/menuBar-data/garnish.JSON')
    const responseGrill = await fetch('./js/modules/menuBar-data/grill.JSON')
    const responsePaste = await fetch('./js/modules/menuBar-data/paste.JSON')
    const responseSalad = await fetch('./js/modules/menuBar-data/salad.JSON')
    const allPromise = await Promise.all([responseSoup, responseFish, responseBrazier,
      responseBreakfast, responseBruschetta, responseCanape, responseGarnish,
      responseGrill, responsePaste, responseSalad])
    const jsonObjects = await Promise.all(allPromise.map(response => response.json()));
    const data = await jsonObjects.reduce((acc, cur) => acc.concat(cur), [])
    data.forEach(({ id, src, name, price, type }) => {
      wrap.innerHTML += `
        <div class="product-wrap__product product ${type}" id=${id}>
          <figure class="product__figure">
            <img class="product__img" src=${src} alt="фото напитка">
            <figcaption class="product__figcaption">${name}</figcaption>
          </figure>
          <div class="product__order">
            <h2 class="product__price">${price} &#x20bd</h2>
            <button class="button button--smal"> В корзину</button>
          </div>
        </div>
      `;
    });
  }
}

export default menuBar
