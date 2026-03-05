document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".format-rupiah").forEach(function (input) {
        input.addEventListener("input", function () {
            let angka = this.value.replace(/\D/g, "");
            if (angka === "") {
                this.value = "";
                return;
            }
            this.value = new Intl.NumberFormat("id-ID").format(angka);
        });
    });
    document.getElementById("formProduksi").addEventListener("submit", function (event) {

        event.preventDefault();

        // Ambil elemen output lebih awal
        let output = document.getElementById("hasilOutput");

        // Fungsi untuk mengubah format ribuan menjadi angka
        function parseRupiah(value) {
            return Number(value.replace(/\./g, ""));
        }

        // Field input (hapus titik sebelum konversi)
        let biayaBahanBaku = parseRupiah(document.getElementById("bahanBaku").value);
        let biayaTenagaKerja = parseRupiah(document.getElementById("tenagaKerja").value);
        let biayaOverhead = parseRupiah(document.getElementById("overhead").value);
        let jumlahProduksi = Number(document.getElementById("jumlahProduksi").value);

        // Validasi jumlah produksi
        if (jumlahProduksi <= 0 || isNaN(jumlahProduksi)) {
            output.textContent = "Jumlah produksi tidak valid.";
            console.log("Jumlah produksi tidak valid.");
            return;
        }

        // Perhitungan biaya total per unit
        let totalPerUnit =
            (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

        // Logika status produksi
        let status;
        if (jumlahProduksi < 100) {
            status = "Biaya Tinggi (Ekonomi Skala Kecil)";
        } else {
            status = "Biaya Efisien";
        }

        // Tampilkan ke website
        output.innerHTML =
            "Total Biaya per Unit: Rp " +
            totalPerUnit.toLocaleString("id-ID", { minimumFractionDigits: 2 }) +
            "<br>Status Produksi: " + status;

        // Tampilkan ke console
        console.log("===== HASIL PERHITUNGAN =====");
        console.log("Biaya Bahan Baku: Rp", biayaBahanBaku.toLocaleString("id-ID"));
        console.log("Biaya Tenaga Kerja: Rp", biayaTenagaKerja.toLocaleString("id-ID"));
        console.log("Biaya Overhead: Rp", biayaOverhead.toLocaleString("id-ID"));
        console.log("Jumlah Produksi:", jumlahProduksi, "unit");
        console.log("Total Biaya per Unit: Rp", totalPerUnit.toFixed(2));
        console.log("Status Produksi:", status);
        console.log("=============================");
    });
});