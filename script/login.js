// switch from passlogin to sms login
document.getElementById("passwordLogin").addEventListener("click", function () {
    document.getElementById("passwordForm").style.display = "block";
    document.getElementById("smsForm").style.display = "none";
    this.classList.add("active");
    document.getElementById("smsLogin").classList.remove("active");
});
// switch from sms login to passlogin
document.getElementById("smsLogin").addEventListener("click", function () {
    document.getElementById("smsForm").style.display = "block";
    document.getElementById("passwordForm").style.display = "none";
    this.classList.add("active");
    document.getElementById("passwordLogin").classList.remove("active");
});

// Generate QR Code
new QRCode(document.getElementById("qrcode"), {
    text: "https://www.taobao.com/",
    width: 150,
    height: 150
});
