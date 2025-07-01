import React from 'react'
import { Link } from 'react-router-dom'
import CommonAuthLayout from './CommonAuthLayout'

function Register() {
    return (
        <>
            <CommonAuthLayout>
                <div className="card auth-card">
                    <div className="card-body p-0 bg-black auth-header-box rounded-top">
                        <div className="text-center p-3">
                            <Link to="/" className="logo logo-admin">
                                <img src="assets/images/logo-sm.png" height="50" alt="logo" className="auth-logo"></img>
                            </Link>
                            <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">Create an account</h4>
                            <p className="text-muted fw-medium mb-0">Enter your detail to Create your account today.</p>
                        </div>
                    </div>
                    <div className="card-body pt-0">
                        <form className="my-4" action="#">
                            <div className="form-group mb-2">
                                <label className="form-label" for="firstname">Full name</label>
                                <input type="text" className="form-control" id="firstname" name="firstname" placeholder="Enter firstname" />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label" for="username">Email</label>
                                <input type="text" className="form-control" id="username" name="username" placeholder="Enter email" />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label" for="assword">Password</label>
                                <input type="password" className="form-control" id="userPassword" name="assword" placeholder="Enter password" />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label" for="confirmPassword">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Re-enter password" />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label" for="contact">Mobile Number</label>
                                <input type="number" className="form-control" id="contact" name="contact" placeholder="Enter mobile number" />
                            </div>
                            <div className="form-group row mt-3">
                                <div className="col-12">
                                    <div className="form-check form-switch form-switch-success">
                                        <input className="form-check-input" type="checkbox" id="customSwitchSuccess" />
                                        <label className="form-check-label" for="customSwitchSuccess">By registering you agree to the Mount <Link to="/" className="text-primary">Terms of Use</Link></label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-0 row">
                                <div className="col-12">
                                    <div className="d-grid mt-3">
                                        <button className="btn btn-primary" type="button">Register <i className="fa fa-sign-in-alt ms-1"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="text-center">
                            <p className="text-muted">Already have an account ?  <Link to="/" className="text-primary ms-2">Log in</Link></p>
                        </div>
                    </div>
                </div>
            </CommonAuthLayout>
        </>
    )
}

export default Register