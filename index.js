var typeNumber = 6;
var errorCorrectionLevel = "L";
var qr = qrcode(typeNumber, errorCorrectionLevel);
function generate() {
  const url = document.getElementById("url").value;
  document.getElementById("qrcode").innerHTML = "";
  qr.addData(url);
  qr.make();
  document.getElementById("qrcode").innerHTML = qr.createImgTag(6, 6, 6);
}
