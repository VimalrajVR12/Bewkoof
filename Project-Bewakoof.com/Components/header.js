function header(){
    return `<div id="header_row_1">
    <div id="header_row_1_left">
        <a href="">Offers</a>
        <a href="">Fanbook</a>
        <a href=""><i class="fa-solid fa-mobile"></i>Download App</a>
        <a href="">Tribe Membership</a>
    </div>
    <div id="header_row_1_right">
        <a href="">Contact Us</a>
        <a href="">Track Order</a>
    </div>
</div>
<div id="header_row_2">
    <div id="header_row_2_left">
        <div id="image">
            <a href="index.html"> <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo-bday-y23.svg" alt="Bewakoof Logo"></a>
        </div>
        <div id="menu">
            <a href="men.html" id="men">MEN</a>
            <a href="women.html" id="women">WOMEN</a>
            <a href="" id="mobile_covers">MOBILE COVERS</a>
        </div>
    </div>
    <div id="header_row_2_right">
        <div id="search_box">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search by product, category or collection" id="search_input">
        </div>
        <div id="user_details">
            <a href="login.html"><i class="fa-regular fa-user"></i></a>
            <a href="wishlist.html"><i class="fa-regular fa-heart"></i></a>
            <a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
            <a href=""><img id="select_country" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png" alt="Indian Flag"></a>
            <div id="country" class="hide">
                
            </div>
            <div id="users" class="hide">
                <div>Hi Vimal</div>
                <div>My Account</div>
                <div>My Wishlist</div>
                <div>My Orders</div>
                <div>My Wallet</div>
                <div>Logout</div>
            </div>
        </div>
    </div>
</div>
<div id="search_results" class="hide"> </div>
<div id="temp" class="hide">
    
</div>`;
}

export default header;