var typeNumber = 2;
var errorCorrectionLevel = "L";
var qr = qrcode(typeNumber, errorCorrectionLevel);
function generate() {
  const url = document.getElementById("url").value;
  document.getElementById("qrcode").innerHTML = "";
  qr.addData(url);
  qr.make();
  console.log(qr);
  document.getElementById("qrcode").innerHTML = qr.createImgTag(6, 6, 6);
}
