import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

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
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </LayoutWrapper>
      </Router>
    </>
  );
}

export default App;
