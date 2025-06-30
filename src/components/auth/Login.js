import { Link } from 'react-router-dom'
import CommonAuthLayout from './CommonAuthLayout'

function Login() {
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
                                <label class="form-label" for="username">Username</label>
                                <input type="text" class="form-control" id="username" name="username" placeholder="Enter username" />
                            </div>
                            <div class="form-group mb-2">
                                <label class="form-label" for="username">Password</label>
                                <input type="password" class="form-control" id="userPassword" name="password" placeholder="Enter password" />
                            </div>
                            <div class="form-group row mt-3">
                                <div class="col-sm-6">
                                    <div class="form-check form-switch form-switch-success">
                                        <input class="form-check-input" type="checkbox" id="customSwitchSuccess" />
                                        <label class="form-check-label" for="customSwitchSuccess">Remember me</label>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-end">
                                    <Link to="/forgot-password" class="text-muted font-13"><i class="dripicons-lock"></i> Forgot password?</Link>
                                </div>
                            </div>
                            <div class="form-group mb-0 row">
                                <div class="col-12">
                                    <div class="d-grid mt-3">
                                        <button class="btn btn-primary" type="button">Login <i class="fa fa-sign-in-alt ms-1"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="text-center  mb-2">
                            <p class="text-muted">Don't have an account ? <Link to="/register" class="text-primary ms-1">Create Account</Link></p>
                            <h6 class="px-3 d-inline-block">Or Login With</h6>
                        </div>
                        <div class="d-flex justify-content-center">
                            <Link to="#" class="d-flex justify-content-center align-items-center thumb-md bg-blue-subtle text-blue rounded-circle me-2">
                                <i class="fab fa-facebook align-self-center"></i>
                            </Link>
                            <Link to="#" class="d-flex justify-content-center align-items-center thumb-md bg-info-subtle text-info rounded-circle me-2">
                                <i class="fab fa-twitter align-self-center"></i>
                            </Link>
                            <Link to="#" class="d-flex justify-content-center align-items-center thumb-md bg-danger-subtle text-danger rounded-circle">
                                <i class="fab fa-google align-self-center"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </CommonAuthLayout>
        </>
    )
}

export default Login