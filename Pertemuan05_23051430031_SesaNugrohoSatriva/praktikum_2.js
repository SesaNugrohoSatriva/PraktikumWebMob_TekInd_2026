// 2. ARRAY
let daftarCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"] // C-001 terjadi 2 kali

console.log("Jumlah Cacat : " + daftarCacat.length)

// Looping (perulangan) untuk menampilkan setiap cacat
console.log("--- Laporan Detail Cacat ---");
for (let i = 0; i < daftarCacat.length; i++){
    console.log("Item ke-", (i+1) + " : ", daftarCacat[i]);
}

// Menambahkan data baru ke array
daftarCacat.push("C-099");
console.log("Setelah penambahan : " + daftarCacat.length); 