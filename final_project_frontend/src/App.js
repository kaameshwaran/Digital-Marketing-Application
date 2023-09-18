import React, { useEffect, useState} from 'react'; // Import useContext
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import About from './components/pages/About';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import Forms from './components/pages/Forms';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Services from './components/pages/Services';
import View from './components/pages/View';
import Success from './components/pages/Success';
import Failed from './components/pages/Failed';

function useNavbar() {
  const location = useLocation();
  const [shouldRenderNavbar, setShouldRenderNavbar] = useState(true);

  useEffect(() => {
    const isLoginPage = location.pathname === '/' || location.pathname === '/register';
    setShouldRenderNavbar(!isLoginPage);
  }, [location]);

  return shouldRenderNavbar;
}

function App() {
  
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const shouldRenderNavbar = useNavbar();

  return (
    <>
      {shouldRenderNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forms" element={<Forms />} />
        <Route path ="/view" element={<View />} />
        <Route path='/success' element={<Success />} />
        <Route path='/failed' element={<Failed />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
