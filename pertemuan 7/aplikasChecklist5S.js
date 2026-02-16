// Seleksi Elemen
const formAudit = document.getElementById('formAudit');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');

const STORAGE_KEY = 'DATA_AUDIT_5S';

// Load data saat halaman dibuka
document.addEventListener('DOMContentLoaded', function () {
    loadDataFromStorage();
});

// Event Submit Form
formAudit.addEventListener('submit', function (event) {
    event.preventDefault();

    const auditor = document.getElementById('auditor').value;

    const checklist = [
        document.getElementById('seiri').checked,
        document.getElementById('seiton').checked,
        document.getElementById('seiso').checked,
        document.getElementById('seiketsu').checked,
        document.getElementById('shitsuke').checked
    ];

    // Hitung jumlah checklist yang dicentang
    const totalCentang = checklist.filter(item => item).length;

    // Hitung skor
    const skor = (totalCentang / 5) * 100;

    const dataBaru = {
        id: Date.now(),
        tanggal: new Date().toLocaleDateString(),
        auditor: auditor,
        skor: skor
    };

    saveData(dataBaru);
    formAudit.reset();
    loadDataFromStorage();
});

// Simpan ke LocalStorage
function saveData(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    dataLama.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}

// Load dan render tabel
function loadDataFromStorage() {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    tabelBody.innerHTML = '';

    data.forEach(function (item) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.tanggal}</td>
            <td>${item.auditor}</td>
            <td>${item.skor}%</td>
            <td>
                <button class="btn btn-sm btn-danger"
                onclick="hapusData(${item.id})">Hapus</button>
            </td>
        `;
        tabelBody.appendChild(row);
    });
}

// Hapus satu data
window.hapusData = function (id) {
    if (confirm('Yakin ingin menghapus data audit ini?')) {
        let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        let dataBaru = data.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
        loadDataFromStorage();
    }
}

// Hapus semua data
btnHapusSemua.addEventListener('click', function () {
    if (confirm('Semua riwayat audit akan dihapus permanen!')) {
        localStorage.removeItem(STORAGE_KEY);
        loadDataFromStorage();
    }
});
