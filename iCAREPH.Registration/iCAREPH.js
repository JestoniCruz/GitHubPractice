


function validateIfHasSpecialCharacter(text){
    // check if text has special character
    
    var pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/;

    if(pattern.test(text)){
        return true;
    }
    return false;
} 


function validateEmail(email){
  // code email validation
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(pattern.test(email)){
        return true;
    }
    return false;
}

function validatePassword(){
    var pattern = ;

    if(){
        
    }
    return false;
}

function validate(){
var lastname = document.getElementById("lastname")
var firstname = document.getElementById("firstname")
var middlename = document.getElementById("middlename")

var email = document.getElementById("email")

// var middlename = document.form.middlename;
// var adminnumber = document.form.adminnumber;
// var contactnumber = document.form.contactnumber;
// var email = document.form.email;
// var password = document.form.password;
// var confirmpassword = document.form.confirmpassword;

    //lastname
    if(validateIfHasSpecialCharacter(lastname.value)){
        lastname.classList.add("is-invalid");
        document.getElementById("lname-validation").innerText = "Invalid Lastname";
    }
    else if(lastname.value){
        lastname.classList.remove("is-invalid");
        lastname.classList.add("is-valid");
        document.getElementById("lname-validation").innerText = "";
    }
    else{
        lastname.classList.remove("is-valid");
        lastname.classList.add("is-invalid");
        document.getElementById("lname-validation").innerText = "Lastname is required";
    }

    // firstname
    if(validateIfHasSpecialCharacter(firstname.value)){
        firstname.classList.add("is-invalid");
        document.getElementById("fname-validation").innerText = "Invalid Firstname";
    }
    else if(firstname.value){
        firstname.classList.remove("is-invalid");
        firstname.classList.add("is-valid");
        document.getElementById("fname-validation").innerText = "";
    }
    else{
        firstname.classList.remove("is-valid");
        firstname.classList.add("is-invalid");
        document.getElementById("fname-validation").innerText = "Firstname is required";
    }

    //middlename
    if(validateIfHasSpecialCharacter(middlename.value)){
        middlename.classList.add("is-invalid");
        document.getElementById("mname-validation").innerText = "Invalid Middlename";
    }
    else if(middlename.value){
        middlename.classList.remove("is-invalid");
        middlename.classList.add("is-valid");
        document.getElementById("mname-validation").innerText = "";
    }
    else{
        middlename.classList.remove("is-valid");
        middlename.classList.add("is-invalid");
        document.getElementById("mname-validation").innerText = "Middlename is required";
    }

    // email
    if(validateEmail(email.value)){
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        document.getElementById("email-validation").innerText = "";
    }

    else if(email.value){
        email.classList.add("is-invalid");
        document.getElementById("email-validation").innerText = "Invalid email format";
    }
    else{
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        document.getElementById("email-validation").innerText = "Email is required";
    }



    // // adminnumber
    // if(adminnumber.value){
    //     adminnumber.classList.remove("is-invalid");
    //     adminnumber.classList.add("is-valid");
    //     document.getElementById("anumber-validation").innerText = "";
    // }
    // else{
    //     adminnumber.classList.remove("is-valid");
    //     adminnumber.classList.add("is-invalid");
    //     document.getElementById("anumber-validation").innerText = "Required";
    // }
    // // contactnumber
    // if(contactnumber.value){
    //     contactnumber.classList.remove("is-invalid");
    //     contactnumber.classList.add("is-valid");
    //     document.getElementById("cnumber-validation").innerText = "";
    // }
    // else{
    //     contactnumber.classList.remove("is-valid");
    //     contactnumber.classList.add("is-invalid");
    //     document.getElementById("cnumber-validation").innerText = "Required";
    // }
    // //email
    // if(email.value){
    //     email.classList.remove("is-invalid");
    //     email.classList.add("is-valid");
    //     document.getElementById("email-validation").innerText = "";
    // }
    // else{
    //     email.classList.remove("is-valid");
    //     email.classList.add("is-invalid");
    //     document.getElementById("email-validation").innerText = "Required";
    // }
    // //password
    // if(password.value){
    //     password.classList.remove("is-invalid");
    //     password.classList.add("is-valid");
    //     document.getElementById("password-validation").innerText = "";
    // }
    // else{
    //     password.classList.remove("is-valid");
    //     password.classList.add("is-invalid");
    //     document.getElementById("password-validation").innerText = "Required";
    // }

    // //confirmpassword

    // if(confirmpassword.value){
    //     confirmpassword.classList.remove("is-invalid");
    //     confirmpassword.classList.add("is-valid");
    //     document.getElementById("cpassword-validation").innerText = "";
    // }
    // else{
    //     confirmpassword.classList.remove("is-valid");
    //     confirmpassword.classList.add("is-invalid");
    //     document.getElementById("cpassword-validation").innerText = "Required";
    // }
}

function hello(){
    console.log()
}