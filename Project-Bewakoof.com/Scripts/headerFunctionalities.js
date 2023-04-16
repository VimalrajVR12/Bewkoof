import menCategories from "../Components/menCategories.js";
import womenCategories from "../Components/womenCategories.js";
import mobileCovers from "../Components/mobileCovers.js";
import countrySelect from "../Components/country.js";

// Categories Function
let men = document.getElementById("men")
let women = document.getElementById("women")
let mobile = document.getElementById("mobile_covers")
let temp = document.getElementById("temp");
let windowOpenTab = false;

men.addEventListener("mouseover", () => { openTab(menCategories()) })
women.addEventListener("mouseover", () => { openTab(womenCategories()) });
mobile.addEventListener("mouseover", () => { openTab(mobileCovers()) });
temp.addEventListener("mouseover", () => { windowOpenTab = true });

men.addEventListener("mouseleave", timeOut);
women.addEventListener("mouseleave", timeOut);
mobile.addEventListener("mouseleave", timeOut);
temp.addEventListener("mouseleave", () => { windowOpenTab = false; closeTab(); });

function openTab(data){
    if(temp.className.includes("hide"))
        temp.classList.remove("hide")
    temp.innerHTML = "";
    temp.innerHTML = data;
    windowOpenTab = true;
}

function closeTab(){
    if(!windowOpenTab)
        temp.classList.add("hide");
}

function timeOut(){
    windowOpenTab = false;
    setTimeout(closeTab, 200);
}

// Selecting Country Function
let country = document.getElementById("select_country");
let hide = document.getElementById("country")

country.addEventListener("mouseover", () => { 
    hide.classList.toggle("hide");
    hide.innerHTML = countrySelect();
});

// Login User DropDown Details
let user = document.querySelector(".fa-user")
let userBox = document.getElementById("users")
let openPopup = false;

user.addEventListener("mouseover", displayPopup);
userBox.addEventListener("mouseover", displayPopup)

user.addEventListener("mouseleave", timeOutPopup);
userBox.addEventListener("mouseleave", () => { openPopup = false; closePopup(); })

function displayPopup(){
    openPopup = true;
    userBox.classList.remove("hide")
    clearTimeout();
}

function closePopup(){
    if(!openPopup)
        userBox.classList.add("hide");
}

function timeOutPopup(){
    openPopup = false;
    setTimeout(closePopup, 200);
}

// Search Bar
document.getElementById("search_input").addEventListener("input", () => { debounce(searchData, 1000) });

let timerId;
function debounce(func, delay){
    if(timerId)
        clearTimeout(timerId)

    timerId = setTimeout(() => {
        func();
    }, delay)
}


async function searchData(){

    let input = document.getElementById("search_input").value;
    let data = await fetch(`http://localhost:3000/menShirts?q=${input}&_page=1&_limit=5`);
    data = await data.json();
    console.log(data);
    let temp = document.getElementById("search_result");
    temp.classList.remove("hide")
    temp.textContent = "";

    data.map((ele) => {
        let name = document.createElement("p");
        name.textContent = ele.name;

        temp.append(name);
    })

}