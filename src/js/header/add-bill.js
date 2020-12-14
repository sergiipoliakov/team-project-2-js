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

console.log(addBillFormEl);
console.log(addFileInputEl);

addBillFormEl.addEventListener('submit', takeFormData);

//   const formData = Object.fromEntries(new FormData(e.target).entries());
//   console.log(formData);
// });
function takeFormData(event) {
  event.preventDefault();
  formData.title = nameBillInputEl.value;
  formData.file = addFileInputEl.value;
  formData.description = addAboutBillInputEl.value;
  formData.category = addCategoryInputEl.value;
  formData.price = addPriceInputEl.value;
  formData.phone = addTelefonInputEl.value;

  console.log(formData);
}
