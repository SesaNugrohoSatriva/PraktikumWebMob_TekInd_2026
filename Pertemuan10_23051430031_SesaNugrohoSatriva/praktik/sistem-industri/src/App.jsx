import React from 'react';
import KartuKaryawan from './komponen/KartuKaryawan.jsx';
import KartuMesin from './komponen/KartuMesin.jsx';
import CounterProduksi from './komponen/CounterProduksi.jsx';
import JamDigital from './komponen/JamDigital.jsx';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eef2f7, #dfe9f3)',
        display: 'flex',
        justifyContent: 'center'
      }}
      className="py-5"
    >
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* HEADER */}
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ letterSpacing: '0.5px' }}>
            Sesa Nugroho Satriva
          </h1>
          <div className="text-muted mb-2">23051430031</div>

          <span
            className="badge px-4 py-2"
            style={{
              backgroundColor: '#2563eb',
              fontSize: '14px',
              borderRadius: '8px'
            }}
          >
            Praktikum Pertemuan 10 Apliksi Web Mobile
          </span>
        </div>

        {/* SECTION MESIN */}
        <div
          className="card border-0 mb-5"
          style={{
            borderRadius: '16px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
          }}
        >
          <div className="card-body p-4">
            <h3 className="text-center fw-semibold mb-4">
              Praktik 3 (Pembuatan form input state pada Monitoring Lini Produksi A)
            </h3>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="h-100 hover-card">
                  <KartuMesin
                    nama="CNC-Turning-01"
                    status="Running"
                    produksi={150}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="h-100 hover-card">
                  <KartuMesin
                    nama="CNC-Milling-02"
                    status="Maintenance"
                    produksi={0}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="h-100 hover-card">
                  <KartuMesin
                    nama="Press-Hydraulic-05"
                    status="Stop"
                    produksi={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION KARYAWAN */}
        <div
          className="card border-0 mb-5"
          style={{
            borderRadius: '16px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
          }}
        >
          <div className="card-body p-4">
            <h3 className="text-center fw-semibold mb-4">
              Proyek Mini Pertemuan 09 — Kartu Karyawan
            </h3>

            <div className="row g-4">
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
        </div>

        {/* SECTION COUNTER */}
        {/* Section Counter Produksi */}
        <div
          className="card border-0 mb-4"
          style={{
            borderRadius: '16px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
          }}
        >
          <div className="card-body p-4 text-center">
            <h3 className="fw-semibold mb-3">Praktik 1 (Pembuatan Counter Produksi)</h3>

            <div
              style={{
                background: '#f8fafc',
                borderRadius: '12px',
                padding: '20px'
              }}
            >
              <CounterProduksi />
            </div>
          </div>
        </div>

        {/* Section Jam Digital */}
        <div
          className="card border-0"
          style={{
            borderRadius: '16px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
          }}
        >
          <div className="card-body p-4 text-center">
            <h3 className="fw-semibold mb-3">Praktik 2 (Pembuatan Jam Digital)</h3>

            <div
              style={{
                background: '#f8fafc',
                borderRadius: '12px',
                padding: '20px'
              }}
            >
              <JamDigital />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;