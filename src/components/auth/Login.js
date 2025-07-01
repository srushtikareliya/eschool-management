import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CommonAuthLayout from './CommonAuthLayout'
import Response from '../../data/Response.json';

function Login() {
    console.log({ Response });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        setMessage('');

        if (!username.trim() || !password) {
            setErrors({
                username: !username.trim() ? "Username is required" : "",
                password: !password ? "Password is required" : ""
            });
            return;
        }

        if (!rememberMe) {
        setErrors({ form: "You must agree to 'Remember me' to continue." });
        return;
    }

        const loginUser = (Response.login.username === username && Response.login.password === password);
        if(loginUser){
            setMessage('Login Successful!');
            navigate('/dashboard');
        }else{
            setErrors({ form: "Invalid username or password" })
        }



    }

    return (
        <>
            <CommonAuthLayout>
                <div className="card auth-card">
                    <div className="card-body p-0 bg-black auth-header-box rounded-top">
                        <div className="text-center p-3">
                            <Link to="/" className="logo logo-admin">
                                <img src="assets/images/logo-sm.png" height="50" alt="logo" className="auth-logo"></img>
                            </Link>
                            <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">Let's Get Started Mount</h4>
                            <p className="text-muted fw-medium mb-0">Sign in to continue to Mount.</p>
                        </div>
                    </div>
                    <div className="card-body pt-0">
                        <form className="my-4" onSubmit={handleSubmit}>
                            <div className="form-group mb-2">
                                <label className="form-label" for="username">Username</label>
                                <input type="text" className="form-control" id="username" name="username" placeholder="Enter username"
                                    value={username} onChange={(e) => setUsername(e.target.value)} />
                                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label" for="username">Password</label>
                                <input type="password" className="form-control" id="userPassword" name="password" placeholder="Enter password"
                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                            </div>
                            <div className="form-group row mt-3">
                                <div className="col-sm-6">
                                    <div className="form-check form-switch form-switch-success">
                                        <input className="form-check-input" type="checkbox" id="customSwitchSuccess" 
                                        checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
                                        <label className="form-check-label" htmlFor="customSwitchSuccess">Remember me</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-end">
                                    <Link to="/forgot-password" className="text-muted font-13"><i className="dripicons-lock"></i> Forgot password?</Link>
                                </div>
                            </div>
                            <div className="form-group mb-0 row">
                                <div className="col-12">
                                    {errors.form && <p style={{ color: 'red' }}>{errors.form}</p>}
                                    {message && <p style={{ color: 'green' }}>{message}</p>}
                                    <div className="d-grid mt-3">
                                        <button className="btn btn-primary" type="submit">Login <i className="fa fa-sign-in-alt ms-1"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="text-center  mb-2">
                            <p className="text-muted">Don't have an account ? <Link to="/register" className="text-primary ms-1">Create Account</Link></p>
                        </div>
                    </div>
                </div>
            </CommonAuthLayout>
        </>
    )
}

export default Login