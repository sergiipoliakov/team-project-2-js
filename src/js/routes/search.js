import { updateState, updatedContent } from './rout-main'

let searchInput = document.querySelector('#searchInput');
let btnSearch = document.querySelector('#btn');

let searchProduct = (e) => {

	e.preventDefault();
	let value = search.value;
	if (!value) return
	updateState(`/search?value=${value}`);
	updatedContent()
}

btnSearch.addEventListener('click', searchProduct)


