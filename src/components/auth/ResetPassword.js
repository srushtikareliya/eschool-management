import React from 'react'
import {Link} from 'react-router-dom'
import CommonAuthLayout from './CommonAuthLayout'

function ResetPassword() {
  return (
    <>
        <CommonAuthLayout>
            <div class="card auth-card">
                    <div class="card-body p-0 bg-black auth-header-box rounded-top">
                        <div class="text-center p-3">
                            <Link to="/" class="logo logo-admin">
                                <img src="assets/images/logo-sm.png" height="50" alt="logo" class="auth-logo"></img>
                            </Link>
                            <h4 class="mt-3 mb-1 fw-semibold text-white fs-18">Reset Password</h4>
                            <p class="text-muted fw-medium mb-0">srushti@bytesparkdigital.com 
                                <Link className="ms-2 text-decoration-underline" to="/forgot-password"><i className="fa fa-pencil"></i> Change</Link>
                                </p>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <form class="my-3" action="#">
                            <div class="form-group mb-2">
                                <label class="form-label" for="newPassword">Password</label>
                                <input type="password" class="form-control" id="newPassword" name="newPassword" placeholder="Enter new password" />
                            </div>
                            <div class="form-group mb-2">
                                <label class="form-label" for="confirmNewPassword">Re-enter New Password</label>
                                <input type="password" class="form-control" id="confirmNewPassword" name="confirmNewPassword" placeholder="Re-enter password" />
                            </div>
                            <div class="form-group mb-0 row">
                                <div class="col-12">
                                    <div class="d-grid mt-3">
                                        <Link class="btn btn-primary" to="/">Submit <i class="fa fa-sign-in-alt ms-1"></i></Link>
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

export default ResetPassword