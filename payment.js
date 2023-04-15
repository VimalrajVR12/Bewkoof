var paymentDebitButton = document.getElementById("payment-debit-button");
var paymentWalletButton = document.getElementById("payment-wallet-button");
var paymentUpiButton = document.getElementById("payment-upi-button");
var paymentNetBankingButton = document.getElementById("payment-net-banking-button");
var codButton = document.getElementById("payment-cod-button");

// We have to change debit card button again on clicking second time;
document.getElementById("payment-cod").style.display = "none";

paymentWalletButton.addEventListener("click", () => {
  // left div changed
  paymentWalletButton.style.backgroundColor = "white";
  paymentWalletButton.style.borderLeft = "5px solid #42a2a2";
  paymentDebitButton.style.backgroundColor = "whitesmoke";
  paymentDebitButton.style.border = "none";
  paymentUpiButton.style.backgroundColor = "whitesmoke";
  paymentUpiButton.style.border = "none";
  paymentNetBankingButton.style.backgroundColor = "whitesmoke";
  paymentNetBankingButton.style.border = "none";
  codButton.style.backgroundColor = "whitesmoke";
  codButton.style.borderLeft = "none";
  // right div changed
  document.getElementById("payment-debit").style.display = "none";
  document.getElementById("payment-wallet").style.display = "block";
  document.getElementById("payment-debit").style.display = "none";
  document.getElementById("payment-upi").style.display = "none";
  document.getElementById("payment-net-banking").style.display = "none";
  document.getElementById("payment-cod").style.display = "none";
});

paymentDebitButton.addEventListener("click", () => {
  paymentUpiButton.style.backgroundColor = "whitesmoke";
  paymentUpiButton.style.border = "none";
  paymentNetBankingButton.style.backgroundColor = "whitesmoke";
  paymentNetBankingButton.style.border = "none";
  paymentWalletButton.style.backgroundColor = "whitesmoke";
  paymentWalletButton.style.borderLeft = "none";
  paymentDebitButton.style.backgroundColor = "white";
  paymentDebitButton.style.borderLeft = "5px solid #42a2a2";
  codButton.style.backgroundColor = "whitesmoke";
  codButton.style.borderLeft = "none";
  document.getElementById("payment-debit").style.display = "block";
  document.getElementById("payment-upi").style.display = "none";
  document.getElementById("payment-wallet").style.display = "none";
  document.getElementById("payment-net-banking").style.display = "none";
  document.getElementById("payment-cod").style.display = "none";
});

paymentUpiButton.addEventListener("click", () => {
  paymentDebitButton.style.backgroundColor = "whitesmoke";
  paymentDebitButton.style.border = "none";
  paymentNetBankingButton.style.backgroundColor = "whitesmoke";
  paymentNetBankingButton.style.border = "none";
  paymentWalletButton.style.backgroundColor = "whitesmoke";
  paymentWalletButton.style.borderLeft = "none";
  paymentDebitButton.style.backgroundColor = "whitesmoke";
  paymentDebitButton.style.border = "none";
  paymentUpiButton.style.backgroundColor = "white";
  paymentUpiButton.style.borderLeft = "5px solid #42a2a2";
  codButton.style.backgroundColor = "whitesmoke";
  codButton.style.borderLeft = "none";
  document.getElementById("payment-upi").style.display = "block";
  document.getElementById("payment-debit").style.display = "none";
  document.getElementById("payment-debit").style.display = "none";
  document.getElementById("payment-wallet").style.display = "none";
  document.getElementById("payment-net-banking").style.display = "none";
  document.getElementById("payment-cod").style.display = "none";
});

paymentNetBankingButton.addEventListener("click", () => {
  paymentDebitButton.style.backgroundColor = "whitesmoke";
  paymentDebitButton.style.border = "none";
  paymentUpiButton.style.backgroundColor = "whitesmoke";
  paymentUpiButton.style.border = "none";
  paymentWalletButton.style.backgroundColor = "whitesmoke";
  paymentWalletButton.style.borderLeft = "none";
  paymentDebitButton.style.backgroundColor = "whitesmoke";
  paymentDebitButton.style.border = "none";
  paymentNetBankingButton.style.backgroundColor = "white";
  paymentNetBankingButton.style.borderLeft = "5px solid #42a2a2";
  codButton.style.backgroundColor = "whitesmoke";
  codButton.style.borderLeft = "none";
  document.getElementById("payment-net-banking").style.display = "block";
  document.getElementById("payment-debit").style.display = "none";
  document.getElementById("payment-upi").style.display = "none";
  document.getElementById("payment-wallet").style.display = "none";
  document.getElementById("payment-cod").style.display = "none";
});

codButton.addEventListener("click", () => {
  // left div changed
  paymentWalletButton.style.backgroundColor = "whitesmoke";
  paymentWalletButton.style.border = "none";
  paymentDebitButton.style.backgroundColor = "whitesmoke";
  paymentDebitButton.style.border = "none";
  paymentUpiButton.style.backgroundColor = "whitesmoke";
  paymentUpiButton.style.border = "none";
  paymentNetBankingButton.style.backgroundColor = "whitesmoke";
  paymentNetBankingButton.style.border = "none";
  
  // right div changed
  document.getElementById("payment-cod").style.display = "block";
  document.getElementById("payment-debit").style.display = "none";
  document.getElementById("payment-wallet").style.display = "none";
  document.getElementById("payment-upi").style.display = "none";
  document.getElementById("payment-net-banking").style.display = "none";
  
  // Update COD button styles
  codButton.style.backgroundColor = "white";
  codButton.style.borderLeft = "5px solid #42a2a2";
});

function otp(){
  window.location.href="otp.html"
}