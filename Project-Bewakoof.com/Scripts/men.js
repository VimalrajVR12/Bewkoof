import header from "../Components/header.js"

let headerDiv = document.getElementById("header");
headerDiv.innerHTML = header();

// let sortBody = document.getElementById("sort");
// let sort = document.getElementById("sort_tab_head");
// let openFilterTab = false;

// sort.addEventListener("mouseover", openFilter);
// sortBody.addEventListener("mouseover", openFilter)

// sort.addEventListener("mouseleave", timeOutFilter);
// sortBody.addEventListener("mouseleave", () => { openFilterTab = false; closeFilter(); })

// function openFilter(){
//     openFilterTab = true;
//     sortBody.classList.remove("hide")
// }

// function closeFilter(){
//     if(!openFilterTab)
//         sortBody.classList.add("hide");
// }

// function timeOutFilter(){
//     openFilterTab = false;
//     setTimeout(closeFilter, 200);
// }

// Products Displaying
let page = 1;
let url = `http://localhost:3000/menShirts?`
async function fetchData(url){
    try{
        let data = await fetch(`${url}_page=${page}&_limit=15`)
        console.log(url);
        data = await data.json();
        console.log(data);
        displayData(data)
    }
    catch(err){
        console.log(err)
    }
}
fetchData(url);

function displayData(data){
    let main = document.getElementById("products");
    main.textContent = "";
    let wishList = JSON.parse(localStorage.getItem("wishList")) || [];

    data.map((ele) => {
        let mainDiv = document.createElement("div");
        mainDiv.classList = "product"
        mainDiv.addEventListener("click", () => { 
            localStorage.setItem("product", JSON.stringify(ele))
            location.href = "product.html";
        })

        let subDiv1 = document.createElement("div");
        subDiv1.classList = "image"

        let image = document.createElement("img");
        image.src = ele.image

        subDiv1.append(image);

        let subDiv2 = document.createElement("div");
        subDiv2.classList = "product_info"

        let details = document.createElement("div");
        details.classList = "details"

        let td1 = document.createElement("tr");
        td1.textContent = ele.brand;
        td1.style.padding = "5px"
        td1.style.fontSize = "small"
        td1.style.fontWeight = "500"

        let td2 = document.createElement("tr");
        td2.textContent = ele.name.slice(0, 30) + "...";
        td2.style.padding = "5px"
        td2.style.fontWeight = "10"
        td2.style.fontSize = "small"

        let td3 = document.createElement("tr");
        td3.classList = "price_div";
        td3.style.padding = "5px"

        let finalPrice = document.createElement("h3");
        finalPrice.textContent = "₹" + ele.price;
        finalPrice.style.fontWeight = "900"

        let MRP = document.createElement("p");
        if(ele.MRP !== undefined)
            MRP.textContent = "₹" + ele.MRP;
        MRP.style.textIndent = "10px"
        MRP.style.textDecoration = "line-through";
        MRP.style.fontWeight = "100"

        td3.append(finalPrice, MRP);

        let td4 = document.createElement("tr");
        td4.classList = "discount_member"
        td4.style.textIndent = "10px"
        td4.textContent = "₹" +  ele.discount + " for TriBe Members"
        td4.style.backgroundColor = "#f7f7f7"
        td4.style.padding = "5px"

        let td5 = document.createElement("tr");
        if(ele.cotton !== undefined){
            td5.textContent = ele.cotton
            td5.style.border = "1px solid black"
            td5.style.padding = "5px 10px"
            td5.style.display = "flex"
            td5.style.fontSize = "x-small"
            td5.style.width = "85px"
            td5.style.fontWeight = "bold"
            td5.style.letterSpacing = "0.5px"
            td5.style.marginTop = "10px"
        }

        details.append(td1, td2, td3, td4, td5);

        let wish = document.createElement("div")
        wish.classList = "wishList";

        let icon = document.createElement("i");
        icon.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        icon.addEventListener("click", () => {
            wishList.push(ele);
            window.href = "men.html"
        })

        wish.append(icon);
        subDiv2.append(details, wish)
        mainDiv.append(subDiv1, subDiv2)
        main.append(mainDiv)
    })
}

document.getElementById("previous").addEventListener("click", previousPage)
document.getElementById("next").addEventListener("click", nextPage)

function previousPage(){
    if(page <= 1)
        return

    page--;
    fetchData(url);
}

async function nextPage(){
    let length
    try{
        let data = await fetch(`http://localhost:3000/menShirts`)
        data = await data.json();
        length = data.length
        length = Math.ceil(length/15)
    }
    catch(err){
        console.log(err)
    }
    console.log(length)
    if(page < length)
        page++;

    fetchData(url);
}

let size = document.getElementById("size");
let brand = document.getElementById("brand");
let color = document.getElementById("color");
let design = document.getElementById("design");
let fit = document.getElementById("fit");
let discount = document.getElementById("discount");

size.addEventListener("change", changeSize);
brand.addEventListener("change", changeBrand);
color.addEventListener("change", changeColor);
design.addEventListener("change", changeDesign);
fit.addEventListener("change", changeFit);


function changeSize(){
    let tempSize = size.value;
    fetchData(url+`size._like=${tempSize}&`); 
}

function changeBrand(){
    let tempBrand = brand.value;
    console.log(url+`?brand_like=${tempBrand}`);
    fetchData(url+`brand_like=${tempBrand}&`)
}

function changeColor(){
    let tempColor = color.value;
    fetchData(url + `q=${tempColor}&`)
}

function changeDesign(){
    let tempDesign = design.value;
    fetchData(url + `q=${tempDesign}&`)
}

function changeFit(){
    let tempFit = fit.value;
    fetchData(url + `fit_like=${tempFit}&`)
}

