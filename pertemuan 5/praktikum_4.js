// Array berisi object
let gudangMaterial = [
    { kode: "MAT-01", nama: "Baja Ringan", stock: "50", satuan:"Batang"},
    { kode: "MAT-02", nama: "Plastik ABS", stock: "120", satuan:"Kg"},
    { kode: "MAT-03", nama: "Oli Mesin", stock: "10", satuan:"Liter"}
];

console.log("--- Cek Stok Gudang ---");

// Menggunakan forEach untuk iterasi array object
gudangMaterial.forEach(function(item){
    console.log(item.kode + " - " + item.nama + " : " + item.stock + " : " + item.satuan);

    // Logika Re-order
    if (item.stock < 20) {
        console.log(" >>> PERINGATAN: Stok "+ item.nama + " menipis! Segera PO.");
    }
});