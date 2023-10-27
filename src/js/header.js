const themeSwitch = document.getElementById('themeSwitch');
const isDarkMode = localStorage.getItem('darkMode') === 'true';
const switchLight = document.querySelector('.light_mode');
const switchDark = document.querySelector('.dark_mode');
const header = document.querySelector('.header_wrapper');
const openModalBtn = document.querySelector('.btn_log-in');
const closeModalBtn = document.querySelector('.modal_singup_close');
const logoLight = document.querySelector('.logo_light');
const logoDark = document.querySelector('.logo_dark');
const field = document.querySelector('.modal_signup-form');
const modal = document.querySelector('.modal_signup');
const nameField = document.querySelector('.modal_signup-field-name');
const passField = document.querySelector('.modal_signup-field-pass');
const emailField = document.querySelector('.modal_signup-field-email');
const inputName = document.querySelector('.modal_input-name');
const inputEmail = document.querySelector('.modal_input-mail');
const InputPass = document.querySelector('.modal_input-pass');
const modalBtn = document.querySelector('.modal_btn');
const hamburgerOpenBtn = document.querySelector('.hamburger_open');
const hamburgerCloseBtn = document.querySelector('.hamburger_close');
const modalMobile = document.querySelector('.modal_mobile');
const modalSignupMobile = document.querySelector('.modal_signup-mobile');
const buttonMobileModal = document.querySelector('.btn_log-out-mobile');
const buttonMobileModalClose = document.querySelector('.modal_singup_close-mobile');
const iconMail = document.querySelector('.modal_input-icon-mail');
const iconPass = document.querySelector('.modal_input-icon-pass');
const iconWhiteMail = document.querySelector('.modal_input-icon-mail-white');
const iconWhitePass = document.querySelector('.modal_input-icon-pass-white');
const iconMobileMail = document.querySelector('.modal_input-icon-mobile-mail-white');
const iconMobilePass = document.querySelector('.modal_input-icon-mobile-pass-white');
const lightClose = document.querySelector('.hamburger_close-img');
const darkClose = document.querySelector('.img_dark-close');
const alignLight = document.querySelector('.hamburger_open-svg');
const alignDark = document.querySelector('.hamburger_open-svg-white');
const iconLight = document.querySelector('.icon_light');
const iconDark = document.querySelector('.icon_dark');
const cartLight = document.querySelector('.lock-icon');
const cartDark = document.querySelector('.lock_icon-dark');
const stefanBtn = document.querySelector('.stefan_btn');
const btnLog = document.querySelector('.button_login');
const stefanName = document.querySelector('.stefan_name');
const divLinkHeader = document.querySelector('.home_shopping_list');
document.body.classList.toggle('dark-mode', isDarkMode);

