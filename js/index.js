class User {
  constructor(name,
              email,
              phone,
              address,
              city,
              state,
              zip,
              country,
              nameOnCard,
              cardNumber,
              cvc,
              expiry) {
    this._name = name;
    this._email = email;
    this._phone = phone;
    this._address = address;
    this._city = city;
    this._state = state;
    this._zip = zip;
    this._country = country;
    this._nameOnCard = nameOnCard;
    this._cardNumber = cardNumber;
    this._cvc = cvc;
    this._expiry = expiry;
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
  let user = new User(
    formName.value,
    formEmail.value,
    formPhone.value,
    formAddress.value,
    formCity.value,
    formState.value,
    formZip.value,
    formCountry.value,
    formCardNumber.value,
    formNameOnCard.value,
    formCVC.value,
    formExpiry.value
  );
  console.log(user);
}