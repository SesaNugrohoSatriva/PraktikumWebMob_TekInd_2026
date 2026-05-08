import React from 'react';

function LaporanKualitas() {
    const dataCacat = [
        { id: 1, produk: 'Baut A', jenis: 'Retak', jumlah: 5 },
        { id: 2, produk: 'Mur B', jenis: 'Ukuran Tidak Sesuai', jumlah: 3 },
        { id: 3, produk: 'Plat C', jenis: 'Goresan', jumlah: 8 },
    ];

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-9">

                    <div className="card border-0 shadow-lg" style={{ borderRadius: '16px' }}>

                        {/* Header */}
                        <div
                            className="p-4 text-white"
                            style={{
                                background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
                                borderTopLeftRadius: '16px',
                                borderTopRightRadius: '16px'
                            }}
                        >
                            <h4 className="mb-1 fw-bold">Laporan Kualitas</h4>
                            <small className="opacity-75">Data cacat produk produksi</small>
                        </div>

                        {/* Body */}
                        <div className="p-4">

                            <table className="table align-middle ">
                                <thead className="table-info">
                                    <tr>
                                        <th>ID</th>
                                        <th>Produk</th>
                                        <th>Jenis Cacat</th>
                                        <th className="text-center">Jumlah</th>
                                        <th className="text-center">Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {dataCacat.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td className="fw-semibold">{item.produk}</td>
                                            <td>{item.jenis}</td>

                                            <td className="text-center fw-bold">
                                                {item.jumlah}
                                            </td>

                                            <td className="text-center">
                                                <span className={`badge ${item.jumlah > 5 ? 'bg-danger' : 'bg-success'
                                                    }`}>
                                                    {item.jumlah > 5 ? 'Tinggi' : 'Normal'}
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
        </div>
    );
}

export default LaporanKualitas;