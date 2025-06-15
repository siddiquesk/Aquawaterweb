import React from 'react'
import "./AboutWater.css"
function AboutWater() {
  return (
    <>
      <main className='about-water-section container'>
        <section className='about-aqua'>
          <div className='about-aqua-image'>
            <img src="./images/aqua-about.avif" alt="about-aqua" />
          </div>
        </section>
        <section className='about-aqua-container'>
          <div className='about-company'>
            <h1>ABOUT OUR COMPANY</h1>
            <h2>3D Aqua – Transforming Every Drop with Innovation & Purity</h2>
            <p>3D Aqua Water Treatment Company holds ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, MSME, and CE certifications. We are a trusted and reputed Manufacturer, Exporter, Trader, Supplier, and Service Provider of premium quality solutions like Industrial RO Plants, Water Softeners (Domestic & Commercial), STP, ETP, DM Plants, Sand & Carbon Filters, Salt Tablets, and more. <br />
              With over two decades of industry expertise, our solutions are trusted in over 1050 cities across 9 countries, ensuring reliable performance and complete customer satisfaction worldwide.</p>
            <div className="about-aqua-para">
              3D Aqua Water Treatment Company delivers comprehensive global solutions for wastewater treatment and hard water management with advanced technology and proven expertise.
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AboutWater
