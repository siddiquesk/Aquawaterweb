import React from 'react';
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h3>Hrsaquatreat Company</h3>
          <p>
            <FaMapMarkerAlt /> <strong>Address:</strong><br />
            Hrs Aquatreat Technologies,<br />
            C 988, Paper Market, IFC Ghazipur, Delhi 110096
          </p>
          <p>
            <FaPhoneAlt /> <strong>Phone:</strong> 9560307837
          </p>
          <p>
            <FaEnvelope /> <strong>Email:</strong>{" "}
            <a href="mailto:mukesh.hrsaquatreat@gmail.com">mukesh.hrsaquatreat@gmail.com</a>
          </p>
        </div>

        {/* Our Products */}
        <div className="footer-section">
          <h4>Our Products</h4>
          <ul>
            {[
              { label: "Water Treatment Plant", path: "/sewage-treatment-plant" },
              { label: "Commercial Water Softener", path: "/effluent-treatment-plant" },
              { label: "Domestic Water Softener", path: "/domestic-water-softener" },
              { label: "Industrial RO Plant", path: "/more-products" },
              { label: "Commercial RO Plant", path: "/commercial-ro-plant" },
              { label: "Water ATM", path: "/ultra-filtration" },
              { label: "Iron Remover", path: "/more-products" },
              { label: "Fire Fighting System", path: "/fire-fighting" }
            ].map((item, i) => (
              <li key={i}><FaArrowRight /> <Link to={item.path}>{item.label}</Link></li>
            ))}
          </ul>

          {/* Social Media */}
          <div className="footer-section icons-h2">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/share_channel/#" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fwww.hrsaquatreat.com%2F" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              <a href="https://x.com/intent/post?url=https%3A%2F%2Fwww.hrsaquatreat.com%2F" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Filtration Systems */}
        <div className="footer-section">
          <h4>Filtration Systems</h4>
          <ul>
            {[
              { label: "Dosing System", path: "/more-products" },
              { label: "Sand Filter", path: "/commercial-ro-plant" },
              { label: "Activated Carbon Filter", path: "/more-products" },
              { label: "Pressure Pump", path: "/more-products" },
              { label: "Sewage Treatment Plant", path: "/sewage-treatment-plant" },
              { label: "DM Plant", path: "/domestic-water-softener" },
              { label: "Bottling Plant", path: "/more-products" },
              { label: "Ultra Filtration System", path: "/ultra-filtration" }
            ].map((item, i) => (
              <li key={i}><FaArrowRight /> <Link to={item.path}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Other Services */}
        <div className="footer-section">
          <h4>Other Services</h4>
          <ul>
            {[
              { label: "Multigrade Filter", path: "/more-products" },
              { label: "Pouch Packing Machine", path: "/more-products" },
              { label: "Chiller Plant", path: "/more-products" },
              { label: "Softener Salt", path: "/more-products" },
              { label: "Water Cooler", path: "/more-products" },
              { label: "Effluent Treatment Plant", path: "/effluent-treatment-plant" },
              { label: "Domestic RO", path: "/domestic-water-softener" },
              { label: "Fabrication & Job Work", path: "/fabrication-job-work" }
            ].map((item, i) => (
              <li key={i}><FaArrowRight /> <Link to={item.path}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright &copy; 2024 Hrsaquatreat Company. All Rights Reserved.</p>
        <p>Total Visitors: 0</p>
        <div className="footer-links">
          <Link to="/career">Career</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/search">Search Here</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


