import headerTmpl from '../../templates/header-with-auth.hbs';

const refs = {
  openModalRegisteBtn: document.querySelector('[data-register]'),
  closeModalBtn: document.querySelector('[data-modal-register-close]'),
  backdrop: document.querySelector('[data-modal-register]'),
};

const headerContainer = document.querySelector('.js-header');
const exitBtn = document.querySelector('.js-logout-button');

const headerLoginDaneMarkup = headerTmpl();
const myStorage = window.localStorage;

console.log(headerLoginDaneMarkup);
console.log(headerContainer);

console.log(myStorage);

let token = myStorage.getItem('Bearer');

console.log(token);

// if (myToken) {
//   headerContainer.innerHTML = '';
// } else {
// const revove = myStorage.removeItem('Bearer');
//   console.log(myToken);
// }

refs.openModalRegisteBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

exitBtn.addEventListener('click', onLogout);

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
}

console.log(exitBtn);

const formInputEmail = document.querySelector('#e-mail');
const formInputPassword = document.querySelector('#password');
const formRegistration = document.querySelector('[data-register-form]');
const registerFormBtn = document.querySelector('#login');

let registerFormQuery = {};
console.dir(formInputEmail);
console.log(formInputPassword);
console.log(formRegistration);

formRegistration.addEventListener('submit', onRegisterFormSubmit);
if (token) {
  // headerContainer.innerHTML = headerLoginDaneMarkup;
}
// else {
// const revove = myStorage.removeItem('Bearer');
// console.log(token);
// }

function onRegisterFormSubmit(event) {
  event.preventDefault();
  toggleModal();

  registerFormQuery.email = formInputEmail.value;
  registerFormQuery.password = formInputPassword.value;

  resolt(registerFormQuery).then(data => {
    console.log(data);

    const Token = data.accessToken;
    // console.log(accessToken);

    localStorage.setItem('Bearer', Token);
  });
}

const resolt = function (data) {
  async function postData(
    url = 'https://callboard-backend.herokuapp.com/auth/login',
    data = registerFormQuery,
    method = 'POST',
  ) {
    const response = await fetch(url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // Authorization:
        //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return await response.json();

    // parses JSON response into native JavaScript objects
  }
  return postData();
};

function onLogout() {
  myStorage.removeItem('Bearer');
}
