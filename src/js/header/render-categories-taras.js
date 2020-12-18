
// import containerInitialTpl from './templates/initial page/container-initial.hbs';
// import CardsInitialTpl from './templates/initial page/card-initial.hbs';

// import containerOnsaleTpl from '../../templates/container-on-sale-good.hbs';
import containerInitialTpl from '../../templates/container-initial.hbs';
import CardsInitialTpl from '../../templates/card-initial.hbs';
// import CardsOnSaleTpl from '../../templates/card-onsale.hbs';




let refMainContainer = document.querySelector('.main-containet');
const refPaginationStartCategories = document.querySelector('.all-button');
// console.log(refPaginationStartCategories);
refPaginationStartCategories.addEventListener('click', mainPagination)
var currentCategory;
let currentPageButton = 1;
var initBtn = document.getElementById("init-btn");

const categoryNames = {
	sales1: "РОЗПРОДАЖ",
	sales2: "РІЗНЕ",
	recreationAndSport: "ВІДПОЧИНОК І СПОРТ",
	free: "ВІДДАМ БЕЗКОШТОВНО",
	businessAndServices: "БІЗНЕС ТА ПОСЛУГИ",
	work: "РОБОТА",
	electronics: "ЕЛЕКТРОНІКА",
	property: "НЕРУХОМІСТЬ",
	transport: "ТРАНСПОРТ",
	trade: "ОБМІН"
}

function mainPagination(event) {
	// if (event.target.className = 'work-button' && event.target.innerText !== 1) {
	//     return
	// }

	if (event.target.className = 'work-button') {
		event.preventDefault();
		initBtn.classList.remove("active");
		// console.log(event.target.innerText !== 1);
		clearCategoryContainer()
		currentPageButton = event.target.innerText;
		renderCategories();
		// console.log(currentPageButton);
	}
}

function clearCategoryContainer() {
	refMainContainer.innerHTML = '';
}

function fillNameOfContainers(name) {
	let refNameCardContainer = document.querySelector(`.cont-name-${name}`);
	if (name === 'sales') {
		refNameCardContainer.insertAdjacentHTML('beforeend', categoryNames["sales1"] + "<span class ='vert-line devider'>|</span>" + categoryNames["sales2"])
	}
	else {
		refNameCardContainer.insertAdjacentHTML('beforeend', categoryNames[name])
	}
}

function renderCardsToCategories(category) {
	const refOnSaleCardContainer = document.querySelector('.cont-initial-sales');
	var refCurretnCategory = document.querySelector(`.cont-initial-${currentCategory}`)
	refCurretnCategory.insertAdjacentHTML('beforeend', CardsInitialTpl(category));
}

function fetchCategories() {

	const option = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',

		},
	}
	const url = `https://callboard-backend.herokuapp.com/call?page=${currentPageButton}`;

	const response = fetch(url, option).then(response => response.json()).then(data => {
		return data;
	});
	return response;
};

function RenderContainersByPage(element) {
	refMainContainer.insertAdjacentHTML('beforeend', containerInitialTpl(element))
}


function renderCategories() {
	fetchCategories().then(data => {
		// let curData = data;
		let categoriesArr = Object.keys(data);
		categoriesArr.forEach(element => {
			currentCategory = element;
			RenderContainersByPage(element);
			fillNameOfContainers(element);
			renderCardsToCategories(data[element])

		})
	})
}

renderCategories();





