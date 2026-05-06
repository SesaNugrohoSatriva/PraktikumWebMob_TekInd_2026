import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import NotFound from './Halaman/NotFound';
import Navbar from './Komponen/Navbar'; 

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Route yang tepat akan di-render */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventori" element={<Inventori />} />

        {/* Route untuk semua path lainnya (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;