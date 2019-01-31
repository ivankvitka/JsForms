(function() {
  let form = document.querySelector('.js-form');
  let formObj = {
    formName: form.querySelectorAll('.js-user-name'),
    formEmail: form.querySelectorAll('.js-email'),
    formPhone: form.querySelectorAll('.js-phone'),
    formAddress: form.querySelectorAll('.js-address'),
    formCity: form.querySelectorAll('.js-city'),
    formState: form.querySelectorAll('.js-state'),
    formZip: form.querySelectorAll('.js-zip'),
    formCountry: form.querySelectorAll('.js-country'),
    formNameOnCard: form.querySelectorAll('.js-name-on-card'),
    formCardNumber: form.querySelectorAll('.js-card-number'),
    formCVC: form.querySelectorAll('.js-cvc'),
    formExpiry: form.querySelectorAll('.js-expiry'),
  };
  createMsg();
  confirm();
  setDefaultValidation();

  form.addEventListener("submit",
    function(event) {
      event.preventDefault();
      validateName();
      validateEmail();
      validatePhoneNumber();
      validateAddress();
      validateCity();
      validateState();
      validateZip();
      validateCountry();
      validateNameOnCard();
      validateCardNumber();
      validateCVC();
      validateExpiry();
      confirm();
      if (checkFormValidation()) {
        let formValid = new Event('formIsValid');
        form.dispatchEvent(formValid);
      } else {
        let formInvalid = new Event('formIsInvalid');
        form.dispatchEvent(formInvalid);
      }
    }, false);

  formObj.formName[0].addEventListener('keyup', validateName);
  formObj.formEmail[0].addEventListener('keyup', validateEmail);
  formObj.formPhone[0].addEventListener('keyup', validatePhoneNumber);
  formObj.formAddress[0].addEventListener('keyup', validateAddress);
  formObj.formCity[0].addEventListener('keyup', validateCity);
  formObj.formState[0].addEventListener('keyup', validateState);
  formObj.formZip[0].addEventListener('keyup', validateZip);
  formObj.formCountry[0].addEventListener('keyup', validateCountry);
  formObj.formNameOnCard[0].addEventListener('keyup', validateNameOnCard);
  formObj.formCardNumber[0].addEventListener('keyup', validateCardNumber);
  formObj.formCVC[0].addEventListener('keyup', validateCVC);
  formObj.formExpiry[0].addEventListener('keyup', validateExpiry);

  function confirm() {
    confirmField(formObj.formName);
    confirmField(formObj.formEmail);
    confirmField(formObj.formPhone);
    confirmField(formObj.formAddress);
    confirmField(formObj.formCity);
    confirmField(formObj.formState);
    confirmField(formObj.formZip);
    confirmField(formObj.formCountry);
    confirmField(formObj.formNameOnCard);
    confirmField(formObj.formCardNumber);
    confirmField(formObj.formCVC);
    confirmField(formObj.formExpiry);
  }

  function confirmField(formInput) {
    if (formInput[1]) {
      formInput[1].addEventListener('keyup', function() {
        confirmInput(formInput);
      });
      formInput[0].addEventListener('keyup', function() {
        confirmInput(formInput);
      });
    }
  }

  function confirmInput(formInput) {
    let msg = formInput[1].parentElement.querySelector('.msg');
    if (formInput[0].value === formInput[1].value && formInput[0].value) {
      msg.innerText = 'Success';
      msg.style.color = '#00ff00';
      formInput[1].isValide = true;
    } else {
      msg.innerText = 'Fields are not the same';
      msg.style.color = '#ff0000';
      formInput[1].isValide = false;
    }
  }

  function validateName() {
    let regex = /^[A-ZА-Я][a-zа-я]{2,10}\s[A-ZА-Я][a-zа-я]{2,10}$/;
    validate(regex, formObj.formName, 'name');
  }

  function validateEmail() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    validate(regex, formObj.formEmail, 'email');
  }

  function validatePhoneNumber() {
    let regex = /^\+\d[\s-]?\d{4}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}[\s-]?$/;
    validate(regex, formObj.formPhone, 'phone number');
  }

  function validateAddress() {
    let regex = /^([A-ZА-Я][a-zа-я]{3,15}\s){1,3}[a-zа-я]{0,10}\.?[.,]?\s?\d{1,3}$/;
    validate(regex, formObj.formAddress, 'address');
  }

  function validateCity() {
    let regex = /^[A-ZА-Я][a-zа-я]{1,15}([\s-][A-ZА-Я][a-zа-я]{1,15}){0,2}$/;
    validate(regex, formObj.formCity, 'city');
  }

  function validateState() {
    let regex = /^[A-ZА-Я][a-zа-я]{1,15}([\s-][A-ZА-Я][a-zа-я]{1,15}){0,2}$/;
    validate(regex, formObj.formState, 'state');
  }

  function validateZip() {
    let regex = /^\d{5}$/;
    validate(regex, formObj.formZip, 'zip');
  }

  function validateCountry() {
    let regex = /^[A-ZА-Я][a-zа-я]{1,15}([\s-][A-ZА-Я][a-zа-я]{1,15}){0,2}$/;
    validate(regex, formObj.formCountry, 'country');
  }

  function validateNameOnCard() {
    let regex = /^[A-ZА-Я][a-zа-я]{2,10}\s[A-ZА-Я][a-zа-я]{2,10}$/;
    validate(regex, formObj.formNameOnCard, 'name');
  }

  function validateCardNumber() {
    let regex = /^\d{16}$/;
    validate(regex, formObj.formCardNumber, 'card number');
  }

  function validateCVC() {
    let regex = /^\d{3}$/;
    validate(regex, formObj.formCVC, 'CVC');
  }

  function validateExpiry() {
    let regex = /^\d{2}-\d{4}$/;
    validate(regex, formObj.formExpiry, 'expiry');
  }

  function validate(regex, formInput, message) {
    let msg = formInput[0].parentElement.querySelector('.msg');
    if (regex.test(formInput[0].value)) {
      msg.innerText = 'Success';
      msg.style.color = '#00ff00';
      formInput[0].isValide = true;
    } else if ((formInput[0].classList.contains('required'))
      || (!formInput[0].classList.contains('required') && formInput[0].value !== '')) {
      msg.innerText = `Enter valid ${message}`;
      msg.style.color = '#ff0000';
      formInput[0].isValide = false;
    } else {
      msg.innerText = '';
    }
  }

  function setDefaultValidation() {
    for (let key in formObj) {
      if (formObj[key][0]) {
        formObj[key][0].isValide = true;
      }
      if (formObj[key][1]) {
        formObj[key][1].isValide = true;
      }
    }
  }

  function checkFormValidation() {
    for (let key in formObj) {
      if ((formObj[key][0] && !formObj[key][0].isValide) ||
        (formObj[key][1] && !formObj[key][1].isValide)) {
        return false;
      }
    }
    return true;
  }

  function createMsg() {
    let fields = form.querySelectorAll('.field');
    for (let i = 0; i < fields.length; i++) {
      let msg = document.createElement('span');
      msg.classList.add('msg');
      fields[i].parentNode.appendChild(msg);
    }
  }
})();