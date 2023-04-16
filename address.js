    var Address = JSON.parse(localStorage.getItem("addresses")) || [];


    document.querySelector("form").addEventListener('submit',function(event){
        event.preventDefault();
        // Get all the input fields
        var countryInput = document.querySelector("#country").value;
        var fullNameInput = document.querySelector("#full-name").value;
        var mobileNumberInput = document.querySelector("#mobile").value;
        var pincodeInput = document.querySelector("#pincode").value;
        var cityInput = document.querySelector("#city").value;
        var stateInput = document.querySelector("#state").value;
        var flatNoInput = document.querySelector("#flat").value;
        var areaInput = document.querySelector("#area").value;
        var landmarkInput = document.querySelector("#landmark").value;
        var saveAddressInput = document.querySelector("#address-type").value;

        var Address = {
            country: countryInput,
            fullName: fullNameInput,
            mobileNumber: mobileNumberInput,
            pincode: pincodeInput,
            city: cityInput,
            state: stateInput,
            flatNo: flatNoInput,
            area: areaInput,
            landmark: landmarkInput,
            saveAddress: saveAddressInput
        };
        console.log(countryInput,fullNameInput,mobileNumberInput,pincodeInput,cityInput,stateInput,flatNoInput,areaInput,landmarkInput,saveAddressInput);
        localStorage.setItem("addresses", JSON.stringify(Address));
        window.location.href="payment.html"
    })
