import catigoriesTmpl from '../../templates/catigories.hbs';
import { API } from './apiServer';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';
const categoriesListContainer = document.querySelector(`.js-categories-list`);
const catogoriesContainer = document.querySelector(`.js-catigories`);
let catigoriesQuery;
categoriesListContainer.addEventListener('click', onCategoriesItem);
function onCategoriesItem(e) {
  e.preventDefault();
  catigoriesQuery = e.target.id;
  const url = `https://callboard-backend.herokuapp.com/call/specific/${catigoriesQuery}`;
  toCatigoriesClick(url).then(data => {
    catogoriesContainer.innerHTML = catigoriesTmpl(data);
  });
}
const toCatigoriesClick = function (param) {
  async function postData(url = param, method = 'GET') {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
    return await response.json();
  }
  return postData();
};