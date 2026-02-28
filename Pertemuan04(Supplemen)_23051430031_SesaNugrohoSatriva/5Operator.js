let jamKerjaPlanned = 8;
let jamKerjaAktual = 6.5;
let hasilProduksi = 390;
let targetProduksi = 500;

let availability = (jamKerjaAktual / jamKerjaPlanned) * 100;
let performance = (hasilProduksi / targetProduksi) * 100;

console.log('Availability: ' + availability.toFixed(2) + '%'); // 81.25%
console.log('Performance: ' + performance.toFixed(2) + '%'); // 78.00%

let stok = 100;

stok = stok + 50; // versi panjang
stok += 50; // versi ringkas (+=) - hasil sama: 150

stok -= 20; // sama dengan: stok = stok - 20 -> 130
stok *= 2; // sama dengan: stok = stok * 2 -> 260
stok /= 4; // sama dengan: stok = stok / 4 -> 65

let hitung = 0;
hitung++; // Sama dengan: hitung = hitung + 1 → 1
hitung++; // → 2
hitung--; // → 1

let isOverheat = false;
let isVibrasi = true;
let isErrorSensor = false;
// Kondisi untuk memulai produksi
let mesinSiap = true;
let materialCukup = true;
let operatorHadir = false; // Operator terlambat
// && (AND): Semua harus true
let bisaMulai = mesinSiap && materialCukup && operatorHadir;
console.log(bisaMulai); // false (karena operatorHadir = false)
// || (OR): Salah satu cukup
let adaPeringatan = isOverheat || isVibrasi || isErrorSensor;
// ! (NOT): Membalik
let belumMulai = !bisaMulai;
console.log(belumMulai); // true