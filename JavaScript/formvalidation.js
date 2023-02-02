const form = document.forms[0];
const email = form.elements[1];
const submit = document.querySelector('button[type=submit]');
const messag = document.querySelector('form > span');
submit.addEventListener('click', (event) => {
  const { value } = email;
  const loweredValue = value.toLowerCase();
  if (value !== loweredValue) {
    event.preventDefault();
    messag.style.color = '#d8000c';
    messag.innerHTML = 'Please write your email in Lowercase letters.';
  }
});
