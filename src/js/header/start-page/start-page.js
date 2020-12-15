import catigoriesTmplStPg from '../../../templates/start_page.hbs';
import contOnSaleGood from '../../../templates/container-on-sale-good.hbs';

const categoriesListContainer = document.querySelector('.js-categories-list');
const catogoriesContainer = document.querySelector('.js-catigories');

const startPageContainer = document.querySelector('.start-page');
const btnHeart = document.querySelector('.heart-button');
const btnFullscreen = document.querySelector('.fullscreen-button');
const cardItem = document.querySelector('.cards');

// add container-on-sale-good.hbs to start-page.html
startPageContainer.innerHTML = contOnSaleGood();

// hover on crd => show btns
// cardItem.addEventListener('hover', showBtn);
// function showBtn() {
// 	console.log('showBtn');
// 	btnHeart.classList.add('is-shown');
// 	btnFullscreen.classList.add('is-shown');
// }

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




