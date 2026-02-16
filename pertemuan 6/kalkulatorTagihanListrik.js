// seleksi elemen DOM dan mengambil elemen dengan getElemen
const inputDaya = document.getElementById('inputDaya');
const inputJam = document.getElementById('inputJam');
const hasilKwh = document.getElementById('hasilKwh');
const hasilBiaya = document.getElementById('hasilBiaya');

// function untuk menghitung listrik(kwh dan biaya)
function hitungListrik() {
    const daya = parseFloat(inputDaya.value) || 0;
    const jam = parseFloat(inputJam.value) || 0;
    // menghitung kwh
    const totalKwh = (daya * jam) / 1000;
    // menghitung biaya
    const totalBiaya = totalKwh * 1500;
    
    hasilKwh.textContent = "Total kWh: " + totalKwh.toFixed(2);
    hasilBiaya.textContent =
        "Estimasi Biaya: Rp " + totalBiaya.toLocaleString('id-ID');
}
// even input agar perhitungan otomatis tanpa button
inputDaya.addEventListener('input', hitungListrik);
inputJam.addEventListener('input', hitungListrik);