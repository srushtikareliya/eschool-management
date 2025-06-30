import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard';
import VerifyOtp from './components/auth/VerifyOtp';

function LayoutWrapper({ children }) {
  const location = useLocation();
  console.log(location);
  const hideHeaderFooter = location.pathname === '/' || location.pathname === '/register' || location.pathname === '/forgot-password' || location.pathname === '/verify-otp' || location.pathname === '/reset-password';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <div id="layout-wrapper">{children}</div>
      {/*{!hideHeaderFooter && <Footer />}*/}
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/verify-otp" element={<VerifyOtp />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </LayoutWrapper>
      </Router>
    </>
  );
}

export default App;
