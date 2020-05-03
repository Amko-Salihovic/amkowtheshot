const form = document.getElementById('form'); 
const username = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const msg = document.getElementById('message'); 

// functions
function showError (input, message){
    const formControl = input.parentElement; 
    formControl.className = 'form-control error'; 
    const small = formControl.querySelector('small');
    small.innerText = message; 
}

function showSuccess (input){
    const formControl = input.parentElement; 
    formControl.className = 'form-control success';
}


//check required fields
function checkRequired (inputArray) {
    inputArray.forEach(function(input) {
        if (input.value.trim() === ''){
            showError (input, ` ${getFieldName(input)} is required`); 
        } else {
            showSuccess (input);
        }
    }); 
}

// check email validity
function checkEmail (input){
    const correctForm = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (correctForm.test(input.value.trim())) {
        showSuccess (input);
    } else {
        showError (input, 'E-mail is not valid.')
    }
}

//check input length
function checkLength (input, min, max){
    if (input.value.length < min){
        showError (input, `${getFieldName(input)} must be at least ${min} characters`); 
    } else if (input.value.length > max){
        showError (input, `${getFieldName(input)} must be less than ${max} characters`); 
    } else {
        showSuccess (input); 
    }
}

// function to return the field name of the element
function getFieldName (input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1); 
}

// event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault(); //prevents the form from submitting by default

    checkRequired ([username, email, subject, msg]); 
    checkLength (username, 3, 15); 
    checkLength (msg, 15, 200);
    checkEmail (email); 
}); 
