import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';

const refs = {
  openModalRegisteBtn: document.querySelector('[data-register]'),
  closeModalBtn: document.querySelector('[data-modal-register-close]'),
  backdrop: document.querySelector('[data-modal-register]'),
};

const loginRegisterBtn = document.querySelector('.off');
const logoutBtn = document.querySelector('.js-logout-button');

const myStorage = window.localStorage;

let token = myStorage.getItem('Bearer');
console.log(token);

if (token) {
  loginRegisterBtn.innerHTML = '';
  document.getElementById('exit.btn').hidden = false;
} else if (!token) {
  document.getElementById('exit.btn').hidden = true;
}

refs.openModalRegisteBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

logoutBtn.addEventListener('click', onLogout);

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
}

const formInputEmail = document.querySelector('#e-mail');
const formInputPassword = document.querySelector('#password');
const formRegistration = document.querySelector('[data-register-form]');
const loginFormBtn = document.querySelector('#login');
const registerFormBtn = document.querySelector('#register');

let registerFormQuery = {};

formRegistration.addEventListener('submit', onRegisterFormSubmit);

function onRegisterFormSubmit(event) {
  event.preventDefault();
  // toggleModal();

  const currentClick = event.currentTarget.nodeName;
  console.dir(currentClick);

  registerFormQuery.email = formInputEmail.value;
  registerFormQuery.password = formInputPassword.value;

  if (currentClick.id === 'login') {
    console.log('super');
  }
  toLogin(registerFormQuery)
    .then(data => {
      console.log(data.accessToken);

      const message = data.message;
      console.log(data.message);
      if (message) {
        return error({
          text: message,
          type: 'info',
          animateSpeed: 'normal',
          delay: 1000,
        });
      }

      const Token = data.accessToken;

      if (Token !== undefined) {
        localStorage.setItem('Bearer', Token);
        location.reload();
      } else if (Token === undefined) {
        toRegistation(registerFormQuery).then(data => {
          console.log(data.accessToken);
          const Token = data.accessToken;

          if (Token !== undefined) {
            localStorage.setItem('Bearer', Token);
            location.reload();
          }
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
}

const toLogin = function (data) {
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
const toRegistation = function (data) {
  async function postData(
    url = 'https://callboard-backend.herokuapp.com/auth/register',
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
  location.reload();
}
