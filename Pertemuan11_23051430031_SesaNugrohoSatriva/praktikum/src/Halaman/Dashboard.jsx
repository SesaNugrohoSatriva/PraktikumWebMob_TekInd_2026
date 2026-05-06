import React from 'react';
import { Link } from 'react-router-dom';
function Dashboard() {
    return (
        <div className="container mt-4">
            <h1>Dashboard Utama Pabrik</h1>
            <p>Selamat datang di sistem monitoring terpadu.</p>
            <Link to="/inventori" className="btn btn-primary">
                Ke Halaman Inventori
            </Link>
        </div>
    );
}
export default Dashboard;