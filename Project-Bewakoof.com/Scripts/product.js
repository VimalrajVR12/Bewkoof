import header from "../Components/header.js"

let headerDiv = document.getElementById("header");
headerDiv.innerHTML = header();
let Arr = JSON.parse(localStorage.getItem("product"));


// SLIDER Function
let imageArr = Arr.images;

let image = document.getElementById("image1");
image.textContent = "";

let slideshow = document.createElement("div");
slideshow.setAttribute("id", "slideshow")

let swiper = document.createElement("div");
swiper.setAttribute("id", "swiper");

let swiperUp = document.createElement("div");
swiperUp.classList = "swiper-up";
swiperUp.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;

let swipperWrapper = document.createElement("div");
swipperWrapper.classList = "swipper-wrapper";

imageArr.map((ele) => {
    let imageClass = document.createElement("div");
    imageClass.classList = "swiper-slide";

    let image = document.createElement("img");
    image.src = ele;

    imageClass.append(image);
    swipperWrapper.append(imageClass);
})

let swiperDown = document.createElement("div");
swiperDown.classList = "swiper-down";
swiperDown.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;

swiper.append(swiperUp, swipperWrapper, swiperDown);
slideshow.append(swiper);

let mainImage = document.createElement("div");
mainImage.setAttribute("id", 'display_image')

let imageDisplay = document.createElement("img");
imageDisplay.src = Arr.image;
imageDisplay.setAttribute("id", "active_image")
imageDisplay.style.width = "400px";

mainImage.append(imageDisplay);
image.append(slideshow, mainImage)
// document.getElementById("product_display").append(image)

// Display Image Functionalities
let prev = document.querySelector(".fa-chevron-up")
let next = document.querySelector(".fa-chevron-down")
let activeImage = document.getElementsByClassName("swiper-slide");
let displayimage = document.getElementById("active_image")

let index = 0;
next.addEventListener("click", () => {
    if(index < imageArr.length-1){
        activeImage[index].classList.remove("active");
        index++;
        activeImage[index].classList.add("active");
    }
    else if(index === imageArr.length-1){
        activeImage[index].classList.remove("active");
        index = 0;
        activeImage[index].classList.add("active");
    }
    displayimage.src = imageArr[index];
})

prev.addEventListener("click", () => {
    if(index === 0){
        activeImage[index].classList.remove("active");
        index = imageArr.length-1;
        activeImage[index].classList.add("active")
    }
    else{
        activeImage[index].classList.remove("active");
        index--;
        activeImage[index].classList.add("active");
    }
    displayimage.src = imageArr[index]
})

// PRODUCT Details
let main = document.getElementById("details");
main.textContent = "";

let subMain = document.createElement("div");
subMain.setAttribute("id", "details_submain");

let div1 = document.createElement("div");
div1.setAttribute("id", "brand");

let brandName = document.createElement("h3");
brandName.textContent = Arr.brand;

div1.append(brandName);

let prodName = document.createElement("h2");
prodName.textContent = Arr.name;

let rating = document.createElement("div")
rating.setAttribute("id", "ratings");

let value = document.createElement("p");
value.innerHTML = `${Arr.ratings} <i class="fa-regular fa-star"></i>`;

rating.append(value);

let priceBox = document.createElement("div");
priceBox.setAttribute("id", "price_container");

let priceDiv = document.createElement("div");
priceDiv.setAttribute("id", "price_div");

let finalPrice = document.createElement("p");
finalPrice.textContent = "₹" + Arr.price;

let MRP = document.createElement("p");
MRP.textContent = "₹" + Arr.MRP;
MRP.style.textDecoration = "line-through";

let offer = document.createElement("h3");
let discount = ((Arr.MRP - Arr.price)/Arr.MRP)*100;
offer.textContent = `${Math.round(discount)}% OFF`;

priceDiv.append(finalPrice, MRP, offer);

let staticInfo = document.createElement("p");
staticInfo.textContent = `inclusive of all taxes`;

priceBox.append(priceDiv, staticInfo);

let tribeContainer = document.createElement("div");
tribeContainer.setAttribute("id", "tribe_container");

let tribeMsg = document.createElement("span");
tribeMsg.setAttribute("class", "tribe_msg");
tribeMsg.textContent = "TriBe members get an extra discount of " + "₹" + (Arr.price - Arr.discount) + " and FREE shipping.";

let tribeLearn = document.createElement("span");
tribeLearn.textContent = "Learn more";
tribeLearn.classList = "learn_more";

tribeContainer.append(tribeMsg, tribeLearn)

let size = document.createElement("div");
size.classList = "size_block";

let sizeDiv = document.createElement("div");
sizeDiv.classList = "size_div";

let sizeDiv1 = document.createElement("div");
sizeDiv1.classList = "size_wrapper";

let tag1 = document.createElement("p");
tag1.textContent = "SELECT SIZE"

let tag2 = document.createElement("p");
tag2.textContent = "Size Guide";
tag2.classList = "size_guide";
tag2.style.color = "#51cccc";

sizeDiv1.append(tag1, tag2);

let selectSize = document.createElement("div");
selectSize.classList = "select_size";

let selectSize1 = document.createElement("div");
selectSize1.classList = "size_buttons";

let size1 = Arr.size;
size1.map((ele) => {
    let btn = document.createElement("button");
    btn.classList = "size_button";
    btn.textContent = ele;
    selectSize1.append(btn);
})

let size2 = document.createElement("div");
size2.classList = "size_info";

selectSize.append(selectSize1, size2);
sizeDiv.append(sizeDiv1, selectSize);
size.append(sizeDiv);

let addBtns = document.createElement("div");
addBtns.classList = "add_buttons";

let cartBtnDiv = document.createElement("div");
cartBtnDiv.classList = "cart_button";



let wishBtnDiv = document.createElement("div");
wishBtnDiv.classList = "wish_button";



addBtns.append(cartBtnDiv, wishBtnDiv);

subMain.append(div1, prodName, rating, priceBox, tribeContainer, size, addBtns)
main.append(subMain);
console.log(main)