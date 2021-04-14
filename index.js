var typeNumber = 1;
var errorCorrectionLevel = "L";
async function generate() {
  var qr = qrcode(typeNumber, errorCorrectionLevel);
  const url = document.getElementById("url").value;
  qr.addData(url);

  try {
    qr.make();
    document.getElementById("qrcode").innerHTML = qr.createImgTag(6, 6, 6);
    typeNumber = 1;
  } catch (err) {
    typeNumber += 1;
    generate();
  }
}
