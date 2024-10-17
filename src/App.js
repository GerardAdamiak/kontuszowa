// App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import AboutUs from './AboutUs';
import Contact from './Contact';
import menuIcon from './menu-icon.png'; // Replace with your actual menu icon path

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check if screen is mobile

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close dropdown on desktop view
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <nav className="navbar">
          {/* Menu icon for mobile */}
          {isMobile ? (
            <div className="menu-icon" onClick={toggleMenu}>
              <img src={menuIcon} alt="Menu" />
            </div>
          ) : null}

          {/* Dropdown Menu for Mobile */}
          {isMobile && isOpen && (
            <ul className="dropdown">
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
              <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
              <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
          )}

          {/* Horizontal Menu for Desktop */}
          {!isMobile && (
            <ul className="desktop-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        

        <footer className="App-footer">
          <p>© 2024 Kontuszowa - All rights reserved.</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
