import StartPageTmplt from '../../../templates/start_page.hbs';
// const startPageTmplt = StartPageTmplt();

// console.log(StartPageTmplt);

// const startPageContainer = document.querySelector('.start-page');
const productsContainer = document.querySelector('.products');

// console.log(startPageContainer);
// console.log(productsContainer);

// console.log(11001100);

const stPage = {
  name: 'manGoGO',
  age: '100500',
};

// console.log();

productsContainer.innerHTML = StartPageTmplt(stPage);

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
