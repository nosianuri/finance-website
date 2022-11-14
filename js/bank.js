document.getElementById('login-submit').addEventListener('click', function () {
    // const nameField = document.getElementById('user-name');
    // const userName = nameField.value;
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
   
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
// check email & password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'home.html'
    }
})