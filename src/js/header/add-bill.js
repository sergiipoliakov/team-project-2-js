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

// let formData = {};

const myStorage = window.localStorage;

let token = myStorage.getItem('Bearer');
let id = myStorage.getItem('id');
let sid = myStorage.getItem('sid');
console.log(sid);
console.log(token);
console.log(id);

// const binary = instanceOfFile.getAsBinary();
// console.log(binary);

// const files = addFileInputEl.files;
// console.log(files);
// let formData = new FormData(addBillFormEl);
// console.log(formData);

addBillFormEl.addEventListener('submit', takeFormData);

function takeFormData(event) {
  event.preventDefault();

  // let photo = document.getElementById('#file').files[0];
  let formData = new FormData(addBillFormEl);

  // formData.append('photo', photo);
  // fetch('/upload/image', { method: 'POST', body: formData });
  // const photo = addFileInputEl.files[0];

  // formData.append('userpic', photo, 'chris.jpg');

  // formData.append('photo', photo);

  // console.log([toString(photo)]);

  console.log(formData);

  // var binary = instanceOfFile.getAsBinary();

  // const files = addFileInputEl.files;
  // console.log(files);
  // formData.file = [];

  // formData.title = nameBillInputEl.value;
  // formData.file = addFileInputEl.files[0];
  // formData.description = addAboutBillInputEl.value;
  // formData.category = addCategoryInputEl.value;
  // formData.price = addPriceInputEl.value;
  // formData.phone = addTelefonInputEl.value;

  // console.log(formData.file);
  // console.log(formData);
  // console.log([JSON.stringify(formData)]);

  const url = `https://callboard-backend.herokuapp.com/call`;
  // const url = `https://callboard-backend.herokuapp.com/call?id=5fd7715e09d4b90017825519`;

  const body = formData;
  toAddBill(url, body, token)
    .then(data => {
      console.log('data', data);
    })
    .catch(error => {
      console.log(error);
    });
}

const toAddBill = function (URL, BODY, TOKEN1) {
  async function postData(
    url = URL,
    data = BODY,
    method = 'POST',
    token1 = TOKEN1,
  ) {
    const response = await fetch(url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'multipart/form-data',
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
