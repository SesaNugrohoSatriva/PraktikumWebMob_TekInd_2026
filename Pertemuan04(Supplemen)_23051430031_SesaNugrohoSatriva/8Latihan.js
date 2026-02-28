// Kode mesin (tidak pernah berubah)
const kodeMesin = "MSN-001";

// Tahun pembuatan mesin
let tahunPembuatan = 2022;

// Status mesin saat ini (running/stop)
let statusMesin = "running";

// Kapasitas produksi per jam (dalam unit)
let kapasitasPerJam = 500;

// Persentase penggunaan kapasitas saat ini
let persentasePenggunaan = 75;

// Menampilkan semua variabel
console.log("=== DATA MESIN PRODUKSI ===");
console.log("Kode Mesin                    :", kodeMesin);
console.log("Tahun Pembuatan               :", tahunPembuatan);
console.log("Status Mesin                  :", statusMesin);
console.log("Kapasitas Produksi/Jam        :", kapasitasPerJam, "unit");
console.log("Penggunaan Kapasitas Saat Ini :", persentasePenggunaan + "%");
// Data awal
const hargaPerKg = 15000;
const kebutuhanPerUnit = 0.35;
const jumlahProduksi = 220;

// Perhitungan
const biayaPerUnit = hargaPerKg * kebutuhanPerUnit;
const totalBerat = kebutuhanPerUnit * jumlahProduksi;
const totalBiaya = totalBerat * hargaPerKg;

// Output
console.log("=== KALKULATOR BIAYA MATERIAL ===");
console.log("Biaya material per unit     : Rp " + biayaPerUnit.toLocaleString());
console.log("Total berat material        : " + totalBerat + " kg");
console.log("Total biaya material hari ini : Rp " + totalBiaya.toLocaleString());

// Input
const totalProduksi = 1000;
const jumlahReject = 35;

// Hitung reject rate
const rejectRate = (jumlahReject / totalProduksi) * 100;

let kategori = "";
let tindakan = "";

// Klasifikasi
if (rejectRate < 1) {
    kategori = "Excellent";
    tindakan = "Tidak ada tindakan";
} else if (rejectRate >= 1 && rejectRate <= 3) {
    kategori = "Acceptable";
    tindakan = "Monitor lebih ketat";
} else if (rejectRate > 3 && rejectRate <= 5) {
    kategori = "Warning";
    tindakan = "Investigasi proses";
} else {
    kategori = "Critical";
    tindakan = "Hentikan produksi, lakukan RCA";
}

// Output
console.log("=== SISTEM KLASIFIKASI REJECT ===");
console.log("Total Produksi :", totalProduksi, "unit");
console.log("Jumlah Reject  :", jumlahReject, "unit");
console.log("Reject Rate    :", rejectRate.toFixed(2) + "%");
console.log("Kategori       :", kategori);
console.log("Tindakan       :", tindakan);

// Data dasar
const gajiPokok = 3500000;
const jamKerjaNormal = 173;

// Hitung upah per jam
const upahPerJam = gajiPokok / jamKerjaNormal;

// Jumlah jam lembur (ubah sesuai kebutuhan)
let jamLembur = 2;

// Perhitungan lembur
let totalLembur = 0;

if (jamLembur <= 3) {
    totalLembur = jamLembur * 1.5 * upahPerJam;
} else {
    const lemburAwal = 3 * 1.5 * upahPerJam;
    const lemburSisa = (jamLembur - 3) * 2 * upahPerJam;
    totalLembur = lemburAwal + lemburSisa;
}

// Output
console.log("=== KALKULATOR UPAH LEMBUR ===");
console.log("Gaji Pokok            : Rp " + gajiPokok.toLocaleString());
console.log("Upah per Jam          : Rp " + upahPerJam.toFixed(2));
console.log("Jam Lembur            : " + jamLembur + " jam");
console.log("Total Upah Lembur     : Rp " + totalLembur.toLocaleString(undefined, { maximumFractionDigits: 0 }));

// Variabel suhu (0–120)
let suhuSaatIni = 95;

// Variabel shift (pagi / siang / malam)
let shift = "malam";

let status = "";
let rekomendasi = "";
let pesanTambahan = "";

// Klasifikasi suhu
if (suhuSaatIni >= 0 && suhuSaatIni <= 40) {
    status = "Normal";
    rekomendasi = "Mesin dalam kondisi ideal";
} else if (suhuSaatIni <= 70) {
    status = "Operasional";
    rekomendasi = "Kondisi kerja standar";
} else if (suhuSaatIni <= 90) {
    status = "Panas";
    rekomendasi = "Aktifkan pendingin tambahan";
} else if (suhuSaatIni <= 100) {
    status = "Kritis";
    rekomendasi = "Kurangi beban mesin segera";
} else {
    status = "Darurat";
    rekomendasi = "Hentikan mesin dan evakuasi area";
}

// Kondisi tambahan
if ((status === "Kritis" || status === "Darurat") && shift === "malam") {
    pesanTambahan = "Segera hubungi teknisi on-call.";
}

// Output
console.log("=== SIMULASI SENSOR SUHU ===");
console.log("Suhu Saat Ini :", suhuSaatIni + "°C");
console.log("Shift         :", shift);
console.log("Status        :", status);
console.log("Rekomendasi   :", rekomendasi);

if (pesanTambahan !== "") {
    console.log("Pesan Khusus  :", pesanTambahan);
}

// Data tiga mesin
const mesinA = {
    nama: "Mesin A",
    jamOperasional: 2500,
    breakdown: 7
};

const mesinB = {
    nama: "Mesin B",
    jamOperasional: 1800,
    breakdown: 6
};

const mesinC = {
    nama: "Mesin C",
    jamOperasional: 1200,
    breakdown: 2
};

// Fungsi menentukan prioritas
function tentukanPrioritas(mesin) {
    let prioritas = "";

    if (mesin.jamOperasional > 2000 && mesin.breakdown > 5) {
        prioritas = "PRIORITAS TINGGI";
    } else if (mesin.jamOperasional > 2000 || mesin.breakdown > 5) {
        prioritas = "PRIORITAS SEDANG";
    } else {
        prioritas = "PRIORITAS RENDAH";
    }

    console.log("=== " + mesin.nama + " ===");
    console.log("Jam Operasional :", mesin.jamOperasional, "jam");
    console.log("Frekuensi Breakdown :", mesin.breakdown, "kali");
    console.log("Hasil :", prioritas);
    console.log("-----------------------------");
}

// Jalankan untuk masing-masing mesin
tentukanPrioritas(mesinA);
tentukanPrioritas(mesinB);
tentukanPrioritas(mesinC);