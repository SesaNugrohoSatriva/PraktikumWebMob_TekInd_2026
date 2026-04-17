const btnLoad = document.getElementById('btnLoad');
const btnTambah = document.getElementById('btnTambah');
const container = document.getElementById('containerLaporan');
const loading = document.getElementById('loading');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// 1.siapkan 10 data simulasi berbahasa Indonesia 
const dataInsidenReal = [
    { title: "Mesin Produksi A Rusak", body: "Mesin tiba-tiba berhenti beroperasi saat produksi berjalan. Terdengar suara decit keras dari arah motor utama." },
    { title: "Kebocoran Pipa Pendingin", body: "Ditemukan genangan air yang cukup luas di area lorong sektor B akibat pipa pendingin yang bocor." },
    { title: "Korsleting Listrik Panel", body: "Panel listrik zona C mengeluarkan percikan api dan bau hangus. Aliran listrik sementara dipadamkan." },
    { title: "Suhu Server Room Kritis", body: "AC di ruang server utama mati, menyebabkan suhu ruangan naik drastis melampaui ambang batas." },
    { title: "Jaringan Intranet Terputus", body: "Koneksi jaringan lokal di gedung operasional terputus total, menghambat sinkronisasi data antar divisi." },
    { title: "Conveyor Belt Macet", body: "Jalur perakitan terhenti karena conveyor belt tersangkut material sisa produksi di Line 2." },
    { title: "Sensor Asap Aktif Error", body: "Alarm sensor asap di gudang bahan baku berbunyi secara acak tanpa adanya titik api yang terlihat." },
    { title: "Forklift Logistik Mogok", body: "Kendaraan forklift nomor 4 tidak bisa dihidupkan, menghambat laju jalur distribusi barang jadi ke truk." },
    { title: "Sistem Database Crash", body: "Aplikasi pencatatan stok barang (ERP) tidak dapat diakses, muncul error 500 di layar semua admin." },
    { title: "Pintu Otomatis Rusak", body: "Pintu akses otomatis di loading dock macet, menutup setengah dan tidak bisa merespon sensor gerak." }
];

btnLoad.addEventListener('click', function () {
    loading.classList.remove('d-none');
    container.innerHTML = '';

    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) throw new Error('Gagal mengambil data laporan');
            return response.json();
        })
        .then(function (dataLaporan) {
            // 2. 10 data dari API, lalu kita "timpa/ganti" judul dan isinya dengan bahasa Indonesia
            const sepuluhLaporan = dataLaporan.slice(0, 10).map((item, index) => {
                return {
                    id: item.id,
                    title: dataInsidenReal[index].title,
                    body: dataInsidenReal[index].body
                };
            });

            renderData(sepuluhLaporan);
        })
        .catch(function (error) {
            container.innerHTML = `<div class="alert alert-danger w-100">Error: ${error.message}</div>`;
        })
        .finally(function () {
            loading.classList.add('d-none');
        });
});

function renderData(data) {
    data.forEach(function (laporan) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        // Menambahkan ID unik ke div card (id="card-${laporan.id}") dan button (id="btn-${laporan.id}")
        col.innerHTML = `
            <div id="card-${laporan.id}" class="card h-100 shadow-sm border-0 bg-white transition-all">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold text-danger">${laporan.title}</h5>
                    <p class="card-text text-muted flex-grow-1">
                        ${laporan.body}
                    </p>
                    <button id="btn-${laporan.id}" class="btn btn-warning mt-3 fw-bold" onclick="tindakLanjut(${laporan.id}, '${laporan.title}')">
                        Tindak Lanjut
                    </button>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

// 4. Memodifikasi alert dan mengubah warna card
function tindakLanjut(id, judul) {
    // Tampilkan notifikasi terlebih dahulu
    alert(`[NOTIFIKASI SISTEM]\n\nTiket ID: #${id}\nKendala: ${judul}\n\nStatus: Sedang diproses oleh Tim Maintenance. Mohon tunggu update selanjutnya!`);

    // Cari elemen card berdasarkan ID yang diklik
    const cardElement = document.getElementById(`card-${id}`);
    const btnElement = document.getElementById(`btn-${id}`);

    if (cardElement && btnElement) {
        cardElement.classList.remove('bg-white');
        cardElement.classList.add('bg-warning', 'bg-opacity-25', 'border', 'border-warning');

        btnElement.classList.remove('btn-warning');
        btnElement.classList.add('btn-success');
        btnElement.innerText = "✓ Sedang Diproses";
        btnElement.disabled = true;
    }
}