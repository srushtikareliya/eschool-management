import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>

            <div className="topbar d-print-none">
                <div className="container-fluid">
                    <nav className="topbar-custom d-flex justify-content-between" id="topbar-custom">
                        <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
                            <li>
                                <button className="nav-link mobile-menu-btn nav-icon" id="togglemenu">
                                    <i className="iconoir-menu"></i>
                                </button>
                            </li>
                            <li className="welcome-text">
                                <h5 className="mb-0 fw-semibold text-truncate">Dashboard</h5>
                            </li>
                        </ul>
                        <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
                            <li className="hide-phone app-search">
                                <form role="search" action="#" method="get">
                                    <input type="search" name="search" className="form-control top-search mb-0" placeholder="Search here..." />
                                    <button type="submit"><i className="iconoir-search"></i></button>
                                </form>
                            </li>
                            <li className="dropdown topbar-item">
                                <a className="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button"
                                    aria-haspopup="false" aria-expanded="false" data-bs-offset="0,19">
                                    <img src="assets/images/avatar-1.jpg" alt="" className="thumb-md rounded-circle" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end py-0">
                                    <div className="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/avatar-1.jpg" alt="" className="thumb-md rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                                            <h6 className="my-0 fw-medium text-dark fs-13">William Martin</h6>
                                            <small className="text-muted mb-0">Front End Developer</small>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider mt-0"></div>
                                    <small className="text-muted px-2 pb-1 d-block">Account</small>
                                    <Link className="dropdown-item" href="pages-profile.html"><i className="fa fa-user fs-15 me-1 align-text-bottom"></i> Profile</Link>
                                    <Link className="dropdown-item" href="pages-faq.html"><i className="fa fa-wallet fs-15 me-1 align-text-bottom"></i> Earning</Link>
                                    <small className="text-muted px-2 py-1 d-block">Settings</small>
                                    <Link className="dropdown-item" href="pages-profile.html"><i className="fa fa-cog fs-15 me-1 align-text-bottom"></i>Account Settings</Link>
                                    <Link className="dropdown-item" href="pages-profile.html"><i className="fa fa-lock fs-15 me-1 align-text-bottom"></i> Security</Link>
                                    <Link className="dropdown-item" href="pages-faq.html"><i className="fa fa-question-circle fs-15 me-1 align-text-bottom"></i> Help Center</Link>
                                    <div className="dropdown-divider mb-0"></div>
                                    <Link className="dropdown-item text-danger" href="auth-login.html"><i className="fa fa-power-off fs-15 me-1 align-text-bottom"></i> Logout</Link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="startbar d-print-none">
                <div className="brand">
                    <a href="index.html" className="logo">
                        <span>
                            <img src="assets/images/logo-sm.png" alt="logo-small" className="logo-sm" />
                        </span>
                        <span className="">
                            <img src="assets/images/logo-light.png" alt="logo-large" className="logo-lg logo-light" />
                            <img src="assets/images/logo-dark.png" alt="logo-large" className="logo-lg logo-dark" />
                        </span>
                    </a>
                </div>

                <div className="startbar-menu">
                    <div className="startbar-collapse simplebar-scrollable-y" id="startbarCollapse" data-simplebar>
                        <div className="d-flex align-items-start flex-column w-100">
                            <ul className="navbar-nav mb-auto w-100">
                                <li className="menu-label mt-2">
                                    <span>Navigation</span>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link active" to="/dashboard">
                                        <i className="fa fa-home menu-icon"></i>
                                        <span>Dashboard</span>
                                        <span className="badge text-bg-danger ms-auto">08</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/teachers">
                                        <i className="fa fa-list menu-icon"></i>
                                        <span>Teachers</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/students/list">
                                        <i className="fa fa-list menu-icon"></i>
                                        <span>Students</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="startbar-overlay d-print-none"></div>

        </>
    )
}

export default Header