import { Link } from 'react-router-dom'
import Response from '../data/Response.json';

function Dashboard() {
    return (
        <>
            <div className="page-wrapper">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                                    <h4 className="mb-0 fw-semibold text-truncate">Good Morning, <span className="text-primary">{Response.loggedUser.firstname} {Response.loggedUser.lastname} !</span></h4>
                                    <div className="">
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item"><Link to="/">Mount</Link></li>
                                            <li className="breadcrumb-item active">Dashboard</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="card auth-card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center">
                                            <div className="col-9">
                                                <p className="text-dark mb-0 fw-semibold fs-14">Teachers</p>
                                                <h3 className="mt-1 mb-0 fw-bold">20</h3>
                                            </div>
                                            <div className="col-3 align-self-center">
                                                <div className="d-flex justify-content-center align-items-center thumb-xl bg-primary bg-opacity-25 rounded-circle mx-auto">
                                                    <i className="iconoir-dollar-circle h1 align-self-center mb-0 text-primary"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card auth-card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center">
                                            <div className="col-9">
                                                <p className="text-dark mb-0 fw-semibold fs-14">Students</p>
                                                <h3 className="mt-1 mb-0 fw-bold">20</h3>
                                            </div>
                                            <div className="col-3 align-self-center">
                                                <div className="d-flex justify-content-center align-items-center thumb-xl bg-primary bg-opacity-25 rounded-circle mx-auto">
                                                    <i className="iconoir-dollar-circle h1 align-self-center mb-0 text-primary"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card auth-card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center">
                                            <div className="col-9">
                                                <p className="text-dark mb-0 fw-semibold fs-14">Teachers</p>
                                                <h3 className="mt-1 mb-0 fw-bold">20</h3>
                                            </div>
                                            <div className="col-3 align-self-center">
                                                <div className="d-flex justify-content-center align-items-center thumb-xl bg-primary bg-opacity-25 rounded-circle mx-auto">
                                                    <i className="iconoir-dollar-circle h1 align-self-center mb-0 text-primary"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard