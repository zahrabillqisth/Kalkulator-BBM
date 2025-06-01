function hitungBBM() {
  const jarak = parseFloat(document.getElementById("jarak").value);
  const efisiensi = parseFloat(document.getElementById("pemakaian").value);
  const harga = parseFloat(document.getElementById("harga").value);
  const hasilDiv = document.getElementById("hasil");

  if (isNaN(jarak) || isNaN(efisiensi) || isNaN(harga)) {
    hasilDiv.innerText = "Mohon isi semua data dengan benar.";
    return;
  }

  const literDibutuhkan = jarak / efisiensi;
  const totalBiaya = literDibutuhkan * harga;

  hasilDiv.innerHTML = `
    Total BBM yang dibutuhkan: <strong>${literDibutuhkan.toFixed(2)} liter</strong><br>
    Perkiraan biaya perjalanan: <strong>Rp ${totalBiaya.toLocaleString("id-ID")}</strong>
  `;
}
