const inputName = document.getElementById('name');
const textarea = document.getElementById('message');
// Adding listner for event handling
form.addEventListener('input', () => {
    localStorage.setItem('Name', `${inputName.value}`);
    localStorage.setItem('Email', `${email.value}`);
    localStorage.setItem('TextArea', `${textarea.value}`);
});
// get values from local storage
inputName.value = localStorage.getItem('Name');
email.value = localStorage.getItem('Email');
/*localStorage.setItem('Name', `${inputName.value}`);
localStorage.setItem('Email', `${email.value}`);
localStorage.setItem('TextArea', `${textarea.value}`);*/