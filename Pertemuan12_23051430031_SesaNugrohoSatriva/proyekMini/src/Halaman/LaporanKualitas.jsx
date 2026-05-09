import React from 'react';

function LaporanKualitas() {

    const dataCacat = [
        { id: 1, produk: 'Baut A', jenis: 'Retak', jumlah: 5 },
        { id: 2, produk: 'Mur B', jenis: 'Ukuran Tidak Sesuai', jumlah: 3 },
        { id: 3, produk: 'Plat C', jenis: 'Goresan', jumlah: 8 },
    ];

    return (
        <div className="container-fluid px-3 px-md-4 mt-4">

            <div className="row justify-content-center">

                <div className="col-12 col-lg-9">

                    <div
                        className="card border-0 shadow-lg overflow-hidden"
                        style={{
                            borderRadius: '16px'
                        }}
                    >

                        {/* Header */}
                        <div
                            className="p-3 p-md-4 text-white"
                            style={{
                                background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
                            }}
                        >

                            <h4
                                className="mb-1 fw-bold"
                                style={{
                                    fontSize: 'clamp(1.3rem, 4vw, 1.8rem)'
                                }}
                            >
                                Laporan Kualitas
                            </h4>

                            <small className="opacity-75">
                                Data cacat produk produksi
                            </small>

                        </div>

                        {/* Body */}
                        <div className="p-2 p-md-4">

                            <div className="table-responsive">

                                <table
                                    className="table align-middle mb-0"
                                    style={{
                                        minWidth: '650px'
                                    }}
                                >

                                    <thead className="table-info">

                                        <tr>
                                            <th>ID</th>
                                            <th>Produk</th>
                                            <th>Jenis Cacat</th>
                                            <th className="text-center">
                                                Jumlah
                                            </th>
                                            <th className="text-center">
                                                Status
                                            </th>
                                        </tr>

                                    </thead>

                                    <tbody>

                                        {dataCacat.map(item => (

                                            <tr key={item.id}>

                                                <td>{item.id}</td>

                                                <td className="fw-semibold text-nowrap">
                                                    {item.produk}
                                                </td>

                                                <td>
                                                    {item.jenis}
                                                </td>

                                                <td className="text-center fw-bold">
                                                    {item.jumlah}
                                                </td>

                                                <td className="text-center">

                                                    <span
                                                        className={`badge ${item.jumlah > 5
                                                            ? 'bg-danger'
                                                            : 'bg-success'
                                                            }`}
                                                    >
                                                        {item.jumlah > 5
                                                            ? 'Tinggi'
                                                            : 'Normal'}
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

        </div>
    );
}

export default LaporanKualitas;