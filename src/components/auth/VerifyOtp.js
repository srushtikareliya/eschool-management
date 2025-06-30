import React from 'react'
import { Link } from 'react-router-dom'
import CommonAuthLayout from './CommonAuthLayout'

function VerifyOtp() {
    return (
        <>
            <CommonAuthLayout>
                <div class="card auth-card">
                    <div class="card-body p-0 bg-black auth-header-box rounded-top">
                        <div class="text-center p-3">
                            <Link to="/" class="logo logo-admin">
                                <img src="assets/images/logo-sm.png" height="50" alt="logo" class="auth-logo"></img>
                            </Link>
                            <h4 class="mt-3 mb-1 fw-semibold text-white fs-18">Let's Get Started Mount</h4>
                            <p class="text-muted fw-medium mb-0">Sign in to continue to Mount.</p>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <form class="my-4" action="#">
                            <div class="form-group mb-2">
                                <label class="form-label" for="otp">OTP</label>
                                <input type="number" class="form-control" id="otp" name="otp" placeholder="Enter otp" />
                            </div>
                            <p className="text-center"><Link to="/forgot-password" class="text-secondary font-13"><i class="dripicons-lock"></i> Resent otp?</Link></p>
                            <div class="form-group mb-0 row">
                                <div class="col-12">
                                    <div class="d-grid mt-3">
                                        <button class="btn btn-primary" type="button">Verify</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </CommonAuthLayout>
        </>
    )
}

export default VerifyOtp