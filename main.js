function checkPass() {
    const password = document.getElementById('user-password');
    const confirmPass = document.getElementById('confirm-pass');
    if (password.value != confirmPass.value) {
        confirmPass.setCustomValidity('Passwords do not match');
    } else {
        confirmPass.setCustomValidity('');
    }
}

checkPass();