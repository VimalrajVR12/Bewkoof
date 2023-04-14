function selectCountry(){
    return `<div id="head">
    <h3>Select Country</h3>
    <i class="fa-solid fa-xmark"></i>
</div>
<div id="body">
    <div><img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png" onclick="changeCountry()">India</div>
    <div><img src="https://images.bewakoof.com/web/uae-flag-round-1639566914.png" onclick="changeCountry()">UAE</div>
    <div><img src="https://images.bewakoof.com/web/usa-flag-round.png" onclick="changeCountry()">USA</div>
    <div><img src="https://images.bewakoof.com/web/canada-flag-round.png" onclick="changeCountry()">Canada</div>
    <div><img src="https://images.bewakoof.com/web/thailand-flag-round.png" onclick="changeCountry()">Thailand</div>
    <div><img src="https://images.bewakoof.com/web/malaysia-flag-round.png" onclick="changeCountry()">Malaysia</div>
    <div><img src="https://images.bewakoof.com/web/austrialia-flag-round.png" onclick="changeCountry()">Australia</div>
    <div><img src="https://images.bewakoof.com/web/oman-flag-round.png" onclick="changeCountry()">Oman</div>
    <div><img src="https://images.bewakoof.com/web/qatar-flag-round.png" onclick="changeCountry()">Qatar</div>
    <div><img src="https://images.bewakoof.com/web/saudi-arabia-flag-round.png" onclick="changeCountry()">Saudi Arabia</div>
    <div><img src="https://images.bewakoof.com/web/singapore-flag-round.png" onclick="changeCountry()">Singapore</div>
    <div><img src="https://images.bewakoof.com/web/earth-round-1639566915.png" onclick="changeCountry()">Other</div>
</div>`;
}

export default selectCountry;