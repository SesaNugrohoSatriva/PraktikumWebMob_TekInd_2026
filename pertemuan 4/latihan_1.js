let gajiPokok = 2300000;
let jamLembur = 10;

let upahLemburPerJam = (1.5 * gajiPokok) / 173;
let totalUpahLembur = upahLemburPerJam * jamLembur;
let totalGaji = gajiPokok + totalUpahLembur;

console.log("Gaji Pokok: Rp " + gajiPokok);
console.log("Upah Lembur per Jam: Rp " + upahLemburPerJam.toFixed(2));
console.log("Total Upah Lembur: Rp " + totalUpahLembur.toFixed(2));
console.log("Total Gaji: Rp " + totalGaji.toFixed(2));
