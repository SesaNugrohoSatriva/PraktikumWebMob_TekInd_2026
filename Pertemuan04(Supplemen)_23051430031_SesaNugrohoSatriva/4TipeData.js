// Penjumalahan Angka
let hasil1 = 100 + 50 ;
console.log(hasil1);

// Penggabungan teks bukan penjumlahan angka
let hasil2 = "100" + "50";
console.log(hasil2);

// Tipe data primit
// Number (angka)
let suhuMesin = 75.5; // Tipe Desimal
let jumlahUnit = 250; //Bilangan bulat
let selisihTarget = -30;  // Negtaif (Produksi dibawah targer)
let persentaseEfisiensi = 92.4;

let totalBiaya = 150000 * jumlahUnit;
console.log(totalBiaya);

// String (teks)
let kodeProduk = "PROD-A-001";
let namaOperator = "Budi Santoso";

// Template Literal (backstick) - cara modern & disarankan
let produksi = 320;
let target = 350;
let laporan = `Operator: ${namaOperator} | Produksi: ${produksi} dari ${target} unit.`;

console.log(laporan);

// Boolean (Benar/Salah)
let isMesinHidup = true;
let isTargetTercapai = false;
let isShiftMalam = true;

// Boolean sering dihasilkan dari perbandingan
let produksiHarian = 480;
let targetHarian = 500;
let sudahCukup = produksiHarian >= targetHarian;
console.log(sudahCukup); // false karena 480 < 500

// Memeriksa dan mengkonversi tipe data
// Memeriksa tipe data dengan typeof
let stock = 150;
console.log(typeof stock); //"number"
console.log(typeof "CNC-01"); //"string"
console.log(typeof true); //"boolean"

// Konversi string -> Number (PENTING untuk input form!)
let inputUser = "250"; //input dari form selalu string
let jumlah = Number(inputUser); //Konversi ke angka
let total = jumlah + 50;
console.log(total); //300 (bukan "25050"

let angka1 = parseInt("42.9"); // 42 (Dibulatkan kebawah)
let angka2 = parseFloat("42.9"); //42.9 (pertahankan desimal)
console.log(angka1);
console.log(angka2);