function generateQRCode() {
  const url = document.getElementById('url').value.trim();
  const qrcodeContainer = document.getElementById('qrcode');
  qrcodeContainer.innerHTML = ""; // Bersihkan QR Code sebelumnya

  if (!isValidURL(url)) {
      alert("Masukkan URL yang valid!");
      return;
  }

  // Buat QR Code menggunakan library QRCode
  QRCode.toCanvas(url, { errorCorrectionLevel: 'H' }, function (error, canvas) {
      if (error) {
          console.error(error);
          alert("Terjadi kesalahan saat membuat QR Code.");
          return;
      }
      qrcodeContainer.appendChild(canvas);
  });
}

function isValidURL(string) {
  try {
      new URL(string);
      return true;
  } catch (_) {
      return false;
  }
}