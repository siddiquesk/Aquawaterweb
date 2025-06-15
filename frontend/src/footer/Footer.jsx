import React from 'react';
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { MdOutlineFactory } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h3>3D Aqua Water Treatment Company</h3>

          <p>
            <FaMapMarkerAlt /> <strong>Head Office:</strong><br />
            B-26, Okhla Industrial Area, Phase-2,<br />
            Opp. Mercedes Showroom, New Delhi-110020
          </p>

          <p>
            <FaPhoneAlt /> <strong>Phone:</strong> 011-4015 9090
          </p>

          <p>
            <MdOutlineFactory /> <strong>Factory Address:</strong><br />
            C-268, Sector-10, Noida (UP)-201301
          </p>

          <p>
            <IoMdBusiness /> <strong>Corporate Office:</strong><br />
            11128, Gaur City Mall, Noida Extension,<br />
            Noida (UP)-201318
          </p>

          <p>
            <FaPhoneAlt /> <strong>Phone:</strong> 8860 398 498, 9910 220 919
          </p>

          <p>
            <FaEnvelope /> <strong>Email:</strong>{" "}
            <a href="mailto:info@3daqua.in">info@3daqua.in</a>
          </p>
        </div>


        {/* Our Products */}
        <div className="footer-section">
          <h4>Our Products</h4>
          <ul>
            {[
              "Water Treatment Plant", "Commercial Water Softener", "Domestic Water Softener",
              "Industrial RO Plant", "Commercial RO Plant", "Water ATM", "Iron Remover", "Fire Fighting System"
            ].map((item, i) => (
              <li key={i}><FaArrowRight /> <a href="#">{item}</a></li>
            ))}
          </ul>
          {/* Social Media */}
          <div className="footer-section icons-h2">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Filtration Systems */}
        <div className="footer-section">
          <h4>Filtration Systems</h4>
          <ul>
            {[
              "Dosing System", "Sand Filter", "Activated Carbon Filter", "Pressure Pump",
              "Sewage Treatment Plant", "DM Plant", "Bottling Plant", "Ultra Filtration System"
            ].map((item, i) => (
              <li key={i}><FaArrowRight /> <a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Other Services */}
        <div className="footer-section">
          <h4>Other Services</h4>
          <ul>
            {[
              "Multigrade Filter", "Pouch Packing Machine", "Chiller Plant", "Softener Salt",
              "Water Cooler", "Effluent Treatment Plant", "Domestic RO", "Fabrication & Job Work"
            ].map((item, i) => (
              <li key={i}><FaArrowRight /> <a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

      </div>


      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright &copy; 2024 3D Aqua. All Rights Reserved.</p>
        <p>Total Visitors: 0</p>
        <div className="footer-links">
          <a href="#">Career</a>
          <a href="#">FAQ</a>
          <a href="#">Contact Us</a>
          <a href="#">Search Here</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


