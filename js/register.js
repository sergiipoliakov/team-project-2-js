console.log(555);
const refs = {
  openModalRegisteBtn: document.querySelector('[data-register]'),
  openModalLoginBtn: document.querySelector('[data-login]'),

  closeModalBtn: document.querySelector('[data-modal-register-close]'),
  backdrop: document.querySelector('[data-modal-register]'),
};

console.log(refs.backdrop);
console.log(refs.openModalBtn);
console.log(refs.closeModalBtn);

refs.openModalRegisteBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.openModalLoginBtn.addEventListener('click', toggleModal);

function toggleModal() {
  console.log('eqweqw');
  refs.backdrop.classList.toggle('is-hidden');
}
