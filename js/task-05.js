const value = document.querySelector('input#name-input');
const name = document.querySelector('span#name-output');

value.addEventListener('input', (event) => {
    name.textContent = event.currentTarget.value.trim() === '' ? 'Anonymous' : event.currentTarget.value; 
});