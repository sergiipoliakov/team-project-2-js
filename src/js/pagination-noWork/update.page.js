import { getDataSearch, getDataCategory } from '../servis/call';

let paginationContainer = document.querySelector('.pagination-div');

export function fun1() {
  paginationContainer.innerHTML = 'Home';
}

export function fun2() {
  paginationContainer.innerHTML = 'Page 1';
}

export function fun3() {
  paginationContainer.innerHTML = 'Page 2';
}

export function fun4() {
  paginationContainer.innerHTML = 'Page 3';
}

export function fun5() {
  paginationContainer.innerHTML = 'Not found';
}

export async function fun6() {
  let url = new URL(location.href).search;
  let data = await getDataSearch(url.split('=')[1]);
  paginationContainer.innerHTML = JSON.stringify(data);
}

export async function fun7() {
  const url = new URL(location.href).search;
  const data = await getDataCategory(url.split('=')[1]);
  paginationContainer.innerHTML = JSON.stringify(data);
}

export async function fun8() {
  const search = new URL(location.href).search;
  paginationContainer.innerHTML = `Продукт № ${search.split('=')[1]}`;
}
