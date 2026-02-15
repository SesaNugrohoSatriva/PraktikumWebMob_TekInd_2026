// a. Buat Array of Objects bernama `antrianMesin`. Isi dengan 3 object job: `{idJob:"J01", namaProses: "Drilling", durasi: 30}`.
let antrianMesin = [
    { idJob: "J01", namaProses: "Drilling", durasi: 30 }
];

// b. Buat function `prosesAntrian(antrian)` yang menerima parameter array tersebut
function prosesAntrian(antrianMesin) {
    for (let i = 0; i < antrianMesin.length; i++) {
        let job = antrianMesin[i];
        console.log(
            "Memproses Job " + job.idJob +
            " - " + job.namaProses +
            " selama " + job.durasi + " menit"
        );
    }
}

// c. Di dalam function, tampilkan pesan: "Memproses Job [ID] - [Nama] selama [durasi]menit" untuk setiap job dalam antrian.
console.log("--- List Job Awal ---")
prosesAntrian(antrianMesin);

// d. Tambahkan 1 job baru ke array dan panggil function lagi.
antrianMesin.push({
    idJob: "J02",
    namaProses: "Milling",
    durasi: 25
});

console.log("--- Setelah Menambahkan Job Baru ---");

// Panggil kembali function
prosesAntrian(antrianMesin);
