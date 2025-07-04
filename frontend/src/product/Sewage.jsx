import React, { useState } from 'react';
import "./Product.css";
import { NavLink } from "react-router-dom";
import SewageProductCard from './SewageProductCard';
import ProductCommon from './ProductCommon';

function Sewage() {
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
      <section className="common-section">
        <div className="common-content">
          <h2>Sewage Treatment Plant</h2>
          <p>
            Our advanced sewage treatment systems ensure efficient waste processing,
            meeting environmental standards with cutting-edge technology.
          </p>
          <div className="image-wrapper">
            <img src="./images/sewage2.webp" alt="Sewage Treatment" />
          </div>
        </div>
      </section>

      <div className="sewage-treatment-stp container">
        <div className="sewage-treatment-plant-div">
          <h1>Sewage Treatment Plant (STP)</h1>
          <p>
            A Sewage Treatment Plant (STP) is designed to remove impurities and harmful elements from wastewater using advanced physical, chemical, and biological processes. These systems ensure that water is treated efficiently before being released or reused, helping to protect the environment and conserve resources.
            <br />
            At HRS Aquatreat, we manufacture high-quality STP plants in both civil and mechanical models. Our clients consistently appreciate the compact structure, ease of operation, long-lasting durability, minimal maintenance, resistance to corrosion, and overall high performance of our STP systems.
          </p>

          <div className="out-area">
            <h2>Our Areas of Expertise</h2>
            <p>We specialize in:</p>
            <ul>
              <li>Innovative and reliable treatment technologies</li>
              <li>Space-saving compact designs</li>
              <li>Complete removal of harmful industrial pollutants</li>
              <li>Simple and hassle-free installation</li>
              <li>Cost-effective operation</li>
              <li>Energy-efficient performance</li>
              <li>Fully automated systems</li>
              <li>Fast and efficient water treatment cycles</li>
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
            <img src="./product/manufacture.webp" alt="manufacture" />
          </div>
          <div className="manufacture-content-flag">
            <h2>Simply Know About</h2>
            <h1>STP Design & Manufacturing – AquaPure Solutions</h1>
            <p>As India advances on its path to becoming a global economic powerhouse, one of the greatest challenges it faces is environmental sustainability. Among the many environmental issues, the mismanagement of wastewater has emerged as a critical concern. Rapid urban growth and unchecked industrial activity have led to a sharp rise in the generation of untreated sewage across cities and towns.
              Untreated wastewater is increasingly polluting our rivers, lakes, and groundwater sources, leading to severe health hazards and ecosystem damage. The release of harmful contaminants into water bodies not only affects drinking water quality but also threatens agricultural productivity and industrial operations. In this scenario, the deployment of efficient Sewage Treatment Plants (STPs) has become essential to ensure safe water reuse, environmental protection, and public health.</p>
            <NavLink to="https://3daqua.in/assets/Best-STP-Plant-Manufacturers.pdf"><button>Download Brochure</button></NavLink>
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
      </div>

      <SewageProductCard />
      <ProductCommon />
    </>
  );
}

export default Sewage;

