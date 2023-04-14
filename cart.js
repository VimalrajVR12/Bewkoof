cartbag=[
    {
          image_url:
            "https://images.bewakoof.com/t540/jet-black-half-sleeve-t-shirt-106-1639137606-1.jpg",
          name: "Deadpool Screwed half sleeve Tshirt",
          price: 1999,
          strikedoffprice: 3199,
        },
        {
          image_url:
            "https://images.bewakoof.com/t540/jet-black-henley-hoodie-full-sleeve-t-shirt-308345-1638511839-1.jpg",
          name: "Deadpool Screwed full sleeve Tshirt",
          price: 769,
          strikedoffprice: 1099,
        },
        {
          image_url:
            "https://images.bewakoof.com/t540/gotham-city-half-sleeve-t-shirt-463685-1641536947-1.jpg",
          name: "Deadpool Screwed half sleeve Tshirt",
          price: 1299,
          strikedoffprice: 1440,
        },
    ]
    var wish = JSON.parse(localStorage.getItem("Wishlist")) || [];
    var cupponarr = [];
    var finalpayment = [];
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
        pri.textContent = `₹${obj.price} `;
        pri.setAttribute("class","pri")
  
        var priceQ=obj.price;
  
        var strikpri = document.createElement("span");
        strikpri.setAttribute("id", "strik");
        strikpri.textContent = `₹${obj.strikedoffprice}`;
  
        var strikedoffpriceQ=obj.strikedoffprice;


        var divS = document.createElement("div");
        divS.setAttribute("id", "savediv");
        var yousave = document.createElement("p");
        var saved=obj.strikedoffprice-obj.price;
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
             pri.textContent="";
             strikpri.textContent="";
             yousave.textContent=""

             var tl=priceQ*qun.value;
             var tls=strikedoffpriceQ*qun.value;
             var s=tls-tl
              pri.append(`₹${tl}`);
              strikpri.append(`₹${tls}`);
              yousave.append(`You Saved ₹${s}`);

              }
              
          // obj.price=tl;
          // obj.strikedoffprice=tls;
  
  
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
        img.setAttribute("src", obj.image_url);
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
      localStorage.setItem("addtobag", JSON.stringify(cartbag));
      createle(cartbag);
      initian(cartbag);
      totalpr(cartbag)
    };
    function pushitem(obj) {
      wish.push(obj);
      localStorage.setItem("Wishlist", JSON.stringify(wish));
      deleteitem(obj);
      alert("Item Added To Wishlist")
    }
  
    function totalitembag(index) {
      document.querySelector("#totalitem").textContent = `My Bag ${index + 1} Items`;
    }
    function totalpr(cartbag) {
      var total = cartbag.reduce(function (ac, cv) {
        return ac += Number(cv.strikedoffprice);
      }, 0)
      var subtotal = cartbag.reduce(function (ac, cv) {
        return ac += Number(cv.price);
      }, 0)
      // var save=Number(cv.strikedoffprice)-Number(cv.price);
      if (cupponarr.length > 0) {
        document.querySelector("#subtotal").textContent = `₹${Number(subtotal) - 200}`;
        document.querySelector("#paymenttotal").textContent = `₹${Number(subtotal) - 200}`;
        document.querySelector("#saving").textContent =`₹${Number(total)-Number(subtotal)}`;
        document.querySelector("#Discount").textContent =`₹${Number(total)-Number(subtotal)}`;
        
        finalpayment.push(Number(subtotal) - 200);
        localStorage.setItem("finalpayment", JSON.stringify(finalpayment));
      } else {
        document.querySelector("#subtotal").textContent = `₹${Number(subtotal)}` ;
        document.querySelector("#paymenttotal").textContent =`₹${Number(subtotal)}`;
        document.querySelector("#saving").textContent = `₹${Number(total)-Number(subtotal) }`;
        document.querySelector("#Discount").textContent =`₹${Number(total)-Number(subtotal) }`;
        finalpayment.push(Number(subtotal));
        localStorage.setItem("finalpayment", JSON.stringify(finalpayment));
      }
      document.querySelector("#totalprice").textContent = `₹${Number(total)}`;
    }
  
    document.querySelector("#havecuppon").addEventListener("click", function () {
      document.querySelector(".cuppon").style.display = "flex";
    });
    document.querySelector("#close").addEventListener("click", function () {
      document.querySelector(".cuppon").style.display = "none";
    });
    document.querySelector("#apply").addEventListener("click", function () {
      var code = document.querySelector("#code").value;
      if (code == "BEWAKOOF6") {
        alert("Cuoppen code apply succesfully");
        cupponarr.push("yes");
        console.log(cupponarr);
        totalpr(cartbag);
      } else {
        alert("This cuppon code is not valid");
      }
    });
    document.querySelector("#btnadd").addEventListener("click", function () {
      window.location.href = "address.html";
    })