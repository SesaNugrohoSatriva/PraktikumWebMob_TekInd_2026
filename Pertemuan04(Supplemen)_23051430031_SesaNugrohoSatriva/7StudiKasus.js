// ============================================
// KALKULATOR OEE — Sistem Monitoring Mesin
// ============================================
// --- DATA INPUT (Simulasi data shift) ---
const MESIN_ID = 'CNC-Turning-03';
const TANGGAL = '2026-02-15';
let jamPlanned = 8; // Jam kerja yang direncanakan
let jamAktual = 6.8; // Jam mesin benar-benar berjalan
let produksiTarget = 400; // Unit target per shift
let produksiAktual = 360; // Unit yang dihasilkan
let produkBagus = 345; // Unit yang lolos QC
// --- PERHITUNGAN ---
let availability = (jamAktual / jamPlanned) * 100;
let performance = (produksiAktual / produksiTarget) * 100;
let quality = (produkBagus / produksiAktual) * 100;
let oee = (availability / 100) * (performance / 100) * (quality / 100) * 100;
// --- TAMPILKAN LAPORAN ---
console.log('=== LAPORAN OEE ===');
console.log(`Mesin : ${MESIN_ID}`);
console.log(`Tanggal : ${TANGGAL}`);
console.log('-------------------');
console.log(`Availability : ${availability.toFixed(1)}%`);
console.log(`Performance : ${performance.toFixed(1)}%`);
console.log(`Quality : ${quality.toFixed(1)}%`);
console.log('-------------------');
console.log(`OEE : ${oee.toFixed(1)}%`);
// --- EVALUASI & REKOMENDASI ---
console.log('');
console.log('=== EVALUASI ===');
if (oee >= 85) {
    console.log('Status: WORLD CLASS ⭐');
    console.log('Rekomendasi: Pertahankan performa. Bagikan best practice ke lini lain.');
} else if (oee >= 65) {
    console.log('Status: CUKUP BAIK');
    console.log('Rekomendasi: Identifikasi bottleneck utama dan buat improvement plan.');
} else {
    console.log('Status: PERLU PERHATIAN ⚠');
    console.log('Rekomendasi: Lakukan Root Cause Analysis (RCA) segera!');
}
// --- PERINGATAN SPESIFIK ---
if (availability < 80) {
    console.log('');
    console.log('TINDAKAN: Availability rendah → Cek breakdown & setup time.');
}
if (quality < 95) {
    console.log('');
    console.log('TINDAKAN: Quality rendah → Review parameter mesin & material.');
}