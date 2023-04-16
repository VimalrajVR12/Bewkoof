import header from "../Components/header.js"

let head = document.getElementById("header");
head.innerHTML = header();


// ----------login script is here--------

document.querySelector("form").addEventListener("submit", userSign);
let userArr = JSON.parse(localStorage.getItem("userData")) || []

// let userLoginArr = JSON.parse(localStorage.getItem("userLoginData"))  || []
function userSign(event) {
    event.preventDefault();
    let userName = document.querySelector("#nam").value;
    let userEmail = document.querySelector("#email").value;
    let userPassword = document.querySelector("#password").value;
    let usermoblie = document.querySelector("#mbl").value

    console.log("invoking")
    if (userName == "" && usermoblie == "" && userEmail == "" && userPassword == "") {
        alert("Please Sign Up first")
    } else {
        let userObj = {
            userName: userName,
            usermoblie: usermoblie,
            userEmail: userEmail,
            userPassword: userPassword
        }
        userArr.push(userObj);
        localStorage.setItem("userData", JSON.stringify(userArr));
        alert("you are Signup seccessfully");
        window.location.href = "otp.html"
    }
}