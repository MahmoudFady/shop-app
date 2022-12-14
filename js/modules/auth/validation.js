const syncEmailValidation = function () {
  const emailInputs = document.querySelectorAll("input[type='email']");
  const mailRegEx = new RegExp(
    /^([a-zA-Z]){1,20}[0-9]{0,5}@(gmail|yahoo)(\.com)$/
  );

  for (let i = 0; i < emailInputs.length; i++) {
    emailInputs[i].onkeyup = function () {
      const target = this.value;
      if (mailRegEx.test(target)) {
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
      } else {
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
      }
    };
  }
};
const syncTextValidation = function () {
  const textInputs = document.querySelectorAll(
    "form >div > input[type='text']"
  );
  const textRegEx = new RegExp(/^(([a-zA-Z]){5,10})$/);
  for (let i = 0; i < textInputs.length; i++) {
    textInputs[i].onkeyup = function () {
      const target = this.value;
      if (textRegEx.test(target)) {
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
      } else {
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
      }
    };
  }
};
const asyncPhoneNumValidation = function () {
  const telInputs = document.querySelectorAll("form div > input[type='tel']");
  const phoneRegEx = new RegExp(/^(01[0125])([0-9]{8})$/);
  for (let i = 0; i < telInputs.length; i++) {
    telInputs[i].onkeyup = function () {
      const target = this.value;
      if (phoneRegEx.test(target)) {
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
      } else {
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
      }
    };
  }
};
const asyncPasswordValidation = function () {
  const passwordInputs = document.querySelectorAll("input[type='password']");
  const passwordRegEx = new RegExp(/^(([a-zA-Z]|[0-9]){5,10})$/);
  for (let i = 0; i < passwordInputs.length; i++) {
    passwordInputs[i].onkeyup = function () {
      const target = this.value;
      if (passwordRegEx.test(target)) {
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        return true;
      } else {
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
        return false;
      }
    };
  }
};
const isValidEmail = (email) => {
  const mailRegEx = new RegExp(
    /^([a-zA-Z]){1,20}[0-9]{0,5}@(gmail|yahoo)(\.com)$/
  );
  return mailRegEx.test(email);
};
const isValidPassword = (password) => {
  const passwordRegEx = new RegExp(/^(([a-zA-Z]|[0-9]){5,10})$/);
  return passwordRegEx.test(password);
};
const isValidPhoneNum = (num) => {
  const phoneRegEx = new RegExp(/^(01[0125])([0-9]{8})$/);
  return phoneRegEx.test(num);
};
const isValidText = (text) => {
  const textRegEx = new RegExp(/^(([a-zA-Z]){5,10})$/);
  return textRegEx.test(text);
};
export {
  syncTextValidation,
  syncEmailValidation,
  asyncPhoneNumValidation,
  asyncPasswordValidation,
  isValidEmail,
  isValidPassword,
  isValidPhoneNum,
  isValidText,
};
