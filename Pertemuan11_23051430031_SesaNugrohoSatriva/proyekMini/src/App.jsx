import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import NotFound from './Halaman/NotFound';
import Navbar from './Komponen/Navbar';
import InventoriDetail from './Halaman/InventoriDetail';
import LaporanKualitas from './Halaman/LaporanKualitas';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Route yang tepat akan di-render */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventori" element={<Inventori />} />
        <Route path="/inventori/:id" element={<InventoriDetail />} />
        <Route path="/laporan-kualitas" element={<LaporanKualitas />} />
        
        {/* Route untuk semua path lainnya (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;