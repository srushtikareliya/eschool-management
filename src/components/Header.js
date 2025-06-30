import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>

            <div class="topbar d-print-none">
                <div class="container-fluid">
                    <nav class="topbar-custom d-flex justify-content-between" id="topbar-custom">
                        <ul class="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
                            <li>
                                <button class="nav-link mobile-menu-btn nav-icon" id="togglemenu">
                                    <i class="iconoir-menu"></i>
                                </button>
                            </li>
                            <li class="mx-2 welcome-text">
                                <h5 class="mb-0 fw-semibold text-truncate">Good Morning, James!</h5>
                            </li>
                        </ul>
                        <ul class="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
                            <li class="hide-phone app-search">
                                <form role="search" action="#" method="get">
                                    <input type="search" name="search" class="form-control top-search mb-0" placeholder="Search here..." />
                                    <button type="submit"><i class="iconoir-search"></i></button>
                                </form>
                            </li>
                            <li class="dropdown topbar-item">
                                <a class="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button"
                                    aria-haspopup="false" aria-expanded="false" data-bs-offset="0,19">
                                    <img src="assets/images/avatar-1.jpg" alt="" class="thumb-md rounded-circle" />
                                </a>
                                <div class="dropdown-menu dropdown-menu-end py-0">
                                    <div class="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
                                        <div class="flex-shrink-0">
                                            <img src="assets/images/avatar-1.jpg" alt="" class="thumb-md rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-2 text-truncate align-self-center">
                                            <h6 class="my-0 fw-medium text-dark fs-13">William Martin</h6>
                                            <small class="text-muted mb-0">Front End Developer</small>
                                        </div>
                                    </div>
                                    <div class="dropdown-divider mt-0"></div>
                                    <small class="text-muted px-2 pb-1 d-block">Account</small>
                                    <Link class="dropdown-item" href="pages-profile.html"><i class="fa fa-user fs-15 me-1 align-text-bottom"></i> Profile</Link>
                                    <Link class="dropdown-item" href="pages-faq.html"><i class="fa fa-wallet fs-15 me-1 align-text-bottom"></i> Earning</Link>
                                    <small class="text-muted px-2 py-1 d-block">Settings</small>
                                    <Link class="dropdown-item" href="pages-profile.html"><i class="fa fa-cog fs-15 me-1 align-text-bottom"></i>Account Settings</Link>
                                    <Link class="dropdown-item" href="pages-profile.html"><i class="fa fa-lock fs-15 me-1 align-text-bottom"></i> Security</Link>
                                    <Link class="dropdown-item" href="pages-faq.html"><i class="fa fa-question-circle fs-15 me-1 align-text-bottom"></i> Help Center</Link>
                                    <div class="dropdown-divider mb-0"></div>
                                    <Link class="dropdown-item text-danger" href="auth-login.html"><i class="fa fa-power-off fs-15 me-1 align-text-bottom"></i> Logout</Link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div class="startbar d-print-none">
                <div class="brand">
                    <a href="index.html" class="logo">
                        <span>
                            <img src="assets/images/logo-sm.png" alt="logo-small" class="logo-sm" />
                        </span>
                        <span class="">
                            <img src="assets/images/logo-light.png" alt="logo-large" class="logo-lg logo-light" />
                            <img src="assets/images/logo-dark.png" alt="logo-large" class="logo-lg logo-dark" />
                        </span>
                    </a>
                </div>

                <div class="startbar-menu">
                    <div class="startbar-collapse simplebar-scrollable-y" id="startbarCollapse" data-simplebar>
                        <div class="d-flex align-items-start flex-column w-100">
                            <ul class="navbar-nav mb-auto w-100">
                                <li class="menu-label mt-2">
                                    <span>Navigation</span>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link active" to="/dashboard">
                                        <i class="fa fa-home menu-icon"></i>
                                        <span>Dashboard</span>
                                        <span class="badge text-bg-danger ms-auto">08</span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">
                                        <i class="fa fa-list menu-icon"></i>
                                        <span>Teachers</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="startbar-overlay d-print-none"></div>

        </>
    )
}

export default Header