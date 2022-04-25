function checkPass() {
    const password = document.getElementById('user-password');
    const confirmPass = document.getElementById('confirm-pass');
    password.addEventListener('focusout', () => {
        if (password.value == confirmPass.value) {
            password.style.border = '1px solid green';
            confirmPass.style.border = '1px solid green';
        } else {
            password.style.border = '1px solid red';
            confirmPass.style.border = '1px solid red';
        }
    });
    confirmPass.addEventListener('focusout', () => {
        if (password.value == confirmPass.value) {
            password.style.border = '1px solid green';
            confirmPass.style.border = '1px solid green';
        } else {
            password.style.border = '1px solid red';
            confirmPass.style.border = '1px solid red';
        }
    });
}

checkPass();