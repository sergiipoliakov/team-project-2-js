import StartPageTmplt from '../../../templates/start-page.hbs';
import contOnSaleGood from '../../../templates/container-on-sale-good.hbs';
// const startPageTmplt = StartPageTmplt();

console.log(StartPageTmplt);

// const startPageContainer = document.querySelector('.start-page');
const startPageContainer = document.querySelector('.start-page');
const productsContainer = document.querySelector('.products');
const btnHeart = document.querySelector('.heart-button');
const btnFullscreen = document.querySelector('.fullscreen-button');
const productCard = document.querySelector('.product-card-123');
// const oneTwoThree = document.querySelector('.one-two-three');

// console.log(startPageContainer);
console.log(productsContainer);
console.log(11001100);

const stPage = {
	name: 'manGoGO',
	age: '100500',
};
// console.log();
productsContainer.innerHTML = StartPageTmplt(stPage);
startPageContainer.innerHTML = contOnSaleGood(stPage);

function showBtn() {
	console.log('showBtn');
	btnHeart.classList.add('is-shown');
	btnFullscreen.classList.add('is-shown');
}

// console.log(productCard);

// console.log(oneTwoThree);
// oneTwoThree.addEventListener('hover', showBtn)

// productCard.addEventListener('hover', showBtn)




// import {
// 	headerItemRef,
// 	homeRef
// } from '../constants/variables';

// const refs = {};
// let buttonsArrRef = [];

// function renderBaseMarkup() {
// 	ROOT_DOM.innerHTML = StartPageTemplate();
// }
// function MainPage() {
// 	renderBaseMarkup();
// }

// export default MainPage;
