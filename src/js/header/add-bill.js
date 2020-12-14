// console.log('bill');
const refs = {
  openModalBillBtn: document.querySelector('[data-add-bill]'),
  closeModalBtn: document.querySelector('[data-modal-add-bill-close]'),
  backdrop: document.querySelector('[data-modal-add-bill]'),
};

refs.openModalBillBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
// refs.openModalLoginBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
}

const addBillFormEl = document.querySelector('.js-bill-form');
const nameBillInputEl = document.querySelector('#nameBill');
const addFileInputEl = document.querySelector('#file');
const addAboutBillInputEl = document.querySelector('#aboutBill');
const addCategoryInputEl = document.querySelector('#category');
const addPriceInputEl = document.querySelector('#price');
const addTelefonInputEl = document.querySelector('#telefon');

let formData = {};

const myStorage = window.localStorage;

let token = myStorage.getItem('Bearer');
// let id = myStorage.getItem(‘id’);
// let sid = myStorage.getItem(‘sid’);
console.log(token);

addBillFormEl.addEventListener('submit', takeFormData);

function takeFormData(event) {
  event.preventDefault();

  formData.title = nameBillInputEl.value;
  formData.file = addFileInputEl.value;
  formData.description = addAboutBillInputEl.value;
  formData.category = addCategoryInputEl.value;
  formData.price = addPriceInputEl.value;
  formData.phone = addTelefonInputEl.value;
  const url = `https://callboard-backend.herokuapp.com/call/${formData.title}`;
  const body = formData;
  toAddBill(url, body, token).then(data => {
    console.log(`Bearer ${token}`);
    console.log(data);
  });
}

const toAddBill = function (URL, BODY, TOKEN1) {
  async function postData(
    url = URL,
    data = BODY,
    method = 'PATCH',
    token1 = TOKEN1,
  ) {
    console.log(token1);
    const response = await fetch(url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token1}`,
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
