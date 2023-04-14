import header from "../Components/header.js"
// import headerCategories from "../Components/headerModule.js"
// import selectCountry from "../Components/headerModule.js"
// import userLogin from "../Components/headerModule.js"

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

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f72400c1aemsh3bd15174d76e23cp1e78e7jsnbbfb0726654c',
		'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
	}};

	fetch('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=india&lang=en&currentpage=0&pagesize=15&categories=men_all&concepts=H%26M%20MAN', options)
		.then(response => response.json())
		.then(response => { displayData(response.results); })
		.catch(err => console.error(err));

function displayData(data){
    console.log(data);
    let main = document.getElementById("products");
    main.textContent = "";

    data.map((ele) => {
        // console.log(ele);
        //ele.images[0].baseUrl, ele.name,
        let mainDiv = document.createElement("div");
        mainDiv.classList = "product"

        let subDiv1 = document.createElement("div");
        subDiv1.classList = "image"

        let image = document.createElement("img");
        image.src = ele.images[0].baseUrl

        subDiv1.append(image);

        let subDiv2 = document.createElement("div");
        subDiv2.classList = "product_info"

        let details = document.createElement("div");
        details.classList = "details"

        let td1 = document.createElement("tr");
        td1.textContent = ele.brandName;

        let td2 = document.createElement("tr");
        let temp;
        if(ele.articleColorNames.length > 1)
            temp = "multicolor";
        else
            temp = ele.articleColorNames
        td2.textContent = `${ele.categoryName} ${temp} ${ele.name}`

        let td3 = document.createElement("tr");
        td3.classList = "price_div";

        let finalPrice = document.createElement("h3");
        let tempPrice;
        if(ele.price.value > 199)
            tempPrice = ele.price.value + 10000;
        else if(ele.price.value > 149)
            tempPrice = ele.price.value + 5000;
        else if(ele.price.value > 99)
            tempPrice = ele.price.value + 1000;
        else
            tempPrice = ele.price.value + 500;
        finalPrice.textContent = `₹${tempPrice} `

        let MRP = document.createElement("p");
        let mrp = tempPrice + ((tempPrice/10)*5)
        MRP.textContent = `  ₹${mrp.toFixed(2)} `
        MRP.style.textIndent = "10px"
        MRP.style.textDecoration = "line-through";

        td3.append(finalPrice, MRP);

        let td4 = document.createElement("tr");
        td4.classList = "discount_member"
        let discountPrice = tempPrice - (tempPrice/10);
        td4.style.textIndent = "10px"
        td4.textContent = `₹${discountPrice.toFixed(2)} For TriBe Members`;

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
