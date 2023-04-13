var arr = JSON.parse(localStorage.getItem("Wishlist")) || [];
var bagarr = JSON.parse(localStorage.getItem("cart")) || [];
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
    img.setAttribute("src", obj.image_url);

    var name = document.createElement("p");
    name.textContent = obj.name;

    var pric = document.createElement("span");
    pric.textContent = obj.price;

    var strik = document.createElement("span");
    strik.textContent = obj.strikedoffprice;

    var divBtn = document.createElement("div");
    divBtn.setAttribute("id", "btn");


    var btn = document.createElement("button");
    btn.textContent = "Move To Bag";
    btn.addEventListener("click", function () {
      addtobag(obj);
    });


    var hr=document.createElement("hr");
    hr.style.color="rgb(246, 246, 246)";

    divBtn.append(btn);

    var remov = document.createElement("div");
    remov.setAttribute("id", "rem");
    remov.addEventListener("click", function () {
      deleteitem(index);
    });

    var spa = document.createElement("span");
    spa.innerHTML = "&#xD7";
    remov.append(spa);

    div.append(img, name, pric, strik, hr,divBtn, remov);

    document.querySelector(".caintainerdiv").append(div);
  });
};
function deleteitem(index) {
  arr.splice(index, 1);
  localStorage.setItem("Wishlist", JSON.stringify(arr));
  createlement(arr);
  initial(arr);
}
function addtobag(obj) {
  bagarr.push(obj);
  alert("Your item added to cart");
  localStorage.setItem("cart", JSON.stringify(bagarr));
}