import menCategories from "./menCategories.js";
import womenCategories from "./womenCategories.js";
import mobileCovers from "./mobileCovers.js";
import countrySelect from "./country.js";

function headerCategories(){
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
        clearTimeout();
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
}

function selectCountry(){
    let country = document.getElementById("select_country");
    let hide = document.getElementById("country")

    country.addEventListener("mouseover", () => { 
        hide.classList.toggle("hide");
        hide.innerHTML = countrySelect();
    });
}

function userLogin(){
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
}

export default { headerCategories, selectCountry, userLogin }