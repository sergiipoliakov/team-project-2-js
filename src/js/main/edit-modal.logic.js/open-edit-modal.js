const myCard = document.querySelector('.my-goods-hbs');

myCard.addEventListener('click', getAtribut);

function getAtribut(e) {
  if (!e.target.nodeName === 'IMG') {
    return;
  }
  const dataAtribut = document
    .querySelector('.product-card')
    .getAttribute('data-cart');
  return dataAtribut;
}
