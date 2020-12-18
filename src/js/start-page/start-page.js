import catigoriesTmplStPg from '../../templates/start_page.hbs';
import contOnSaleGood from '../../templates/container-on-sale-good.hbs';

// console.log(catigoriesTmplStPg);
// console.log(contOnSaleGood);

const categoriesListContainer = document.querySelector('.js-categories-list');
const catogoriesContainer = document.querySelector('.js-catigories');
// const catogoriesContainer = document.querySelector('.my-st-page-ctgrs-container');
// console.log(categoriesListContainer);
// console.log(catogoriesContainer);

const startPageContainer = document.querySelector('.start-page');
const btnHeart = document.querySelector('.heart-button');
const btnFullscreen = document.querySelector('.fullscreen-button');
const cardItem = document.querySelector('.cards');
// const oldPrice = document.querySelector('.old-price-st-p');

// console.log(startPageContainer);
console.log(btnHeart);
console.log(btnFullscreen);
console.log(cardItem);

// add container-on-sale-good.hbs to start-page.html
startPageContainer.innerHTML = contOnSaleGood();

//hover on .cards => show btns
function showBtn() {
	console.log('btnHeart:', btnHeart);
	btnHeart.classList.add('is-shown');
	btnFullscreen.classList.add('is-shown');
}

function hideBtn() {
	btnHeart.classList.remove('is-shown');
	btnFullscreen.classList.remove('is-shown');
}

// onOldPriceMarginRight();

// function onOldPriceMarginRight {
// 	if (oldPrice.innerHTML !== '') {
// 		oldPrice.classList.add('on-margin-right');
// 	}
// }

// cardItem.addEventListener('mouseenter', showBtn);
// cardItem.addEventListener('mouseleave', hideBtn);

/// --- 
let catigoriesQuery;

categoriesListContainer.addEventListener('click', onCategoriesItem);

function onCategoriesItem(event) {
	event.preventDefault();

	// const currentCategory = event.target.id;

	catigoriesQuery = event.target.id;

	// console.log(catigoriesQuery);
	const url = `https://callboard-backend.herokuapp.com/call/specific/${catigoriesQuery}`;
	toCatigoriesClick(url).then(data => {
		catogoriesContainer.innerHTML = catigoriesTmplStPg(data);
		// console.log(data);
		// toggleModal();
	});
}

const toCatigoriesClick = function (param) {
	async function postData(url = param, method = 'GET') {
		const response = await fetch(url, {
			method: method, // *GET, POST, PUT, DELETE, etc.
			headers: {
				'Content-Type': 'application/json',
				// Authorization:
				//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *client
			//   body: JSON.stringify(data), // body data type must match "Content-Type" header
		});

		return await response.json();

		// parses JSON response into native JavaScript objects
	}
	return postData();
};

// function toggleModal() {
// searchModal.classList.toggle('is-hidden');
// }




