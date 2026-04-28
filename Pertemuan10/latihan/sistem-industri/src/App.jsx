import React from 'react';
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
            Latihan Pertemuan 10 Apliksi Web Mobile
          </span>
        </div>

        {/* Section Counter Produksi */}
        <div
          className="card border-0 mb-4"
          style={{
            borderRadius: '16px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
          }}
        >
          <div className="card-body p-4 text-center">
            <h3 className="fw-semibold mb-3">Latihan 2 Penambahan button emergency stop di Counter Produksi</h3>

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
            <h3 className="fw-semibold mb-3">
              Latihan 1 Modifikasi Jam Digital penambahan state kota dengan dependency array useEffect
            </h3>

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