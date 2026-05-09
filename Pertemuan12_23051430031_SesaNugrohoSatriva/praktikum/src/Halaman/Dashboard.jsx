import React from 'react';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import KartuMesin from '../Komponen/KartuMesin';

function Dashboard() {
    return (
        <div className="container-fluid py-4">

            {/* Header */}
            <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">

                <div>
                    <h2 className="fw-bold mb-0">
                        Dashboard Pintar 4.0
                    </h2>
                </div>
            </div>

            {/* Grafik dan KPI */}
            <div className="row g-4 mb-4">

                {/* Grafik */}
                <div className="col-lg-8">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body">
                            <GrafikProduksi />
                        </div>
                    </div>
                </div>

                {/* KPI */}
                <div className="col-lg-4">

                    <div className="card bg-primary text-white shadow-sm border-0 mb-3">
                        <div className="card-body">
                            <h6 className="text-uppercase mb-2">
                                Total Output Hari Ini
                            </h6>

                            <h2 className="fw-bold">1,030 Unit</h2>

                            <small>
                                Update terakhir: 13:00
                            </small>
                        </div>
                    </div>

                    <div className="card bg-success text-white shadow-sm border-0">
                        <div className="card-body">
                            <h6 className="text-uppercase mb-2">
                                Efficiency Rate
                            </h6>

                            <h2 className="fw-bold">92.4%</h2>

                            <small>
                                +1.2% dari kemarin
                            </small>
                        </div>
                    </div>

                </div>
            </div>

            {/* Status Mesin */}
            <div className="mb-3">
                <h4 className="fw-semibold">
                    Status Mesin Aktif
                </h4>
            </div>

            <div className="row g-4">

                <div className="col-md-6 col-lg-3">
                    <KartuMesin
                        nama="CNC-01"
                        status="Running"
                        produksi={320}
                    />
                </div>

                <div className="col-md-6 col-lg-3">
                    <KartuMesin
                        nama="CNC-02"
                        status="Running"
                        produksi={310}
                    />
                </div>

                <div className="col-md-6 col-lg-3">
                    <KartuMesin
                        nama="Press-01"
                        status="Stop"
                        produksi={150}
                    />
                </div>

                <div className="col-md-6 col-lg-3">
                    <KartuMesin
                        nama="Weld-04"
                        status="Maintenance"
                        produksi={0}
                    />
                </div>

            </div>
        </div>
    );
}

export default Dashboard;