themeSwitch.addEventListener('change', () => {
  const isDarkMode = themeSwitch.checked;
  document.body.classList.toggle('dark-mode', isDarkMode);

  localStorage.setItem('darkMode', isDarkMode.toString());
  switchLight.style.display = 'block';
  switchDark.style.display = 'none';
  openModalBtn.style.backgroundColor = '#f6f6f6';
  logoLight.style.display = 'block';
  logoDark.style.display = 'none';
  header.style.backgroundColor = '#f6f6f6';
  divLinkHeader.style.color = 'black';
  modal.style.backgroundColor = '#f6f6f6';
  modal.style.border = '2px solid black';
  field.style.backgroudColor = '#f6f6f6';
  nameField.style.backgroundColor = '#f6f6f6';
  nameField.style.border = '2px solid black';
  emailField.style.border = '2px solid black';
  passField.style.border = '2px solid black';
  emailField.style.backgroundColor = '#f6f6f6';
  passField.style.backgroundColor = '#f6f6f6';
  inputName.style.backgroundColor = '#f6f6f6';
  inputEmail.style.backgroundColor = '#f6f6f6';
  InputPass.style.backgroundColor = '#f6f6f6';
  closeModalBtn.style.backgroundColor = '#f6f6f6';
  modalBtn.style.backgroundColor = 'black';
  modalBtn.style.color = '#f6f6f6';
  hamburgerOpenBtn.style.backgroundColor = '#f6f6f6';
  hamburgerCloseBtn.style.backgroundColor = '#f6f6f6';
  iconMail.style.display = 'block';
  iconPass.style.display = 'block';
  iconWhiteMail.style.display = 'none';
  iconWhitePass.style.display = 'none';
  lightClose.style.display = 'block';
  darkClose.style.display = 'none';
  alignLight.style.display = 'block';
  alignDark.style.display = 'none';
  iconLight.style.display = 'block';
  iconDark.style.display = 'none';
  cartLight.style.display = 'block';
  cartDark.style.display = 'none';
  if (isDarkMode === true) {
    switchLight.style.display = 'none';
    switchDark.style.display = 'block';
    header.style.backgroundColor = '#333';
    openModalBtn.style.backgroundColor = '#333';
    logoDark.style.display = 'block';
    logoLight.style.display = 'none';
    modal.style.backgroundColor = '#333';
    modal.style.border = '2px solid #f6f6f6';
    field.style.backgroudColor = '#333';
    nameField.style.backgroundColor = '#333';
    nameField.style.border = '2px solid white';
    divLinkHeader.style.color = '#f6f6f6';
    emailField.style.backgroundColor = '#333';
    emailField.style.border = '2px solid white';
    passField.style.backgroundColor = '#333';
    passField.style.border = '2px solid white';
    inputName.style.backgroundColor = '#333';
    inputEmail.style.backgroundColor = '#333';
    InputPass.style.backgroundColor = '#333';
    closeModalBtn.style.backgroundColor = '#333';
    modalBtn.style.backgroundColor = '#f6f6f6';
    modalBtn.style.color = 'black';
    hamburgerCloseBtn.style.backgroundColor = '#333';
    hamburgerOpenBtn.style.backgroundColor = '#333';
    iconMail.style.display = 'none';
    iconPass.style.display = 'none';
    iconWhiteMail.style.display = 'block';
    iconWhitePass.style.display = 'block';
    lightClose.style.display = 'none';
    darkClose.style.display = 'block';
    alignLight.style.display = 'none';
    alignDark.style.display = 'block';
    iconLight.style.display = 'none';
    iconDark.style.display = 'block';
    cartLight.style.display = 'none';
    cartDark.style.display = 'block';
  }
});

openModalBtn.addEventListener('click', () => {
  modal.classList.toggle('is_hidden');
});
closeModalBtn.addEventListener('click', () => {
  modal.classList.toggle('is_hidden');
});

hamburgerOpenBtn.addEventListener('click', () => {
  modalMobile.style.opacity = 1;
  hamburgerOpenBtn.style.display = 'none';
  hamburgerCloseBtn.style.display = 'block';
});

hamburgerCloseBtn.addEventListener('click', () => {
  modalMobile.style.opacity = 0;
  hamburgerOpenBtn.style.display = 'block';
  hamburgerCloseBtn.style.display = 'none';
});

buttonMobileModal.addEventListener('click', () => {
  modalSignupMobile.style.display = 'block';
  modalMobile.style.opacity = 0;
});

buttonMobileModalClose.addEventListener('click', () => {
  modalSignupMobile.style.display = 'none';
  hamburgerCloseBtn.style.display = 'none';
  hamburgerOpenBtn.style.display = 'block';
});

modalBtn.addEventListener('click', e => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const userMail = document.getElementById('usermail').value;
  const password = document.getElementById('password').value;
  if (username || userMail || password) {
    alert('log in!');

    modal.style.display = ' none';
    openModalBtn.style.display = 'none';
    stefanBtn.style.visibility = 'visible';
    stefanName.textContent = username;
  } else {
    alert('false');
  }
});

stefanBtn.addEventListener('click', e => {
  e.preventDefault();
  stefanBtn.style.visibility = 'hidden';
  // stefanBtn.style.marginRight = '500px';
  openModalBtn.style.display = 'block';
  window.location.reload(true);
});
