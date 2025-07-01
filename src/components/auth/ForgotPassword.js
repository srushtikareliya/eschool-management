import {Link} from 'react-router-dom'
import CommonAuthLayout from './CommonAuthLayout'

function ForgotPassword() {
  return (
    <>
        <CommonAuthLayout>
            <div className="card auth-card">
                    <div className="card-body p-0 bg-black auth-header-box rounded-top">
                        <div className="text-center p-3">
                            <Link to="/" className="logo logo-admin">
                                <img src="assets/images/logo-sm.png" height="50" alt="logo" className="auth-logo"></img>
                            </Link>
                            <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">Forgot Password</h4>
                            <p className="text-muted fw-medium mb-0">Enter your email for verify your account.</p>
                        </div>
                    </div>
                    <div className="card-body pt-0">
                        <form className="my-3" action="#">
                            <div className="form-group mb-2">
                                <label className="form-label" for="newPassword">Email</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
                            </div>
                            <div className="form-group mb-0 row">
                                <div className="col-12">
                                    <div className="d-grid mt-3">
                                        <Link className="btn btn-primary" to="/reset-password">Send Email <i className="fa fa-sign-in-alt ms-1"></i></Link>
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

export default ForgotPassword