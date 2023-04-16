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
if(Arr.ratings !== undefined)
    value.innerHTML = `${Arr.ratings} <i class="fa-regular fa-star"></i>`;

rating.append(value);

let priceBox = document.createElement("div");
priceBox.setAttribute("id", "price_container");

let priceDiv = document.createElement("div");
priceDiv.setAttribute("id", "price_div");

let finalPrice = document.createElement("p");
finalPrice.textContent = "₹" + Arr.price;
finalPrice.style.fontSize = "x-large"

let MRP = document.createElement("p");
MRP.textContent = "₹" + Arr.MRP;
MRP.style.textIndent = "10px"
MRP.style.textDecoration = "line-through";
MRP.style.color = "#757575"
MRP.style.fontWeight = "900"

let offer = document.createElement("h3");
let discount = ((Arr.MRP - Arr.price)/Arr.MRP)*100;
offer.style.textIndent = "10px"
offer.textContent = `${Math.round(discount)}% OFF`;
offer.style.color = "#00b852"

priceDiv.append(finalPrice, MRP, offer);

let staticInfo = document.createElement("p");
staticInfo.textContent = `inclusive of all taxes`;
staticInfo.style.color = "#757575"
staticInfo.style.marginTop = "-20px"

priceBox.append(priceDiv, staticInfo);

let tribeContainer = document.createElement("div");
tribeContainer.setAttribute("id", "tribe_container");
tribeContainer.style.borderBottom = "2px solid #ececec"
tribeContainer.style.borderTop = "2px solid #ececec"
tribeContainer.style.padding = "20px 0"

let tribeMsg = document.createElement("span");
tribeMsg.setAttribute("class", "tribe_msg");
tribeMsg.textContent = "TriBe members get an extra discount of "

let tribeMsg1 = document.createElement("span");
tribeMsg1.setAttribute("class", "tribe_msg");
tribeMsg1.textContent = "₹" + (Arr.price - Arr.discount);
tribeMsg1.style.fontWeight = "bolder"

let tribeMsg2 = document.createElement("span");
tribeMsg2.setAttribute("class", "tribe_msg");
tribeMsg2.textContent = " and FREE shipping."

let tribeLearn = document.createElement("span");
tribeLearn.textContent = "Learn more";
tribeLearn.style.color = "#6ab6b6"
tribeLearn.classList = "learn_more";

tribeContainer.append(tribeMsg, tribeMsg1, tribeMsg2, tribeLearn)

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
let cartList = JSON.parse(localStorage.getItem("cartList")) || [];
cartBtnDiv.addEventListener("click", () => {
    console.log(Arr)
    cartList.push(Arr)
    localStorage.setItem("cartList", JSON.stringify(cartList));
})

let icon1 = document.createElement("i");
icon1.innerHTML =   `<i class="fas fa-shopping-cart"></i>`;

let btn1 = document.createElement("button");
btn1.textContent = "ADD TO BAG";
btn1.style.border = "none";
btn1.style.backgroundColor = "transparent"

cartBtnDiv.append(icon1, btn1)

let wishBtnDiv = document.createElement("div");
wishBtnDiv.classList = "wish_button";
let wishList = JSON.parse(localStorage.getItem("wishList")) || [];
wishBtnDiv.addEventListener("click", () => {
    console.log(Arr)
    wishList.push(Arr)
    localStorage.setItem("wishList", JSON.stringify(wishList));
})

let icon2 = document.createElement("i");
icon2.innerHTML =   `<i class="far fa-heart"></i>`;
icon2.style.color = "#757575"

let btn2 = document.createElement("button");
btn2.textContent = "WISHLIST";
btn2.style.border = "none";
btn2.style.backgroundColor = "transparent"
btn2.style.color = "#757575"
btn2.style.fontWeight = "750"

wishBtnDiv.append(icon2, btn2)
addBtns.append(cartBtnDiv, wishBtnDiv);

subMain.append(div1, prodName, rating, priceBox, tribeContainer, size, addBtns)
main.append(subMain);
console.log(main)