import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SewageProductCard from "../product/SewageProductCard"
import ProductCommon from "../product/ProductCommon"
function ReverseOsmosis() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (err) {
      console.error("Form submission error:", err);
    }
  };

  return (
    <>
      <section class="common-section">
        <div class="common-content">
          <h2>Reverse Osmosis (RO) Plant</h2>
          <p>
            Our reverse osmosis plants deliver pure and safe drinking water by effectively removing dissolved salts, bacteria, and impurities.
            Ideal for residential, commercial, and industrial use, our RO systems are energy-efficient, low-maintenance, and designed for long-lasting performance.
          </p>
          <div class="image-wrapper">
            <img src="./images/r4.webp" alt="Reverse Osmosis Plant" />
          </div>
        </div>
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

          <form
            className="stp-enquiry-form"
            aria-label="Sewage Treatment Enquiry Form"
            action="https://formsubmit.co/mukesh.hrsaquatreat@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />

            <div className="stp-form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="stp-input"
                onChange={() => setSubmitted(false)}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                required
                className="stp-input"
                onChange={() => setSubmitted(false)}
              />
            </div>

            <div className="stp-form-row">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="stp-input"
                onChange={() => setSubmitted(false)}
              />
            </div>

            <div className="stp-form-full">
              <textarea
                name="message"
                placeholder="Your Message"
                className='stp-textarea'
                rows="5"
                required
                onChange={() => setSubmitted(false)}
              ></textarea>
            </div>

            <div className="stp-form-buttons">
              <button type="submit" className="stp-submit-btn">Submit</button>
              <button className="stp-call-btn">Call Us: 91-9560307837</button>
            </div>

            {submitted && (
              <p className="form-success-message">
                Thank you! Your enquiry has been sent successfully.
              </p>
            )}
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
