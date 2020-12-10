console.log(555);

import './header-main';

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-modal]'),
};

console.log(refs.backdrop);
console.log(refs.openModalBtn);
console.log(refs.closeModalBtn);

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  console.log('eqweqw');
  refs.backdrop.classList.toggle('is-hidden');
}
