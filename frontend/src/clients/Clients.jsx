import React, { useState } from 'react'
import "./Clients.css"
import company from "../context/company"
function Clients() {
  const [loading, setLoading] = useState(false);

  if (!company) {
    setLoading(true);
  }

  if (loading) {
    return (
      <div>
        <h1 style={{ color: 'red', fontSmooth: 'smooth' }}>Loading....</h1>
      </div>
    )
  }

  return (
    <>
      <div className='common-page-element'>
        {/* Desktop Image */}
        <div className="first-common-image">
          <img src="./images/clients.jpg" alt="clients" />
        </div>

        {/* Mobile Banner Replacement */}
        <div className="mobile-clients-fallback">
          <h2>Our Clients</h2>
          <p>We proudly serve 18400+ clients across industries with sustainable water solutions.</p>
        </div>
      </div>
      <div className="clients-para">
        <p>3D Aqua is a globally trusted name in water purification and treatment, delivering top-tier hard water and wastewater solutions to industries, institutions, and government bodies. Backed by over 20 years of experience, we serve 18400+ clients across 9+ countries with a robust portfolio of 48+ innovative products, making us a leader in sustainable water management and treatment systems.</p>
      </div>
      <div className="logo-grid-container">
        {company.map((logo, index) => (
          <div className="logo-card" key={index}>
            <img
              src={logo.image}
              alt={`Company ${index}`}
              onError={(e) => (e.target.src = "/fallback-logo.png")}
            />
          </div>
        ))}
      </div>

    </>
  )
}

export default Clients
