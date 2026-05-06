import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg shadow-sm mb-4"
            style={{
                background: 'linear-gradient(90deg, #0f2027, #203a43, #2c5364)'
            }}
        >
            <div className="container">

                {/* Brand */}
                <NavLink className="navbar-brand text-white fw-bold fs-4" to="/">
                    Sistem Pabrik
                </NavLink>

                {/* Toggle */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbarNav">

                    {/* Menu kiri */}
                    <div className="navbar-nav mx-auto">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link text-warning fw-bold mx-2"
                                    : "nav-link text-white mx-2"
                            }
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/inventori"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link text-warning fw-bold mx-2"
                                    : "nav-link text-white mx-2"
                            }
                        >
                            Inventori
                        </NavLink>

                    </div>

                    {/* Identitas kanan */}
                    <div className="text-end text-white small">
                        <div className="fw-semibold">Sesa Nugroho Satriva</div>
                        <div style={{ fontSize: '12px', opacity: 0.8 }}>
                            NIM: 23051430031
                        </div>
                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;