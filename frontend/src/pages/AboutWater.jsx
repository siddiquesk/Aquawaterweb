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
            <h2>Hrsaquatreat – Redefining Water Solutions with Trust & Technology</h2>
            <p>Hrsaquatreat is a globally trusted Water Treatment Company with ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, MSME, and CE certifications. We are renowned as a Manufacturer, Exporter, Trader, Supplier, and Service Provider offering top-tier solutions such as Industrial RO Plants, Water Softeners (Domestic & Commercial), STP, ETP, DM Plants, Sand & Carbon Filters, Salt Tablets, and more. <br />
              With a legacy of over 20 years, Hrsaquatreat has delivered reliable and innovative water treatment systems across 1000+ cities in more than 9 countries, ensuring unmatched customer satisfaction.</p>
            <div className="about-aqua-para">
              Hrsaquatreat provides end-to-end solutions for wastewater treatment and hard water conditioning, powered by advanced engineering and sustainable technologies.
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default AboutWater
