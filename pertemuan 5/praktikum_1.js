// 1. FUNCTION Declaration
// Fungsi untuk menghitung konsumsi daya (P = V x I)
function hitungDaya(tegangan, arus){
    let daya = tegangan * arus;
    return daya
}

// Pemanggilan Function
let teganganMesin = 220; // Volt
let arusMesin = 10; //Ampere

let totalDaya = hitungDaya(teganganMesin, arusMesin);
console.log("Daya Mesin : " + totalDaya + " Watt");