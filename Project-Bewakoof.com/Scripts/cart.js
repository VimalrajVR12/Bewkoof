import header from "../Components/header.js"

let head = document.getElementById("header");
head.innerHTML = header();

let cartbag = JSON.parse(localStorage.getItem("cartList")) || [];
// console.log(cartbag)
let cartArr = [];
myCart(cartbag);

function myCart(data){
  data.map((ele) => {
    var obj = {
      image: ele.image,
      name: ele.name,
      price: ele.price,
      MRP: ele.MRP,
      quantity: ele.quantity || 1,
      brand: ele.brand,
      discount: ele.discont,
      size: ele.size
    }
    cartArr.push(obj)
  })
  localStorage.setItem("cartList", JSON.stringify(cartArr));
  cartbag = cartArr;
}


    var wish = JSON.parse(localStorage.getItem("wishList")) || [];
    var cupponarr = [
        { "coupon":"pw10305", "discount": 20 },
        { "coupon":"pw11012", "discount": 10 },
        { "coupon":"pw10070", "discount": 15 },
        { "coupon":"pw11117", "discount": 15 }
    ]
    initian(cartbag);
    createle(cartbag);
    totalpr(cartbag);
    function initian(cartbag) {
      if (cartbag.length > 0) {
        document.querySelector(".emptyarrdiv").style.display = "none";
  
      } else {
        document.querySelector(".bodyaddtocart").style.display = "none";
        document.querySelector(".emptyarrdiv").style.display = "";
      }
    };
  
    function createle(cartbag) {
      document.querySelector(".contein").innerHTML = "";
      cartbag.map(function creatbody(obj, index) {
        var div = document.createElement("div");
        div.setAttribute("id", "itemdiv");
  
        var div1 = document.createElement("div");
        div1.setAttribute("id", "textdiv");
        var name = document.createElement("h4");
        name.textContent = obj.name;
  
        var pri = document.createElement("span");
        pri.textContent = "₹" + obj.price*obj.quantity;
        pri.setAttribute("class","pri")
  
        var price=obj.price;
  
        var strikpri = document.createElement("span");
        strikpri.setAttribute("id", "strik");
        strikpri.textContent = "₹" + obj.MRP*obj.quantity;
  
        var MRP=obj.MRP;


        var divS = document.createElement("div");
        divS.setAttribute("id", "savediv");
        var yousave = document.createElement("p");
        var saved=obj.MRP-obj.price;
        yousave.textContent=`You Saved ₹${saved}!`
        yousave.style.color="green";
        divS.append(yousave);

        var divQ = document.createElement("div");
        divQ.setAttribute("id", "quandiv");
  
        var qun = document.createElement("select");
          
            var opt=document.createElement("option")
            opt.setAttribute("value","")
            opt.textContent="Qty";
          var opt1=document.createElement("option")
          opt1.setAttribute("value","1")
          opt1.textContent=1;
          var opt2=document.createElement("option")
          opt2.setAttribute("value","2")
          opt2.textContent=2;
          var opt3=document.createElement("option")
          opt3.setAttribute("value","3")
          opt3.textContent=3;
          var opt4=document.createElement("option")
          opt4.setAttribute("value","4")
          opt4.textContent=4;
          var opt5=document.createElement("option")
          opt5.setAttribute("value","5")
          opt5.textContent=5;
          var opt6=document.createElement("option")
          opt6.setAttribute("value","6")
          opt6.textContent=6;
          var opt7=document.createElement("option")
          opt7.setAttribute("value","7")
          opt7.textContent=7;
          var opt8=document.createElement("option")
          opt8.setAttribute("value","8")
          opt8.textContent=8;
          var opt9=document.createElement("option")
          opt9.setAttribute("value","9")
          opt9.textContent=9;
          var opt10=document.createElement("option")
          opt10.setAttribute("value","10")
          opt10.textContent=10;
  
          qun.append(opt,opt1,opt2,opt3,opt4,opt5,opt6,opt7,opt8,opt9,opt10)
          
          var Selectsize=document.createElement("select")
          var size=document.createElement("option")
          size.textContent="Size";
          var size1=document.createElement("option")
          size1.textContent="S";
          var size2=document.createElement("option")
          size2.textContent="M";
          var size3=document.createElement("option")
          size3.textContent="L";
          var size4=document.createElement("option")
          size4.textContent="XL";
          var size5=document.createElement("option")
          size5.textContent="2XL";
          var size6=document.createElement("option")
          size6.textContent="3XL";

          Selectsize.append(size,size1,size2,size3,size4,size5,size6)


          divQ.append(qun,Selectsize)
  
          qun.addEventListener("change", selected_qty_value)
  
          function selected_qty_value() {
              let tempQuan = qun.value;
              cartbag[index].quantity = tempQuan;
              localStorage.setItem("cartList", JSON.stringify(cartbag));

              initian(cartbag);
              createle(cartbag);
              totalpr(cartbag);
          }

        var remo = document.createElement("button");
        remo.setAttribute("class", "cartbtn");
        remo.textContent = "Remove";
        remo.style.display = "block";
        remo.addEventListener("click", function () {
          deleteitem(index);
        });
  
        var div2 = document.createElement("div");
        div2.setAttribute("id", "imagediv");
  
        var img = document.createElement("img");
        img.setAttribute("src", obj.image);
        img.style.display = "block";
  
        var move = document.createElement("button");
        move.setAttribute("class", "cartbtnM");
        move.setAttribute("id", "movetowish");
        move.textContent = "Move To Wishlist";
        move.addEventListener("click", function () {
          pushitem(obj);
        });
  
        div1.append(name, pri, strikpri, divS,divQ, remo);
        div2.append(img, move);
        div.append(div1, div2);
        document.querySelector(".contein").append(div);
        totalitembag(index);
      })
    };
    function deleteitem(index) {
      cartbag.splice(index, 1);
      localStorage.setItem("cartList", JSON.stringify(cartbag));
      createle(cartbag);
      initian(cartbag);
      totalpr(cartbag)
    };
    function pushitem(obj) {
      wish.push(obj);
      localStorage.setItem("wishList", JSON.stringify(wish));
      deleteitem(obj);
      alert("Item Added To Wishlist")
    }
  
    function totalitembag(index) {
      document.querySelector("#totalitem").textContent = `My Bag ${index + 1} Items`;
    }
    function totalpr(cartbag) {
      var total = cartbag.reduce(function (ac, cv) {
        return ac += cv.MRP * cv.quantity
      }, 0)
      var subtotal = cartbag.reduce(function (ac, cv) {
        return ac += cv.price * cv.quantity
      }, 0)
      
        document.querySelector("#subtotal").textContent = `₹${Number(subtotal)}` ;
        document.querySelector("#paymenttotal").textContent =`₹${Number(subtotal)}`;
        document.querySelector("#saving").textContent = `₹${Number(total)-Number(subtotal) }`;
        document.querySelector("#Discount").textContent =`₹${Number(total)-Number(subtotal) }`;
      document.querySelector("#totalprice").textContent = "₹" + total;
    }
  
    document.querySelector("#havecuppon").addEventListener("click", function () {
      document.querySelector(".cuppon").style.display = "flex";
    });
    
    document.querySelector("#close").addEventListener("click", function () {
      document.querySelector(".cuppon").style.display = "none";
    });
    
    document.querySelector("#apply").addEventListener("click", function () {
      let code = document.querySelector("#code").value;
      let temp = cupponarr.filter((ele) => {
            return (ele.coupon == code);
      })
      
      if(temp != ""){
        console.log(cartbag)
        let total = cartbag.map((ele) => {  console.log(ele.price*ele.quantity);   return ele.price*ele.quantity })
                            .reduce((acc, cur) => { return(acc+cur) });
        console.log(total)
        let mrp = cartbag.map((ele) => { return ele.MRP*ele.quantity })
                            .reduce((acc, cur) => { return acc+cur });
        console.log(mrp)
        let dis = temp[0].discount;
        dis = (total/100)*dis;
        total = total.toFixed(2) - dis.toFixed(2);
        document.querySelector("#paymenttotal").textContent = "₹" + total.toFixed(2);
        document.querySelector("#saving").textContent = "₹" + (mrp - total).toFixed(2);
        document.querySelector(".cuppon").style.display = "none";
      }
      else{
        alert("Invalid Coupon");
        document.querySelector(".cuppon").style.display = "none";
      }
    })

    document.querySelector("#btnadd").addEventListener("click", function () {
      window.location.href = "address.html";
    })