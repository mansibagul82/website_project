let form = document.getElementsByClassName("logpage")
let email = document.getElementsByClassName("email")
let password = document.getElementsByClassName("emailpass")

form.addEventListener("submit",function(event)
{
    event.preventDefault();
    let userDetails = {
        email: email.value,
        password: password.value
    }
    let savedetails = JSON.parse(localStorage.getItem("userDetails")) || {};
    if (
        userDetails.email === savedetails.email &&
        userDetails.password === savedetails.password
    ){
        localStorage.setItem("isAuthenticated","Authenticated")
        alert("Login Success !")
    }
    else{
        alert("Wrong credentials")
    }
   
})