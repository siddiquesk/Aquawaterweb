import React from 'react';
import "./Clients.css";
import company from "../context/company"; // Company logos array

function Clients() {
  // Remove unnecessary loading state check; just ensure company array exists
  if (!company || company.length === 0) {
    return (
      <div>
        <h1 style={{ color: 'red' }}>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {/* ========== Banner Section ========== */}
      <div className="common-page-element">
        <div className="client-banner-container">
          <h2 className="client-heading">Our Clients, Our Priority</h2>
          <p className="client-subtext">
            At Hrsaquatreat, we don’t just deliver products — we deliver <strong>trust, quality</strong>, and <strong>timely service</strong>.
            Our relationship with clients is built on transparency, innovation, and excellence in water treatment.
          </p>
          <div className="client-pillars">
            <div className="pillar-box">✔ Quality Assurance</div>
            <div className="pillar-box">✔ 24x7 Support</div>
            <div className="pillar-box">✔ Timely Delivery</div>
            <div className="pillar-box">✔ Long-Term Partnership</div>
          </div>
        </div>
      </div>

      {/* Mobile Banner Fallback Text */}
      <div className="mobile-clients-fallback">
        <h2>Our Clients</h2>
        <p>
          We proudly serve 18,400+ clients across industries with sustainable water solutions.
        </p>
      </div>

      {/* ========== Intro Paragraph ========== */}
      <div className="clients-para">
        <p>
          Hrsaquatreat is a globally trusted name in water purification and treatment, delivering
          top-tier hard water and wastewater solutions to industries, institutions, and government
          bodies. Backed by over 20 years of experience, we serve 18,400+ clients across 9+ countries
          with a robust portfolio of 48+ innovative products, making us a leader in sustainable water
          management and treatment systems.
        </p>
      </div>

      {/* ========== Logo Grid Section ========== */}
      <div className="logo-grid-container">
        {
          company.map((logo, index) => (
            <div className="logo-card" key={index}>
              <img
                src={logo.image}
                alt={`Company ${index + 1}`}
                onError={(e) => (e.target.src = "/fallback-logo.png")}
              />
            </div>
          ))
        }
      </div>

    </>
  );
}

export default Clients;

