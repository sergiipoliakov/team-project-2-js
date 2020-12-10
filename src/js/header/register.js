console.log('register');
const refs = {
  openModalRegisteBtn: document.querySelector('[data-register]'),
  openModalLoginBtn: document.querySelector('[data-login]'),

  closeModalBtn: document.querySelector('[data-modal-register-close]'),
  backdrop: document.querySelector('[data-modal-register]'),
  registerForm: document.querySelectorAll('[data-register-form]'),
};
console.log(refs.registerForm);

refs.openModalRegisteBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.openModalLoginBtn.addEventListener('click', toggleModal);

function toggleModal() {
  console.log('eqweqw');
  refs.backdrop.classList.toggle('is-hidden');
}

// const emailInput = refs.registerForm[0][0];
// const passwordInput = refs.registerForm[0][1];
// console.log(emailInput);
// console.log(passwordInput);
// let emailQuery;
// emailInput.addEventListener('submit', onEMailInpaut);

// function onEMailInpaut(event) {
//   event.preventDefault();

// emailQuery = event.target.value;

//   console.log(emailQuery);
// }

// let user = {
//   email: `${emailQuery}`,
//   password: 'qwerty123',
// };
// let response = fetch('https://callboard-backend.herokuapp.com/auth/register', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8',
//   },
//   body: JSON.stringify(user),
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   });
// console.log(response);

// export default class NewApiService {
// constructor() {
// this.searchQuery = '';
// this.page = 1;
// }
// const url = 'https://callboard-backend.herokuapp.com/auth/login';

// const data = {
//   email: 'sergii@example.com',
//   password: 'qwerty123',
// };

// let response = fetch('//https://callboard-backend.herokuapp.com/auth/login', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8',
//   },
//   body: JSON.stringify(user),
// });

// let result = await response.json();
// alert(result.message);

// try {
//   const response = await fetch(url, {
//     method: 'POST', // или 'PUT'
//     body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const json = await response.json();
//   console.log('Успех:', JSON.stringify(json));
// } catch (error) {
//   console.error('Ошибка:', error);
// }
// {
//   "email": "sergii@example.com",
//   "password": "qwerty123"
// }
// {
//     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQxM2Q0YTBjOGRhNDAwMTc2ODlkMmMiLCJzaWQiOiI1ZmQxM2Y0ODBjOGRhNDAwMTc2ODlkMzMiLCJpYXQiOjE2MDc1NDg3NDQsImV4cCI6MTYwNzU1MjM0NH0.7U5gwTEzObFnPvHCuI3x255d9Dhs1KQ53q-d2N06_2Q",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQxM2Q0YTBjOGRhNDAwMTc2ODlkMmMiLCJzaWQiOiI1ZmQxM2Y0ODBjOGRhNDAwMTc2ODlkMzMiLCJpYXQiOjE2MDc1NDg3NDQsImV4cCI6MTYxMDE3Njc0NH0.DiIyfDo-F2iWbhRjLcfZRHa8A9_dJqfhdz_7EEIsb_w",
//     "sid": "5fd13f480c8da40017689d33",
//     "user": {
//         "email": "sergii@example.com",
//         "registrationDate": "2020-12-9",
//         "id": "5fd13d4a0c8da40017689d2c",
//         "favourites": [],
//         "calls": []
//     }
// }
