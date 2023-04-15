var global_otp;

window.onload = function() {
    var digits = '0123456789';
    var OTP = '';
    for (var i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    alert("Your OTP is: " + OTP);
    global_otp=OTP
}

function verifyOTP() {
    event.preventDefault();
    var inputOTP = document.getElementById("input-otp").value;
    if (inputOTP == global_otp) {
        window.location.href = "paymentsuccessful.html";
    } else {
        var digits = '0123456789';
        var OTP = '';
        for (var i = 0; i < 6; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        alert("Incorrect OTP. New OTP generated: " + OTP);
        global_otp = OTP;
    }
}