const menuBtnOpenModal = document.querySelector('.js-menu-open-btn');
const menuBackdrop = document.getElementById('menu-backdrop');
const menuCloseBtn = document.querySelector('.js-menu-close-btn');
const showLinksMobile = document.querySelector('[data-show-links]');
const hiddenPart = document.querySelector('.menu-hidden-part');
const showLinksTablet = document.querySelector('.js-my-cabinet-btn');

menuBtnOpenModal.addEventListener('click', onOpenMenuModal);
menuCloseBtn.addEventListener('click', onOpenMenuModal);
showLinksMobile.addEventListener('click', onShowLinks);
showLinksTablet.addEventListener('click', onShowLinks);

function onOpenMenuModal() {
  menuBackdrop.classList.toggle('is-hidden');
}

function onShowLinks() {
  hiddenPart.classList.toggle('is-hidden');
}
