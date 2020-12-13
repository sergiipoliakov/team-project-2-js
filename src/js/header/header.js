import headerTmpl from '../templates/header.hbs';
import searchModalTmpl from '../templates/modal_header-search.hbs';
import registerModalTmpl from '../templates/modal_authorisation.hbs';
import addBillModalTmpl from '../templates/modal-add-bill.hbs';

// ссылки на модальные контейнеры модальных окон
const refs = {
  headerContainer: document.querySelector('.header-container'),
  searchModalContainer: document.querySelector('.search-modal'),
  registerModalContainer: document.querySelector('.register-modal'),
  addBillModalContainer: document.querySelector('.add-bill-modal'),
};

// разметка модальных окон
const headerMarkup = headerTmpl();
const searchModalMarkup = searchModalTmpl();
const registerModalMarkup = registerModalTmpl();
const addBullModalMarkup = addBillModalTmpl();

refs.headerContainer.innerHTML = headerMarkup;
refs.searchModalContainer.innerHTML = searchModalMarkup;
refs.registerModalContainer.innerHTML = registerModalMarkup;
refs.addBillModalContainer.innerHTML = addBullModalMarkup;

// это кнопки открывающие и закрывающие модальные окна
const btnRefs = {
  // поиск
  openSearchModalBtn: document.querySelector('[data="modal-open"]'),
  closeSearchModalBtn: document.querySelector('[data="modal-close"]'),

  // регистрация
  openRegisterModalBtn: document.querySelector(
    '.js-registration-open-modal-btn',
  ),
  closeRegisterModalBtn: document.querySelector('.js-register-close-modal-btn'),

  // добавить товар
  openAddBillModalBtn: document.querySelector('[data-add-bill]'),
  closeAddBillModalBtn: document.querySelector(
    '[data-modal-add-bill-close-btn]',
  ),
};

// задний фон модальнох окон
const backdropSearchModal = document.querySelector('[data-modal]');
const backdropRegisterRegister = document.querySelector(
  '[data-modal-register]',
);
const backdropAddBillhModal = document.querySelector('[data-modal-add-bill]');

btnRefs.openSearchModalBtn.addEventListener('click', toggleModal);
btnRefs.closeSearchModalBtn.addEventListener('click', toggleModal);

btnRefs.openRegisterModalBtn.addEventListener('click', toggleModalRegister);
btnRefs.closeRegisterModalBtn.addEventListener('click', toggleModalRegister);

btnRefs.openAddBillModalBtn.addEventListener('click', toggleModalAddBill);
btnRefs.closeAddBillModalBtn.addEventListener('click', toggleModalAddBill);

function toggleModal() {
  backdropSearchModal.classList.toggle('is-hidden');
}

function toggleModalRegister() {
  backdropRegisterRegister.classList.toggle('is-hidden');
}

function toggleModalAddBill() {
  backdropAddBillhModal.classList.toggle('is-hidden');
}
