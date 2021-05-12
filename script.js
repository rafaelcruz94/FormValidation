'use strict';

const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const showHidePassword = document.getElementById('toggle');
const showHidePassword2 = document.getElementById('toggle2');
const formInputs = [...document.querySelectorAll('.form-control input')];
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    const phoneValue = phone.value.trim();
	const dateValue = date.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else if (!isUsername(usernameValue)) {
		setErrorFor(username, 'Username must be alphanumeric and contain 5 - 12 characters');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email must be a valid address, e.g. me@mydomain.com');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if (!isPassword(passwordValue)) {
		setErrorFor(password, 'Min 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 symbol');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}

    if(phoneValue === '') {
		setErrorFor(phone, 'Phone Number cannot be blank');
	} else if (!isPhone(phoneValue)) {
		setErrorFor(phone, 'Not a valid phone number');
	} else {
		setSuccessFor(phone);
	}
	
	if(dateValue === '') {
		setErrorFor(date, 'Date of Birth cannot be blank');
	} else {
		setSuccessFor(date);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
  	formControl.classList.remove = 'form-control error';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
	return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im.test(phone);
}

function isUsername(username) {
	return /^[a-z\d]{5,12}$/i.test(username);
}

function isPassword(password) {
	return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(password);
}

//floating effect
formInputs.forEach((formInput) => {
  formInput.addEventListener('focusin', formInputFocusInHandler);
  formInput.addEventListener('focusout', formInputFocusOutHandler);
});

function formInputFocusInHandler() {
  const label = this.parentElement.querySelector('label');
  label.classList.add('active');
}

function formInputFocusOutHandler() {
  if (this.value === '') {
    const label = this.parentElement.querySelector('label');
    label.classList.remove('active');
  }
}

// Show/hide Password
function showHide() {
  if (password.type === 'password') {
      password.setAttribute('type', 'text');
      showHidePassword.classList.add('hide');
  } else {
      password.setAttribute('type', 'password');
      showHidePassword.classList.remove('hide');
  };
};

function showHideTwo() {
  if (password2.type === 'password') {
    password2.setAttribute('type', 'text');
      showHidePassword2.classList.add('hide');
  } else {
    password2.setAttribute('type', 'password');
      showHidePassword2.classList.remove('hide');
  };
};

showHidePassword.addEventListener('click', showHide);
showHidePassword2.addEventListener('click', showHideTwo);


  