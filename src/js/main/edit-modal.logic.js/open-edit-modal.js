// const dataAtribut = document.querySelector('.product-card').getAttribute();
// console.log(dataAtribut);

{
  /* <div class="getAtribut" data-atribu-12345></div>; */
}

const myCard = document.querySelector('.my-goods-hbs');

console.log(myCard);
// const card = document.querySelector('.getAtribut');

myCard.addEventListener('click', getAtribut);

function getAtribut(e) {
  if (!e.target.nodeName === 'IMG') {
    return;
  }
  // === 'IMG'

  const dataAtribut = document
    .querySelector('.product-card')
    .getAttribute('data-cart');
  //   return dataAtribut;
  console.log(dataAtribut);
}

// const dataAtribut = card.dataset.set;
