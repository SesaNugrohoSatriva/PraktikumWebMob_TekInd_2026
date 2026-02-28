let targetProduksi = 500;
let namaMesin ="CNC-Turning-01";

console.log(targetProduksi);
console.log(namaMesin);

let stockGudang = 100;
console.log(stockGudang);

stockGudang = stockGudang - 10; //Pengambilan 10 unit
console.log(stockGudang); // Hasilnya 90

const NAMA_PABRIK = "PT. Maju Industri";
const MAX_KAPASITAS = 1000;

console.log(NAMA_PABRIK);
console.log(MAX_KAPASITAS);

// Baris berikut akan menyebabkan ERROR:
//MAX_KAPASITAS = 1200; // TypeError: Assignment to constant variable.