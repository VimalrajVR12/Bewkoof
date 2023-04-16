import header from "../Components/header.js"
import footer from "../Components/footer.js"

let head = document.getElementById("header");
head.innerHTML = header();

let foot = document.getElementById("footer");
foot.innerHTML = footer();


var arr = JSON.parse(localStorage.getItem("wishList")) || [];
var bagarr = JSON.parse(localStorage.getItem("cartList")) || [];
createlement(arr);
initial(arr);
function initial(arr) {
  if (arr.length >= 1) {
    document.querySelector(".emptyarrdiv").style.display = "none";
  } else {
    console.log(arr.length);
    document.querySelector(".caintainerdiv").style.display = "none";
    document.querySelector("#wish").style.display = "none";
    document.querySelector(".emptyarrdiv").style.display = "";
  };
}
function createlement(arr) {
  document.querySelector(".caintainerdiv").innerHTML = "";
  arr.map(function creatboby(obj, index) {
    var div = document.createElement("div");
    div.setAttribute("id", "item");

    var img = document.createElement("img");
    img.setAttribute("src", obj.image);

    var name = document.createElement("h4");
    name.textContent = obj.name;

    var pric = document.createElement("span");
    pric.textContent = `₹${obj.price}`;

    var strik = document.createElement("span");
    strik.textContent = `₹${obj.MRP}`;

    var divS = document.createElement("div");
        divS.setAttribute("id", "savediv");
        var yousave = document.createElement("p");
        var saved=obj.MRP-obj.price;
        yousave.textContent=`You Saved ₹${saved}!`
        yousave.style.color="green";
        divS.append(yousave);

    var divBtn = document.createElement("div");
    divBtn.setAttribute("id", "btn");


    var btn = document.createElement("button");
    btn.textContent = "Move To Bag";
    btn.addEventListener("click", function () {
      addtobag(obj);
      deleteitem(obj);
    });


    var hr=document.createElement("hr");
    hr.setAttribute("class","hr");
    

    divBtn.append(btn);

    var remov = document.createElement("div");
    remov.setAttribute("id", "rem");
    remov.addEventListener("click", function () {
      deleteitem(index);
    });

    var spa = document.createElement("span");
    spa.innerHTML = "&#xD7";
    remov.append(spa);

    div.append(img, name, pric, strik, divS, hr, divBtn, remov);

    document.querySelector(".caintainerdiv").append(div);
    document.querySelector("#totalitems").textContent = ` ${arr.length + 1} Items`;
  });
};
function deleteitem(index) {
  arr.splice(index, 1);
  localStorage.setItem("wishList", JSON.stringify(arr));
  createlement(arr);
  initial(arr);
}
function addtobag(obj) {
  bagarr.push(obj);
  alert("Your item added to cart");
  localStorage.setItem("cartList", JSON.stringify(bagarr));
  deleteitem(obj);
}