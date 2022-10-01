const burgerRef = document.querySelector('.side-menu__btn');
const menuRef = document.querySelector('.side-menu');
const btnCloseRef = document.querySelector('.side-menu__btn-close');

burgerRef.addEventListener('click', onBurgerClick);
btnCloseRef.addEventListener('click', onBtnCloseClick);

function onBurgerClick() {
  menuRef.classList.add('is-open');
  burgerRef.classList.add('is-hidden');
}

function onBtnCloseClick() {
  menuRef.classList.remove('is-open');
  burgerRef.classList.remove('is-hidden');
}
