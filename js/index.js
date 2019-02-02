class User {
  constructor(userData) {
    this._name = userData.name;
    this._email = userData.email;
    this._phone = userData.phone;
    this._address = userData.address;
    this._city = userData.city;
    this._state = userData.state;
    this._zip = userData.zip;
    this._country = userData.country;
    this._nameOnCard = userData.nameOnCard;
    this._cardNumber = userData.cardNumber;
    this._cvc = userData.cvc;
    this._expiry = userData.expiry;
  }
}

let form = document.querySelector('.js-form');
let formName = form.querySelector('.js-user-name');
let formEmail = form.querySelector('.js-email');
let formPhone = form.querySelector('.js-phone');
let formAddress = form.querySelector('.js-address');
let formCity = form.querySelector('.js-city');
let formState = form.querySelector('.js-state');
let formZip = form.querySelector('.js-zip');
let formCountry = form.querySelector('.js-country');
let formNameOnCard = form.querySelector('.js-name-on-card');
let formCardNumber = form.querySelector('.js-card-number');
let formCVC = form.querySelector('.js-cvc');
let formExpiry = form.querySelector('.js-expiry');


form.addEventListener('formIsValid', function() {
  saveUser();
});

form.addEventListener('formIsInvalid', function() {
});

function saveUser() {
  let user = new User({
    name: formName.value,
    email: formEmail.value,
    phone: formPhone.value,
    address: formAddress.value,
    city: formCity.value,
    state: formState.value,
    zip: formZip.value,
    country: formCountry.value,
    cardNumber: formCardNumber.value,
    nameOnCard: formNameOnCard.value,
    cvc: formCVC.value,
    expiry: formExpiry.value}
  );
  console.log(user);
}