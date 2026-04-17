const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');

// Endpoint API (Simulasi Database)
const API_URL = 'https://jsonplaceholder.typicode.com/users';

btnLoad.addEventListener('click', function () {
    // Tampilkan loading
    loading.classList.remove('d-none');
    container.innerHTML = ''; // Bersihkan konten lama

    // Fetch Data
    fetch(API_URL)
        .then(function (response) {
            // Cek jika response sukses (kode 200-299)
            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }

            // Parsing data JSON
            return response.json();
        })
        .then(function (dataKaryawan) {
            // Data berhasil didapat
            console.log(dataKaryawan); // Cek di console browser
            renderData(dataKaryawan);
        })
        .catch(function (error) {
            // Jika ada error (misal putus internet)
            container.innerHTML = `
                <div class="alert alert-danger">
                    Error: ${error.message}
                </div>
            `;
        })
        .finally(function () {
            // Sembunyikan loading (baik sukses maupun gagal)
            loading.classList.add('d-none');
        });
});

function renderData(data) {
    data.forEach(function (karyawan) {
        // Buat elemen card Bootstrap
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${karyawan.name}</h5>
                    <p class="card-text text-muted">
                        Email: ${karyawan.email}
                    </p>
                    <p class="card-text">
                        Perusahaan: ${karyawan.company.name}
                    </p>
                    <p class="card-text">
                        <small>Kota: ${karyawan.address.city}</small>
                    </p>
                   <button class="btn btn-sm btn-outline-primary" onclick="cariKaryawan(${karyawan.id})">
                        Detail Profil
                    </button>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

// Fungsi Async untuk mencari data spesifik
async function cariKaryawan(id) {
    try {
        console.log(`Mencari data ID: ${id}...`);

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
            throw new Error('Data tidak ditemukan');
        }

        const data = await response.json();
        console.log('Ditemukan:', data);

        // 1. Masukkan data yang didapat ke dalam elemen-elemen di HTML (Modal)
        document.getElementById('detailNama').innerText = data.name;
        document.getElementById('detailUsername').innerText = data.username;
        document.getElementById('detailEmail').innerText = data.email;
        document.getElementById('detailTelepon').innerText = data.phone;
        document.getElementById('detailWebsite').innerText = data.website;
        document.getElementById('detailPerusahaan').innerText = data.company.name;

        // Menggabungkan alamat agar lebih rapi
        document.getElementById('detailAlamat').innerText =
            `${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`;

        // 2. Memunculkan Pop-up Modal menggunakan sintaks bawaan Bootstrap JS
        const modalElement = document.getElementById('modalDetail');
        const modalInstance = new bootstrap.Modal(modalElement);
        modalInstance.show();

    } catch (error) {
        console.error(error);
        alert("Terjadi kesalahan: " + error.message);
    }
}
// Contoh pemanggilan: cariKaryawan(2);
// Anda bisa memanggil fungsi ini lewat console browser untuk tes.
