import React from 'react'
import { NavLink } from 'react-router-dom'
import SewageProductCard from "../product/SewageProductCard"
import ProductCommon from "../product/ProductCommon"
function ReverseOsmosis() {
  return (
    <>
      <section className='sewage-treatment-image'>
        <img src="./product/commercial.webp" alt="sewage-treatment" />
      </section>

      <div className="sewage-treatment-stp container">
        <div className="sewage-treatment-plant-div">
          <h1>Commercial Reverse Osmosis (RO) Plant</h1>
          <p>
            A Commercial Reverse Osmosis (RO) Plant is engineered to purify large volumes of water by removing dissolved salts, contaminants, and harmful impurities through advanced membrane technology. It is widely used in industries, commercial buildings, hotels, hospitals, and educational institutions to ensure a continuous supply of safe, clean, and mineral-balanced water.
            <br />
            At 3D Aqua, we offer cutting-edge RO systems designed for high performance, energy efficiency, and long-lasting reliability. Our commercial RO plants are available in multiple capacities and configurations to suit diverse business needs. Easy to maintain and built with corrosion-resistant materials, our systems are trusted across industries for consistent water quality and flow.
          </p>

          <div className="out-area">
            <h2>Our Areas of Expertise</h2>
            <p>We specialize in:</p>
            <ul>
              <li>High-capacity RO plants for commercial & industrial use</li>
              <li>Multi-stage filtration with TDS and hardness control</li>
              <li>Compact, modular & skid-mounted RO systems</li>
              <li>Fully automatic operation with minimal supervision</li>
              <li>Energy-efficient motors and low-waste design</li>
              <li>SS/FRP construction for corrosion resistance</li>
              <li>Custom design based on raw water analysis</li>
              <li>Easy installation, servicing & AMC support</li>
            </ul>
          </div>
        </div>

        <div className="sewage-treatment-enquiry">
          <h2>Enquiry Form</h2>

          <form className="stp-enquiry-form" aria-label="Commercial RO Plant Enquiry Form">
            <div className="stp-form-row">
              <input type="text" name="name" placeholder="Your Name" required className="stp-input" />
              <input type="tel" name="phone" placeholder="Your Phone" required className="stp-input" />
            </div>

            <div className="stp-form-row">
              <input type="email" name="email" placeholder="Email" className="stp-input" />
            </div>

            <div className="stp-form-full">
              <textarea name="message" placeholder="Type Your Message" rows="5" required className="stp-textarea"></textarea>
            </div>

            <div className="stp-form-buttons">
              <button type="submit" className="stp-submit-btn">Submit</button>
              <button className="stp-call-btn">Call Us: 917277262662</button>
            </div>
          </form>
        </div>
      </div>



      <div className="sewage-manufacture-plants">
        <div className="sewage-manufacture-div">
          <div className="manufacture-div-image">
            <img src="./product/eff.webp" alt="soft" />
          </div>

          <div className="manufacture-content-flag">
            <h2>Simply Know About</h2>
            <h1>Commercial RO Plant Solutions – AquaPure Innovations</h1>
            <p>
              Commercial Reverse Osmosis (RO) Plants are essential for industries, hospitals, hotels, and institutions that require high-quality purified water in large volumes. These systems remove dissolved salts, chemicals, and impurities using advanced membrane filtration technology.
              <br /><br />
              At AquaPure Solutions, we specialize in manufacturing robust, energy-efficient, and fully automatic commercial RO plants. Designed for long-term use with minimal maintenance, our systems ensure consistent output and meet the most demanding water purification standards.
            </p>
          </div>
        </div>
      </div>


      <div className="technology-we-are">
        <div className="left-content">
          <p>Important Role</p>
          <h1>Technology We are Using</h1>
          <h2>Modern Technologies Used in Sewage Treatment Plants</h2>

          <div className="tech-list">
            <div className="tech-item">✅ Advanced Biological Treatment Systems</div>
            <div className="tech-item">✅ Compact STP Units</div>
            <div className="tech-item">✅ Smart Automation & Monitoring</div>
            <div className="tech-item">✅ Energy-Efficient Aeration Systems</div>
            <div className="tech-item">✅ Membrane-Based Filtration</div>
            <div className="tech-item">✅ Sludge Management & Odour Control</div>
            <div className="tech-item">✅ Recycled Water Reuse Systems</div>
          </div>

          <NavLink to="/contact">
            <button>Contact With us</button>
          </NavLink>
        </div>
        <div className="award-20-years">
          <img src="./plants/world2.webp" alt="awards" />
          <h1>20+ Year of Experience</h1>
        </div>
        <img src="./product/indus.webp" alt="soft" />
      </div>

      <SewageProductCard />
      <ProductCommon />
    </>
  )
}

export default ReverseOsmosis
