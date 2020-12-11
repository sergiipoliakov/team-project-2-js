// import PixabayApiServise from './apiServer';

const refs = {
  openModalRegisteBtn: document.querySelector('[data-register]'),
  // openModalLoginBtn: document.querySelector('[data-login]'),

  closeModalBtn: document.querySelector('[data-modal-register-close]'),
  backdrop: document.querySelector('[data-modal-register]'),
  registerForm: document.querySelector('[data-register-form]'),
};
console.log(refs.registerForm);

refs.openModalRegisteBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.registerForm.addEventListener('submit', fetchApiRegist);

const registerBtn = document.querySelector('#register');

registerBtn.addEventListener('click', fetchApiRegist);

function toggleModal(event) {
  event.preventDefault();
  console.log('eqweqw');

  refs.backdrop.classList.toggle('is-hidden');
}
function fetchApiRegist(event) {
  event.preventDefault();
  const API = 'https://callboard-backend.herokuapp.com/';

  async function postData(
    url = 'https://callboard-backend.herokuapp.com/auth/login',
    data = { email: 'rodiyod106@hmnmw.com', password: '123456' },
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

  postData().then(data => {
    console.log(data.accessToken);
  });
}
