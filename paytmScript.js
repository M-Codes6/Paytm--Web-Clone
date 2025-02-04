function toggleContent() {
  var content = document.getElementById("content-container");

  // Toggle the display property
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

//   Display none close btn

function hideModal() {
  var content = document.getElementById("content-container");
  content.style.display = "none";
}

//   for QR-Code

var paytmMerchantID = "your_merchant_id";
var paymentAmount = "100"; 

// Construct Paytm URI
var paytmURI =
  "paytm://wallet/pay?src=" + paytmMerchantID + "&amount=" + paymentAmount;

// Generate QR code
var qrcode = new QRCode(document.getElementById("paytmQRCode"), {
  text: URL("https://paytm.com/"),
  width: 128,
  height: 128,
});

// For Footer

function toggleSection(sectionId, imgId) {
  var section = document.querySelector("." + sectionId);
  var toggleImg = document.getElementById(imgId);

  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
    toggleImg.src = "images/cross.svg";
  } else {
    section.style.display = "none";
    toggleImg.src = "images/add.svg";
  }
}

