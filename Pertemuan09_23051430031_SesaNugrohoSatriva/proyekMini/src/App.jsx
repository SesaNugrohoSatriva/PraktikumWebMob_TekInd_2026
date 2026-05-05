import React from 'react';
import KartuKaryawan from './komponen/KartuKaryawan.jsx';

function App() {
  return (
    <div className="container mt-3">
      <h1 className="text-center mb-4">Sesa Nugroho Satriva</h1>
      <h1 className="text-center mb-4">23051430031</h1>
      <h2 className="text-center mb-4">Proyek Mini(Kartu Karyawan)</h2>
      <div className="row">
        <div className="col-md-4">
          <KartuKaryawan
            nama="Budi Santoso"
            jabatan="Manager"
            bagian="Produksi"
          />
        </div>

        <div className="col-md-4">
          <KartuKaryawan
            nama="Andi Pratama"
            jabatan="Operator"
            bagian="Mesin"
          />
        </div>

        <div className="col-md-4">
          <KartuKaryawan
            nama="Siti Rahma"
            jabatan="QC"
            bagian="Quality Control"
          />
        </div>
      </div>
    </div>
  );
}

export default App;