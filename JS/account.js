//Sign in
//Getting text inputs
var userSignin = document.forms['v-form']['signin-username'];
var userPassword = document.forms['v-form']['signin-password'];

//Error display objects
var nameError = document.getElementById('nameError');
var passwordError = document.getElementById('passwordError');

//Event listeners
userSignin.addEventListener("blur",userSigninVerify,true);
userPassword.addEventListener("blur",userPasswordVerify,true);

//Function Validation
function Signin(){
    //username
    if(userSignin.value === '' || !eValidation.test(email.value)){
        userSignin.style.border= '3px solid #ef2020';
        document.getElementById('username').style.color ='black';
        nameError.textContent = "User name is not correct";
        userSignin.focus();
        return false;

    }
    if(userPassword.value ==='' || userPassword.value.length < 8){
        userPassword.style.border= '3px solid #ef2020';
        document.getElementById('password').style.color ='#ef2020';
        passwordError.textContent = "Password is not correct";
        userPassword.focus();
        return false; 
    }
}

    //Event handler function
    function userSigninVerify(){
        if(userSignin !=''){
            userSignin.style.border = "3px solid #2db300"
            nameError.innerHTML="";
            return true; 
        }
    }
    
    function userPasswordVerify(){
        if(userPassword.value != ''){
            userPassword.style.border = "3px solid #2db300";
            document.getElementById('password').style.color = "#777171";
            passwordError.innerHTML = "";
            return true; 
        }
        if(userPassword.value.length >= 8){
            userPassword.style.border = "3px solid #5e6e";
  	        document.getElementById('password').style.color = "#777171";
  	        passwordError.innerHTML = "";
  	        return true;

        }
    }
    




//Registeration

var username = document.forms["vform"]["username"];
var email = document.forms["vform"]["email"];
var age = document.forms["vform"]["age"];
var password = document.forms["vform"]["password"];
var password_confirmation = document.forms["vform"]["password_confirmation"];
var eValidation =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//Error display objects

var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var age_error = document.getElementById("age_error");
var password_error = document.getElementById("password_error");

//Event listeners
/*submit.addEventListener ('click',(e) =>{
    e.preventDefault();
});*/

username.addEventListener("blur", usernameVerify,true);

email.addEventListener("blur", emailVerify,true);

age.addEventListener("blur", ageVerify,true);

password.addEventListener("blur", passwordVerify,true);

//Validation function

function Validate(){
    //username
    if(username.value ==''){
        username.style.border = "3px solid red";
        document.getElementById('username_div').style.color='black';
        name_error.textContent = "Username is required";
        username.focus();
        return false;
    }
    //email
    if(email.value ==='' ||!eValidation.test(email.value)){
        email.style.border = "3px solid red";
        document.getElementById('email_div').style.color='black';
        email_error.textContent = " Valid email is required";
        email.focus();
        return false;
    }
     /*if (email.value.method(eValidation)){
        email.style.border = "3px solid red";
        document.getElementById('email_div').style.color='red';
        email.error.textContext = " Email is invalid"
        email.focus();
        return false;
    } */

    //age
    if(age.value ===''){
        age.style.border = "3px solid red";
        document.getElementById('age_div').style.color='black';
        age_error.textContent = "Age can not be blank";
        age.focus();
        return false;
    }

    //password
    if(password.value ==='' ||password.value != password_confirmation.value ){
        password.style.border = "3px solid red";
        document.getElementById('password_div').style.color='black';
        password_error.textContent = "password does not match";
        password.focus();
        return false;
    }
    
    /*if(password.value != password_confirmation.value){
        password.style.border ='3px solid red';
        document.getElementById('password_div').style.color='black';
        password_confirmation.style.border = '2px solid red';
        password_error.textContent='Password does not match';
        return false;
    }*/
      if  (password.value.length < 8){
        password.style.border ='3px solid red';
        document.getElementById('password_div').style.color='black';
        password_confirmation.style.border = '2px solid red';
        password_error.textContent='Password must contain at least 8';
        password.focus();
        return false;
    }

    
}

//Event handler function
function usernameVerify(){
    if (username =""){
        username.style.border = "3px solid #2db300"
        name_error.innerHTML="";
        return true;
    }
    
}

function emailVerify(value){
     if (eValidation.test(email.value)){
        email.style.border = "3px solid #2db300"
        email_error.innerHTML="";
        return true;
    }
    
}

function ageVerify(){
    if (age !=""){
        age.style.border = "3px solid #2db300"
        age_error.innerHTML="";
        return true;
    }
    
    
}

function passwordVerify(){
    if (password !="" || password.value.lenght >= 8){
        password.style.border = "3px solid #2db300"
        password_error.innerHTML="";
        return true;
    }
    
    
}
function passwordVerify() {
  if (password.value != "") {
  	password.style.border = "3px solid #2db300";
  	document.getElementById('pass_confirm_div').style.color = "#ffff4d";
  	document.getElementById('password_div').style.color = "#ffff4d";
  	password_error.innerHTML = "";
  	return true;
  }
  if (password.value === password_confirmation.value) {
  	password.style.border = "3px solid #5e6e";
  	document.getElementById('pass_confirm_div').style.color = "#ffff4d";
  	password_error.innerHTML = "";
  	return true;
  }
  if (password.value.lenght >= 8){
    password.style.border = "3px solid #5e6e";
  	document.getElementById('password_div').style.color = "#ffff4d";
  	password_error.innerHTML = "";
  	return true;

  }
}



