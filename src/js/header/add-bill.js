console.log('bill');
const refs = {
  openModalBillBtn: document.querySelector('[data-add-bill]'),
  //   openModalLoginBtn: document.querySelector('[data-login]'),

  closeModalBtn: document.querySelector('[data-modal-add-bill-close]'),
  backdrop: document.querySelector('[data-modal-add-bill]'),
};

console.log(refs.backdrop);
console.log(refs.openModalBillBtn);
console.log(refs.closeModalBtn);

refs.openModalBillBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
// refs.openModalLoginBtn.addEventListener('click', toggleModal);

function toggleModal() {
  console.log('eqweqw');
  refs.backdrop.classList.toggle('is-hidden');
}
