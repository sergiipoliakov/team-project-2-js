const refs = {
  openModalBtn: document.querySelector('[data-exit]'),
  closeModalBtn: document.querySelector('[data-modal-logout-close]'),
  backdrop: document.querySelector('[data-modal-logout]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
}
