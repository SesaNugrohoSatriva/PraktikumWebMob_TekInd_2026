// SINTAKS DASAR:
// if (kondisi) {
// jalankan kode ini jika kondisi true
// }
let suhuMesin = 100;
if (suhuMesin > 90) {
    console.log("PERINGATAN: Suhu terlalu tinggi!");
    console.log("Aktifkan sistem pendingin darurat.");
}
// Output: PERINGATAN: Suhu terlalu tinggi!
// Output: Aktifkan sistem pendingin darurat.

let produksiAktual = 480;
let targetProduksi = 500;
if (produksiAktual >= targetProduksi) {
    console.log("STATUS: Target TERCAPAI. Laporan ke supervisor.");
} else {
    let kekurangan = targetProduksi - produksiAktual;
    console.log("STATUS: Target TIDAK tercapai.");
    console.log("Kekurangan: " + kekurangan + " unit.");
}
// Output: STATUS: Target TIDAK tercapai.
// Output: Kekurangan: 20 unit.
// Sistem Evaluasi Availability Mesin
let availability = 76.5; // dalam persen
if (availability >= 90) {
    console.log("Kategori: WORLD CLASS");
    console.log("Rekomendasi: Pertahankan performa.");
} else if (availability >= 80) {
    console.log("Kategori: BAIK");
    console.log("Rekomendasi: Monitor secara berkala.");
} else if (availability >= 65) {
    console.log("Kategori: CUKUP");
    console.log("Rekomendasi: Lakukan preventive maintenance.");
} else {
    console.log("Kategori: BURUK");
    console.log("Rekomendasi: HENTIKAN PRODUKSI. Investigasi segera!");
}
// Hasil untuk availability=76.5: "CUKUP"
let kodeShift = 2; // Diambil dari input operator
switch (kodeShift) {
    case 1:
        console.log("Shift Pagi: 07:00 – 15:00");
        console.log("Supervisor: Bapak Ahmad");
        break; // WAJIB! Menghentikan eksekusi
    case 2:
        console.log("Shift Siang: 15:00 – 23:00");
        console.log("Supervisor: Ibu Ratna");
        break;
    case 3:
        console.log("Shift Malam: 23:00 – 07:00");
        console.log("Supervisor: Bapak Joko");
        break;
    default:
        console.log("KESALAHAN: Kode shift tidak valid!");
}

// Sintaks: kondisi ? nilai_jika_true : nilai_jika_false
let jumlahCacat = 8;
let batasCacat = 10;
// Cara panjang:
// let statusKualitas;
// if (jumlahCacat <= batasCacat) {
// statusKualitas = "LULUS";
// } else {
// statusKualitas = "GAGAL";
// }
// Cara ringkas dengan ternary:
let statusKualitas = jumlahCacat <= batasCacat ? "LULUS" : "GAGAL";
console.log(statusKualitas); // LULUS