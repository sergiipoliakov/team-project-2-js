const refs = {
  openModalBillBtn: document.querySelector('[data-add-bill]'),
  closeModalBtn: document.querySelector('[data-modal-add-bill-close]'),
  backdrop: document.querySelector('[data-modal-add-bill]'),
};

refs.openModalBillBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', onBackDropClick);

// refs.openModalLoginBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
}
function onBackDropClick(event) {
  const isonBackDropClick = event.target.classList.contains('js-backdrop');

  console.log(isonBackDropClick);
  if (!isonBackDropClick) {
    return;
  }
  refs.backdrop.classList.toggle('is-hidden');
}
