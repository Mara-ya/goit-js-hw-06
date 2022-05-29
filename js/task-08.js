const form = document.querySelector('.login-form');
const user = {};

form.addEventListener('submit', event => {
    event.preventDefault();

    const valueEmail = event.currentTarget.elements.email.value;
    const valuePassword = event.currentTarget.elements.password.value;
    
    if (valueEmail === '' || valuePassword === ''){
        alert('Все поля должны быть заполнены');
    } else {
        user.email = valueEmail;
        user.password = valuePassword;
        console.log(user);
        form.reset();
    }
})