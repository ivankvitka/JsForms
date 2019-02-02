(function() {
  let forms = document.querySelectorAll('.js-form');
  let formsArr = [];

  for (let i = 0; i < forms.length; i++) {
    formsArr.push({
      formName: forms[i].querySelectorAll('.js-user-name'),
      formEmail: forms[i].querySelectorAll('.js-email'),
      formPhone: forms[i].querySelectorAll('.js-phone'),
      formAddress: forms[i].querySelectorAll('.js-address'),
      formCity: forms[i].querySelectorAll('.js-city'),
      formState: forms[i].querySelectorAll('.js-state'),
      formZip: forms[i].querySelectorAll('.js-zip'),
      formCountry: forms[i].querySelectorAll('.js-country'),
      formNameOnCard: forms[i].querySelectorAll('.js-name-on-card'),
      formCardNumber: forms[i].querySelectorAll('.js-card-number'),
      formCVC: forms[i].querySelectorAll('.js-cvc'),
      formExpiry: forms[i].querySelectorAll('.js-expiry'),
    });
    createMsg(forms[i]);
    forms[i].addEventListener("submit",
      function(event) {
        event.preventDefault();
        validateName(formsArr[i]);
        validateEmail(formsArr[i]);
        validatePhoneNumber(formsArr[i]);
        validateAddress(formsArr[i]);
        validateCity(formsArr[i]);
        validateState(formsArr[i]);
        validateZip(formsArr[i]);
        validateCountry(formsArr[i]);
        validateNameOnCard(formsArr[i]);
        validateCardNumber(formsArr[i]);
        validateCVC(formsArr[i]);
        validateExpiry(formsArr[i]);
        if (checkFormValidation(formsArr[i])) {
          let formValid = new Event('formIsValid');
          forms[i].dispatchEvent(formValid);
        } else {
          let formInvalid = new Event('formIsInvalid');
          forms[i].dispatchEvent(formInvalid);
        }
      }, false);

    setDefaultValidation(formsArr[i]);
    confirm(formsArr[i]);
    if (formsArr[i].formName[0]) {
      formsArr[i].formName[0].addEventListener('keyup', () => validateName(formsArr[i]));
    }
    if (formsArr[i].formEmail[0]) {
      formsArr[i].formEmail[0].addEventListener('keyup', () => validateEmail(formsArr[i]));
    }
    if (formsArr[i].formPhone[0]) {
      formsArr[i].formPhone[0].addEventListener('keyup', () => validatePhoneNumber(formsArr[i]));
    }
    if (formsArr[i].formAddress[0]) {
      formsArr[i].formAddress[0].addEventListener('keyup', () => validateAddress(formsArr[i]));
    }
    if (formsArr[i].formCity[0]) {
      formsArr[i].formCity[0].addEventListener('keyup', () => validateCity(formsArr[i]));
    }
    if (formsArr[i].formState[0]) {
      formsArr[i].formState[0].addEventListener('keyup', () => validateState(formsArr[i]));
    }
    if (formsArr[i].formZip[0]) {
      formsArr[i].formZip[0].addEventListener('keyup', () => validateZip(formsArr[i]));
    }
    if (formsArr[i].formCountry[0]) {
      formsArr[i].formCountry[0].addEventListener('keyup', () => validateCountry(formsArr[i]));
    }
    if (formsArr[i].formNameOnCard[0]) {
      formsArr[i].formNameOnCard[0].addEventListener('keyup', () => validateNameOnCard(formsArr[i]));
    }
    if (formsArr[i].formCardNumber[0]) {
      formsArr[i].formCardNumber[0].addEventListener('keyup', () => validateCardNumber(formsArr[i]));
    }
    if (formsArr[i].formCVC[0]) {
      formsArr[i].formCVC[0].addEventListener('keyup', () => validateCVC(formsArr[i]));
    }
    if (formsArr[i].formExpiry[0]) {
      formsArr[i].formExpiry[0].addEventListener('keyup', () => validateExpiry(formsArr[i]));
    }
  }

  function confirm(form) {
    confirmField(form.formName);
    confirmField(form.formEmail);
    confirmField(form.formPhone);
    confirmField(form.formAddress);
    confirmField(form.formCity);
    confirmField(form.formState);
    confirmField(form.formZip);
    confirmField(form.formCountry);
    confirmField(form.formNameOnCard);
    confirmField(form.formCardNumber);
    confirmField(form.formCVC);
    confirmField(form.formExpiry);
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

  function validateName(formObj) {
    let regex = /^[A-ZА-Я][a-zа-я]{2,10}\s[A-ZА-Я][a-zа-я]{2,10}$/;
    validate(regex, 'formName', 'name', formObj);
  }

  function validateEmail(formObj) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    validate(regex, 'formEmail', 'email', formObj);
  }

  function validatePhoneNumber(formObj) {
    let regex = /^\+\d[\s-]?\d{4}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}[\s-]?$/;
    validate(regex, 'formPhone', 'phone number', formObj);
  }

  function validateAddress(formObj) {
    let regex = /^([A-ZА-Я][a-zа-я]{3,15}\s){1,3}[a-zа-я]{0,10}\.?[.,]?\s?\d{1,3}$/;
    validate(regex, 'formAddress', 'address', formObj);
  }

  function validateCity(formObj) {
    let regex = /^[A-ZА-Я][a-zа-я]{1,15}([\s-][A-ZА-Я][a-zа-я]{1,15}){0,2}$/;
    validate(regex, 'formCity', 'city', formObj);
  }

  function validateState(formObj) {
    let regex = /^[A-ZА-Я][a-zа-я]{1,15}([\s-][A-ZА-Я][a-zа-я]{1,15}){0,2}$/;
    validate(regex, 'formState', 'state', formObj);
  }

  function validateZip(formObj) {
    let regex = /^\d{5}$/;
    validate(regex, 'formZip', 'zip', formObj);
  }

  function validateCountry(formObj) {
    let regex = /^[A-ZА-Я][a-zа-я]{1,15}([\s-][A-ZА-Я][a-zа-я]{1,15}){0,2}$/;
    validate(regex, 'formCountry', 'country', formObj);
  }

  function validateNameOnCard(formObj) {
    let regex = /^[A-ZА-Я][a-zа-я]{2,10}\s[A-ZА-Я][a-zа-я]{2,10}$/;
    validate(regex, 'formNameOnCard', 'name', formObj);
  }

  function validateCardNumber(formObj) {
    let regex = /^\d{16}$/;
    validate(regex, 'formCardNumber', 'card number', formObj);
  }

  function validateCVC(formObj) {
    let regex = /^\d{3}$/;
    validate(regex, 'formCVC', 'CVC', formObj);
  }

  function validateExpiry(formObj) {
    let regex = /^\d{2}-\d{4}$/;
    validate(regex, 'formExpiry', 'expiry', formObj);
  }

  function validate(regex, formInput, message, formObj) {
    if (formObj[formInput][0]) {
      let msg = formObj[formInput][0].parentElement.querySelector('.msg');
      if (regex.test(formObj[formInput][0].value)) {
        msg.innerText = 'Success';
        msg.style.color = '#00ff00';
        formObj[formInput][0].isValide = true;
      } else if ((formObj[formInput][0].classList.contains('required'))
        || (!formObj[formInput][0].classList.contains('required') && formObj[formInput][0].value !== '')) {
        msg.innerText = `Enter valid ${message}`;
        msg.style.color = '#ff0000';
        formObj[formInput][0].isValide = false;
      } else {
        msg.innerText = '';
      }
    }
  }

  function setDefaultValidation(form) {
    for (let key in form) {
      if (form[key][0]) {
        form[key][0].isValide = true;
      }
      if (form[key][1]) {
        form[key][1].isValide = true;
      }
    }
  }

  function checkFormValidation(form) {
    for (let key in form) {
      if ((form[key][0] && !form[key][0].isValide) ||
        (form[key][1] && !form[key][1].isValide)) {
        return false;
      }
    }
    return true;
  }

  function createMsg(form) {
    let fields = form.querySelectorAll('.field');
    for (let i = 0; i < fields.length; i++) {
      let msg = document.createElement('span');
      msg.classList.add('msg');
      fields[i].parentNode.appendChild(msg);
    }
  }
})();