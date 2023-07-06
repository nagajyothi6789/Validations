const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const mobile = document.getElementById("mobile");

//show error function
function showError(input, message){
    const formControl = input .parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innertext = message;
}
//Show success
function showSuccess(input) {
    formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//re exp email
function  isValidEmail(email) {
    const re = /^[a-z0-9._@]{1,16}[a-z]{1,5}.com$/;
    return re.test(email);
}
//reexp phone
    function  isValidMobile(mobile) {
        const rex = /^[0-9]{10}$/;
        return rex.test(mobile);
}
//rexp username
function  isValidUsername(username) {
    const rex1 =/^[A-Za-z0-9]{6,15}$/;
    return rex1.test(username);
}
//rexp password
function  isValidPassword(password) {
    const rex2 =/^[A-Za-z0-9]{6,15}$/;
    return rex2.test(password);
}

//Event listeners
form.addEventListener('keyup', function (e) {
    e.preventDefault();

//USERNAME
    if(username.value === '') {
        showError(username);
    } else if(!isValidUsername(username.value)){
        showError(username);
    }
    else {
        showSuccess(username);
    }

   //EMAIL
 if(email.value === '') {
        showError(email);
    } else if(!isValidEmail(email.value)){
        showError(email);
    }
        else {
        showSuccess(email);
    }
//PASSWORD
    if(password.value === '') {
        showError(password);
    }  else if(!isValidPassword(password.value)){
        showError(password);
    }
    else {
        showSuccess(password);
    }

//PHONE NUMBER

    if(mobile.value === '') {
        showError(mobile);
    } else if(!isValidMobile(mobile.value)){
        showError(mobile);
    }
     else {
        showSuccess(mobile);
    }
});
