let daftarCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"];

let jumlahC001 = 0;

for (let i = 0; i < daftarCacat.length; i++) {
    if (daftarCacat[i] === "C-001") {
        jumlahC001++;
    }
}

console.log("Jumlah kemunculan C-001: " + jumlahC001);
