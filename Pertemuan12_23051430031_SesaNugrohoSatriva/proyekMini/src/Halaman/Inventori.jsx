import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Inventori() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(data => {
                    setProducts(data.slice(0, 5));
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                });
        }, 1000);
    }, []);

    if (loading) {
        return (
            <div className="container-fluid py-4">
                <div className="card border-0 shadow-sm rounded-4 p-4">
                    <h5 className="mb-0">Memuat data inventori...</h5>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid py-4">

            {/* Header */}
            <div
                className="p-4 rounded-4 shadow-sm text-white mb-4"
                style={{
                    background: 'linear-gradient(135deg, #1e3c72, #2a5298)'
                }}
            >
                <h1 className="fw-bold mb-2">Data Inventori</h1>
                <p className="mb-0 opacity-75">
                    Monitoring stok bahan baku produksi
                </p>
            </div>

            {/* Statistik */}
            <div className="row mb-4">

                <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body">
                            <h6 className="text-muted">Total Item</h6>
                            <h2 className="fw-bold">{products.length}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body">
                            <h6 className="text-muted">Supplier Aktif</h6>
                            <h2 className="fw-bold text-success">12</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body">
                            <h6 className="text-muted">Status Gudang</h6>
                            <h2 className="fw-bold text-primary">Stabil</h2>
                        </div>
                    </div>
                </div>

            </div>

            {/* Table Card */}
            <div className="card border-0 shadow-sm rounded-4">

                <div className="card-header bg-white border-0 pt-4 px-4">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <div>
                            <h4 className="fw-bold mb-1">
                                Inventori Bahan Baku
                            </h4>
                            <p className="text-muted mb-0">
                                Data stok dan supplier bahan produksi
                            </p>
                        </div>

                        <Link
                            to="/"
                            className="btn btn-primary rounded-pill px-4"
                        >
                            Kembali
                        </Link>
                    </div>
                </div>

                <div className="card-body">

                    <div className="table-responsive">
                        <table className="table align-middle">

                            <thead
                                style={{
                                    backgroundColor: '#eaf4ff'
                                }}
                            >
                                <tr>
                                    <th>ID Item</th>
                                    <th>Nama Bahan</th>
                                    <th>Status Supplier</th>
                                </tr>
                            </thead>

                            <tbody>
                                {products.map((item) => (
                                    <tr key={item.id}>

                                        <td className="fw-semibold">
                                            #{item.id}
                                        </td>

                                        <td>
                                            <Link
                                                to={`/inventori/${item.id}`}
                                                className="text-decoration-none fw-semibold"
                                            >
                                                {item.title}
                                            </Link>
                                        </td>

                                        <td>
                                            <span className="badge bg-success px-3 py-2 rounded-pill">
                                                Available
                                            </span>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Inventori;