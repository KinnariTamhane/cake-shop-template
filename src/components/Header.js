import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ cartCount, toggleCart }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'custom-order', 'about'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Sweet Delights</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a
                href="#home"
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('menu');
                }}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#custom-order"
                className={`nav-link ${activeSection === 'custom-order' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('custom-order');
                }}
              >
                Custom Orders
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <a 
          href="#custom-order" 
          className="cta-button"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('custom-order');
          }}
        >
          Build Your Dream Cake
        </a>
        <div className="cart-icon" onClick={toggleCart} style={{ cursor: 'pointer' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
          </svg>
          <span className="cart-badge">{cartCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
