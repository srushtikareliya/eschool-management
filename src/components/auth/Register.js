import React from 'react'
import { Link } from 'react-router-dom'
import CommonAuthLayout from './CommonAuthLayout'

function Register() {
    return (
        <>
            <CommonAuthLayout>
                <div class="card auth-card">
                    <div class="card-body p-0 bg-black auth-header-box rounded-top">
                        <div class="text-center p-3">
                            <Link to="/" class="logo logo-admin">
                                <img src="assets/images/logo-sm.png" height="50" alt="logo" class="auth-logo"></img>
                            </Link>
                            <h4 class="mt-3 mb-1 fw-semibold text-white fs-18">Create an account</h4>
                            <p class="text-muted fw-medium mb-0">Enter your detail to Create your account today.</p>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <form class="my-4" action="#">
                            <div class="form-group mb-2">
                                <label class="form-label" for="firstname">Full name</label>
                                <input type="text" class="form-control" id="firstname" name="firstname" placeholder="Enter firstname" />
                            </div>
                            <div class="form-group mb-2">
                                <label class="form-label" for="username">Email</label>
                                <input type="text" class="form-control" id="username" name="username" placeholder="Enter email" />
                            </div>
                            <div class="form-group mb-2">
                                <label class="form-label" for="assword">Password</label>
                                <input type="password" class="form-control" id="userPassword" name="assword" placeholder="Enter password" />
                            </div>
                            <div class="form-group mb-2">
                                <label class="form-label" for="confirmPassword">Confirm Password</label>
                                <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" placeholder="Re-enter password" />
                            </div>
                            <div class="form-group mb-2">
                                <label class="form-label" for="contact">Mobile Number</label>
                                <input type="number" class="form-control" id="contact" name="contact" placeholder="Enter mobile number" />
                            </div>
                            <div class="form-group row mt-3">
                                <div class="col-12">
                                    <div class="form-check form-switch form-switch-success">
                                        <input class="form-check-input" type="checkbox" id="customSwitchSuccess" />
                                        <label class="form-check-label" for="customSwitchSuccess">By registering you agree to the Mount <Link to="/" class="text-primary">Terms of Use</Link></label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-0 row">
                                <div class="col-12">
                                    <div class="d-grid mt-3">
                                        <button class="btn btn-primary" type="button">Register <i class="fa fa-sign-in-alt ms-1"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="text-center">
                            <p class="text-muted">Already have an account ?  <Link to="/" class="text-primary ms-2">Log in</Link></p>
                        </div>
                    </div>
                </div>
            </CommonAuthLayout>
        </>
    )
}

export default Register