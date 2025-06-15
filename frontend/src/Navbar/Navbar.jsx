import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  // Mobile drawer open/close
  const [isOpen, setIsOpen] = useState(false);

  // Mobile submenu toggles
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);

  return (
    <>
      <header>
        {/* ---------- Top Navbar ---------- */}
        <nav className="navbar">
          {/* Logo */}
          <div className="logo">
            <img src="/images/logo4.jpg" alt="Aqua Logo" />
          </div>

          {/* Hamburger Icon (for mobile) */}
          <div className="menu-icon" onClick={() => setIsOpen(true)}>
            <FaBars />
          </div>

          {/* ---------- Desktop Nav Links ---------- */}
          <ul className="nav-links desktop-only">
            <li><Link to="/">Home</Link></li>

            {/* Company Profile Dropdown */}
            <li className="dropdown">
              <span>Company Profile ▾</span>
              <ul className="dropdown-menu">
                <li><Link to="/download-profile">Download Profile</Link></li>
                <li><Link to="/download-catalogue">Download Catalogue</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/vision-mission">Vision Mission</Link></li>
                <li><Link to="/career">Career</Link></li>
              </ul>
            </li>

            {/* Products Dropdown */}
            <li className="dropdown">
              <span>Products ▾</span>
              <ul className="dropdown-menu">
                <li><Link to="/sewage-treatment-plant">Sewage Treatment Plant</Link></li>
                <li><Link to="/effluent-treatment-plant">Effluent Treatment Plant</Link></li>
                <li><Link to="/domestic-water-softener">Domestic Water Softener</Link></li>
                <li><Link to="/commercial-ro-plant">Commercial RO Plant</Link></li>
                <li><Link to="/ultra-filtration">Ultra Filtration System</Link></li>
                <li><Link to="/fire-fighting">Fire Fighting System</Link></li>
                <li><Link to="/fabrication-job-work">Fabrication & Job Work</Link></li>
                <li>
                  <Link to="/fabrication-job-work" className="nav-red-btn">More Products</Link>
                </li>
              </ul>
            </li>

            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>

          {/* ---------- Desktop Right-Side Buttons ---------- */}
          <div className="nav-actions desktop-only">
            <h4>PayHere</h4>
            <h4>3dAquaStore</h4>
            <Link to="/contact" className="nav-contact">Let's Talk</Link>
          </div>
        </nav>
      </header>

      {/* ---------- Overlay (behind mobile drawer) ---------- */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      <aside className={`drawer ${isOpen ? "open" : ""}`}>
        {/* Drawer Top Section */}
        <div className="drawer-header">
          <img src="/images/logo4.jpg" alt="Logo" />
          <FaTimes className="close-icon" onClick={() => setIsOpen(false)} />
        </div>

        {/* Mobile Nav Links */}
        <ul className="drawer-links">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>

          {/* Toggle Company Profile Submenu */}
          <li onClick={() => setShowProfileMenu(!showProfileMenu)}>
            Company Profile ▾
          </li>
          {showProfileMenu && (
            <ul className="submenu">
              <li><Link to="/download-profile" onClick={() => setIsOpen(false)}>Download Profile</Link></li>
              <li><Link to="/download-catalogue" onClick={() => setIsOpen(false)}>Download Catalogue</Link></li>
              <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
              <li><Link to="/vision-mission" onClick={() => setIsOpen(false)}>Vision Mission</Link></li>
              <li><Link to="/career" onClick={() => setIsOpen(false)}>Career</Link></li>
            </ul>
          )}

          {/* Toggle Products Submenu */}
          <li onClick={() => setShowProductMenu(!showProductMenu)}>
            Products ▾
          </li>
          {showProductMenu && (
            <ul className="submenu">
              <li><Link to="/sewage-treatment-plant" onClick={() => setIsOpen(false)}>Sewage Treatment Plant</Link></li>
              <li><Link to="/effluent-treatment-plant" onClick={() => setIsOpen(false)}>Effluent Treatment Plant</Link></li>
              <li><Link to="/domestic-water-softener" onClick={() => setIsOpen(false)}>Domestic Water Softener</Link></li>
              <li><Link to="/commercial-ro-plant" onClick={() => setIsOpen(false)}>Commercial RO Plant</Link></li>
              <li><Link to="/ultra-filtration" onClick={() => setIsOpen(false)}>Ultra Filtration</Link></li>
              <li><Link to="/fire-fighting" onClick={() => setIsOpen(false)}>Fire Fighting</Link></li>
              <li><Link to="/fabrication-job-work" onClick={() => setIsOpen(false)}>Fabrication & Job Work</Link></li>
            </ul>
          )}

          <li><Link to="/clients" onClick={() => setIsOpen(false)}>Clients</Link></li>
          <li><Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link></li>
          <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)} className="nav-contact">Let's Talk</Link></li>
        </ul>
      </aside>

    </>
  );
}

export default Navbar;



