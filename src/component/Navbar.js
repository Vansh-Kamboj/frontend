import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {

    return (
        <>


            <div className="container-fluid sticky-top bg-primary">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark p-0">
                        <Link to="/" className="navbar-brand">
                            <h1 className="text-white">
                                <span className="text-dark">AD</span>VISIONS
                            </h1>
                        </Link>
                        <button
                            type="button"
                            className="navbar-toggler ms-auto me-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <Link to="/" className="nav-item nav-link active">
                                    Home
                                </Link>
                                <Link to="/about" className="nav-item nav-link">
                                    About
                                </Link>
                                <Link to="/Services" className="nav-item nav-link">
                                    Services
                                </Link>
                                <div className="nav-item dropdown">
                                    <a
                                        href="*#"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Our Work
                                    </a>
                                    <div className="dropdown-menu bg-light mt-2">
                                        <Link to="/blog" className="dropdown-item">
                                            Blog
                                        </Link>
                                        <Link to="/product" className="dropdown-item">
                                            Products
                                        </Link>


                                        <Link to="/team" className="dropdown-item">
                                            Our Team
                                        </Link>

                                    </div>
                                </div>
                                {/* <Link to="/admin" className="nav-item nav-link">Admin</Link> */}
                                <Link to="/contact" className="nav-item nav-link">
                                    Contact
                                </Link>
                            </div>

                            <button
                                type="button"
                                className="btn text-white p-0 d-none d-lg-block"
                                data-bs-toggle="modal"
                                data-bs-target="#searchModal"
                            >
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
        </>
    );
}