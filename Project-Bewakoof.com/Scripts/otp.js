import header from "../Components/header.js"

let head = document.getElementById("header")
head.innerHTML = header();

    const otpInput = document.getElementById("otp");
    const sendOtpButton = document.getElementById("send-otp");
    const submitOtpButton = document.getElementById("submit-otp");
    
    // Function to generate random 6-digit OTP
    function generateOTP() {
      const digits = "0123456789";
      let OTP = "";
      for (let i=0; i<4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
      return OTP;
    }
    
    sendOtpButton.addEventListener("click", () => {
      // Generate and display OTP
      const OTP = generateOTP();
      alert(`Your OTP is ${OTP}`);
      otpInput.value = OTP;
    
      // Enable OTP input and submit button
      otpInput.disabled = false;
      submitOtpButton.disabled = false;
    });
    
    submitOtpButton.addEventListener("click", (e) => {
      e.preventDefault();
    
      const otp = otpInput.value.trim();
    
      // Check if OTP is valid
      if (/^\d{4}$/.test(otp)) {
        alert("LOGIN successfully!");
        window.location.href = "index.html"
        // Do something else on successful verification
      } else {
              alert("Wrong OTP!")
      }
    });