import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

function saveFormEls() {
  const formEls = { email: emailInput.value, message: messageInput.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formEls));
}

form.addEventListener('input', saveFormEls);

function parsedformEls() {
    const formElsString = localStorage.getItem('feedback-form-state');
    if (formElsString) {
    const { email, message } = JSON.parse(formElsString);
    emailInput.value = email;
    messageInput.value = message;
    console.log({ email, message });
  }
} 

document.addEventListener('DOMContentLoaded', parsedformEls);

function onSubmit(e) {
  e.preventDefault();
  localStorage.clear();
  emailInput.value = '';
  messageInput.value = '';
  const email = emailInput.value;
  const message = messageInput.value;
  console.log({ email, message });

}

const throttledonSubmit = throttle(onSubmit, 500);

form.addEventListener('submit', throttledonSubmit);


