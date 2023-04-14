import header from "../Components/header.js"

let headerDiv = document.getElementById("header");
headerDiv.innerHTML = header();

let sortBody = document.getElementById("sort");
let sort = document.getElementById("sort_tab_head");
let openFilterTab = false;

sort.addEventListener("mouseover", openFilter);
sortBody.addEventListener("mouseover", openFilter)

sort.addEventListener("mouseleave", timeOutFilter);
sortBody.addEventListener("mouseleave", () => { openFilterTab = false; closeFilter(); })

function openFilter(){
    openFilterTab = true;
    sortBody.classList.remove("hide")
}

function closeFilter(){
    if(!openFilterTab)
        sortBody.classList.add("hide");
}

function timeOutFilter(){
    openFilterTab = false;
    setTimeout(closeFilter, 200);
}

// Products Displaying
let page = 1;
async function fetchData(){
    try{
        let data = await fetch(`http://localhost:3000/menShirts?_page=${page}&_limit=15`)
        data = await data.json();
        console.log(data)
        displayData(data)
    }
    catch(err){
        console.log(err)
    }
}
fetchData();

function displayData(data){
    let main = document.getElementById("products");
    main.textContent = "";

    data.map((ele) => {
        let mainDiv = document.createElement("div");
        mainDiv.classList = "product"
        mainDiv.addEventListener("click", () => { 
            localStorage.setItem("product", JSON.stringify(ele)) 
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

        let td2 = document.createElement("tr");
        td2.textContent = ele.name.slice(0, 30) + "...";

        let td3 = document.createElement("tr");
        td3.classList = "price_div";

        let finalPrice = document.createElement("h3");
        finalPrice.textContent = "₹" + ele.price;
        finalPrice.style.fontWeight = "100"

        let MRP = document.createElement("p");
        if(ele.MRP !== undefined)
            MRP.textContent = "₹" + ele.MRP;
        MRP.style.textIndent = "10px"
        MRP.style.textDecoration = "line-through";

        td3.append(finalPrice, MRP);

        let td4 = document.createElement("tr");
        td4.classList = "discount_member"
        td4.style.textIndent = "10px"
        td4.textContent = "₹" +  ele.discount + " for TriBe Members"

        details.append(td1, td2, td3, td4);

        let wish = document.createElement("div")
        wish.classList = "wishList";

        let icon = document.createElement("i");
        icon.innerHTML = `<i class="fa-regular fa-heart"></i>`;

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
    fetchData();
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

    fetchData();
}
