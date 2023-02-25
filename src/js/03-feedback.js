import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

function saveFormElsToLocalStorage() {
  const formEls = { email: emailInput.value, message: messageInput.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formEls));
}

form.addEventListener('input', saveFormElsToLocalStorage);

function parsedformState() {
    const formStateString = localStorage.getItem('feedback-form-state');
    if (formStateString) {
    const { email, message } = JSON.parse(formStateString);
    emailInput.value = email;
    messageInput.value = message;
    console.log({ email, message });
  }
} 

document.addEventListener('DOMContentLoaded', parsedformState);

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


