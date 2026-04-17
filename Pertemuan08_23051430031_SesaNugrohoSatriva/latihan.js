const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');
const formTambah = document.getElementById('formTambahKaryawan'); // Menangkap form di dalam modal

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
                <div class="alert alert-danger w-100">
                    Error: ${error.message}
                </div>
            `;
        })
        .finally(function () {
            // Sembunyikan loading (baik sukses maupun gagal)
            loading.classList.add('d-none');
        });
});

// Event Listener untuk Form (Latihan 1 Dimodifikasi agar Dinamis)
formTambah.addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah halaman refresh

    // Mengambil data dari inputan form user
    const dataBaru = {
        name: document.getElementById('inputNama').value,
        email: document.getElementById('inputEmail').value,
        company: {
            name: document.getElementById('inputPerusahaan').value
        },
        address: {
            city: document.getElementById('inputKota').value
        }
    };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBaru)
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Gagal menambahkan data');
            }
            return response.json();
        })
        .then(function (result) {
            console.log("Response dari server:", result);

            // Tutup modal form setelah sukses
            const modalElement = document.getElementById('modalTambah');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();

            // Kosongkan isian form
            formTambah.reset();

            // Tampilkan data baru ke layar (dikirim dengan status isNew = true)
            renderData([result], true);
            alert("Data berhasil dikirim dan ditambahkan ke halaman!");
        })
        .catch(function (error) {
            console.error(error);
            alert("Terjadi kesalahan: " + error.message);
        });
});

// Parameter isNew ditambahkan untuk membedakan data API awal dan data baru dari form
function renderData(data, isNew = false) {
    let dataYangAkanDirender = data;

    // Filter kota "s" HANYA berlaku untuk data awal dari API. 
    // Data baru dari form akan di-bypass agar selalu tampil saat diuji coba.
    if (!isNew) {
        dataYangAkanDirender = data.filter(function (karyawan) {
            return karyawan.address.city.toLowerCase().includes('s');
        });
        console.log("Setelah filter:", dataYangAkanDirender);
    }

    // render hasil
    dataYangAkanDirender.forEach(function (karyawan) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        // Berikan border hijau (border-success) jika ini adalah data yang baru diinput
        col.innerHTML = `
            <div class="card h-100 shadow-sm ${isNew ? 'border-success border-2' : ''}">
                <div class="card-body">
                    <h5 class="card-title">${karyawan.name}</h5>
                    <p class="card-text text-muted mb-1">
                        Email: ${karyawan.email}
                    </p>
                    <p class="card-text mb-1">
                        Perusahaan: ${karyawan.company.name}
                    </p>
                    <p class="card-text">
                        <small>Kota: ${karyawan.address.city}</small>
                    </p>
                </div>
            </div>
        `;

        // Jika data baru, letakkan di urutan paling atas. Jika data lama, letakkan di bawah.
        if (isNew) {
            container.prepend(col);
        } else {
            container.appendChild(col);
        }
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

        alert(
            `Ditemukan: ${data.name} - bekerja di ${data.company.name}`
        );
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}