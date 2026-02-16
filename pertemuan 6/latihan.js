// 1. Seleksi Elemen DOM
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');
const statusIndicator = document.getElementById('statusIndicator');
const suhuMesin = document.getElementById('suhuMesin');
const teksStatus = statusIndicator.querySelector('strong'); // Mengambil elemen <strong> di dalam alert
// Membuat seleksi elemen DOM untuk btnMaintenance dan card(latihan 1)
const btnMaintenance = document.getElementById('btnMaintenance');
const card = document.querySelector('.card');

// Variabel State
let suhu = 25;
let intervalId = null; // Untuk menyimpan ID timer
// Event Listener Tombol START
btnStart.addEventListener('click', function () {// Ubah UI Status
    statusIndicator.className = 'alert alert-success'; // Ganti class Bootstrap (Hijau)
    teksStatus.innerText = 'RUNNING';

    // Logika simulasi kenaikan suhu
    intervalId = setInterval(function () {
        suhu += 1;
        suhuMesin.innerText = suhu + " °C";

        // Peringatan jika suhu overheat
        if (suhu > 80) {
            statusIndicator.className = 'alert alert-danger';
            teksStatus.innerText = 'OVERHEAT WARNING';
            suhuMesin.style.color = 'red';
        }
    }, 1000); // Jalankan setiap 1 detik

    // Matikan tombol Start agar tidak double click
    btnStart.disabled = true;
    btnStop.disabled = false;
});
// Event Listener Tombol STOP
btnStop.addEventListener('click', function () {
    clearInterval(intervalId); // Hentikan timer kenaikan suhu
    statusIndicator.className = 'alert alert-danger'; // Mengubah warna menjadi merah (latihan 1)
    teksStatus.innerText = 'STOPPED';

    // Reset tombol
    btnStart.disabled = false;
    btnStop.disabled = true;
});
// Event Listener Tombol RESET
btnReset.addEventListener('click', function () {
    clearInterval(intervalId);
    suhu = 25;
    suhuMesin.innerText = suhu + " °C";
    suhuMesin.style.color = 'black';
    statusIndicator.className = 'alert alert-warning'; // Mengubah warna menjadi orange(latihan 1)
    teksStatus.innerText = 'UNKNOWN';

    btnStart.disabled = false;
    btnStop.disabled = true;
});
// Membuat even listener untuk button btnMaintenance agar ketika di click akan merubah warna card menjadi abu-abu 
btnMaintenance.addEventListener('click', function () {
    clearInterval(intervalId); // Hentikan proses jika sedang berjalan
    card.classList.add('bg-light'); // Ubah background card menjadi abu-abu

    // Ubah status
    statusIndicator.className = 'alert alert-secondary';
    teksStatus.innerText = 'MAINTENANCE';

    // Nonaktifkan tombol START & STOP
    btnStart.disabled = true;
    btnStop.disabled = true;
});


const inputRPM = document.getElementById('inputRPM');
const pesanError = document.getElementById('pesanError');
inputRPM.addEventListener('input', function () {
    let val = parseInt(this.value);

    if (val > 2000) {
        pesanError.classList.remove('d-none'); // Tampilkan pesan error
        this.classList.add('is-invalid'); // Berikan border merah Bootstrap
    } else {
        pesanError.classList.add('d-none'); // Sembunyikan pesan
        this.classList.remove('is-invalid');
    }
});