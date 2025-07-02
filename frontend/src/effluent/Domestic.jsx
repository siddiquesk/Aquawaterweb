import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SewageProductCard from "../product/SewageProductCard"
import ProductCommon from "../product/ProductCommon"

function Domestic() {
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
          <h2>Domestic Water Softener</h2>
          <p>
            Our domestic water softeners are designed to eliminate hardness-causing minerals like calcium and magnesium from your household water supply.
            Enjoy cleaner laundry, longer-lasting appliances, and healthier skin and hair with our compact and efficient water softening solutions.
          </p>
          <div class="image-wrapper">
            <img src="./images/sewage1.webp" alt="Domestic Water Softener" />
          </div>
        </div>
      </section>


      <div className="sewage-treatment-stp container">
        <div className="sewage-treatment-plant-div">
          <h1>Domestic Water Supply System</h1>
          <p>
            A Domestic Water Supply System is designed to provide clean and safe water for household use, including drinking, cooking, bathing, and sanitation. It involves the efficient distribution of treated water using modern piping, filtration, and storage technologies to ensure uninterrupted and hygienic water delivery.
            <br />
            At 3D Aqua, we specialize in delivering high-quality domestic water supply solutions tailored to residential buildings, apartments, and housing societies. Our systems are known for their efficient design, durability, ease of maintenance, and reliability in ensuring consistent water flow and pressure.
          </p>

          <div className="out-area">
            <h2>Our Areas of Expertise</h2>
            <p>We specialize in:</p>
            <ul>
              <li>Advanced domestic water purification systems</li>
              <li>Smart and space-saving pipeline layout designs</li>
              <li>Reliable water pressure management solutions</li>
              <li>Quick and easy installation</li>
              <li>Cost-effective water distribution</li>
              <li>Energy-efficient pumping systems</li>
              <li>Fully automated water level and flow control</li>
              <li>High-quality storage and filtration units</li>
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
            <img src="./product/soft.webp" alt="soft" />
          </div>
          <div className="manufacture-content-flag">
            <h2>Simply Know About</h2>
            <h1>Domestic Water Supply Solutions – AquaPure Innovations</h1>
            <p>
              In today’s rapidly urbanizing world, ensuring a safe, consistent, and hygienic water supply to homes is more crucial than ever. Domestic water supply systems are the backbone of modern living—supporting everything from drinking and cooking to cleaning and sanitation. Yet, many urban and rural areas still struggle with irregular supply, low pressure, and unsafe water quality.
              <br /><br />
              At AquaPure Solutions, we design and deliver customized domestic water supply systems that combine smart engineering with sustainable practices. Our systems are engineered to optimize water pressure, minimize losses, and ensure every household receives clean and reliable water round the clock. With years of expertise, cutting-edge technology, and a commitment to excellence, we aim to redefine how water reaches every home.
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
        <img src="./product/comm.webp" alt="soft" />
      </div>

      <SewageProductCard />
      <ProductCommon />
    </>
  )
}

export default Domestic
