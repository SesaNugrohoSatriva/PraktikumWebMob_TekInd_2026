function hitungLingkaran(jariJari) {
    const phi = Math.PI;
    const luas = phi * jariJari * jariJari;
    const keliling = 2 * phi * jariJari;

    return {
        luas: luas,
        keliling: keliling
    };
}

jariJari = 9;
let hasil = hitungLingkaran(jariJari);

console.log("Jari-jari lingkaran: " + jariJari)
console.log("Luas Lingkaran: " + hasil.luas.toFixed(2));
console.log("Keliling Lingkaran: " + hasil.keliling.toFixed(2));
