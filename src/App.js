  // App.js
  import './App.css';
  import React, { useState, useEffect } from 'react';
  import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
  import Home from './Home';
  import Products from './Products';
  import AboutUs from './AboutUs';
  import Contact from './Contact';
  import ClassicProduct from './ClassicProduct'
  import PremiumProduct from './PremiumProduct'
  import GoldProduct from './GoldProduct'
  import AgeVerification from './AgeVerification'; // Import the new component
  import menuIcon from './menu-icon.png'; // Replace with your actual menu icon path

  function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [language, setLanguage] = useState('EN'); // Initial language state
    const [isVerified, setIsVerified] = useState(false); // Age verification state

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

    // Toggle between languages
    const toggleLanguage = () => {
      setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'PL' : 'EN'));
    };

    // Check if the user is verified before rendering the rest of the app
    if (!isVerified) {
      return <AgeVerification setIsVerified={setIsVerified} />;
    }

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
                <li><Link to="/" onClick={toggleMenu}>{language === 'PL' ? 'Start' : 'Home'}</Link></li>
                <li><Link to="/products" onClick={toggleMenu}>{language === 'PL' ? 'Produkty' : 'Products'}</Link></li>
                <li><Link to="/about-us" onClick={toggleMenu}>{language === 'PL' ? 'O Nas' : 'About Us'}</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>{language === 'PL' ? 'Kontakt' : 'Contact'}</Link></li>
              </ul>
            )}

            {/* Horizontal Menu for Desktop */}
            {!isMobile && (
              <ul className="desktop-menu">
                <li><Link to="/">{language === 'PL' ? 'Start' : 'Home'}</Link></li>
                <li><Link to="/products">{language === 'PL' ? 'Produkty' : 'Products'}</Link></li>
                <li><Link to="/about-us">{language === 'PL' ? 'O Nas' : 'About Us'}</Link></li>
                <li><Link to="/contact">{language === 'PL' ? 'Kontakt' : 'Contact'}</Link></li>
              </ul>
            )}

            {/* Language Switcher */}
            <div className="language-switcher" onClick={toggleLanguage}>
              {language === 'PL' ? 'EN' : 'PL'}
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/products" element={<Products language={language} />} />
            <Route path="/products/gold" element={<GoldProduct language={language} />} />
            <Route path="/products/premium" element={<PremiumProduct language={language} />} />
            <Route path="/products/classic" element={<ClassicProduct language={language} />} />
            <Route path="/about-us" element={<AboutUs language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>

          <footer className="App-footer">
            <p>© 2024 Kontuszowa - All rights reserved.</p>
          </footer>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
