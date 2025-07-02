import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SewageProductCard from '../product/SewageProductCard';
import ProductCommon from '../product/ProductCommon';

function Fabrication() {
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
          <h2>Fabrication and Job Work</h2>
          <p>
            We specialize in high-quality fabrication and job work services...
          </p>
          <div className="image-wrapper">
            <img src="./images/fab2.webp" alt="Fabrication and Job Work" />
          </div>
        </div>
      </section>

      <div className="sewage-treatment-stp container">
        <div className="sewage-treatment-plant-div">
          <h1>Fabrication & Job Work Services</h1>
          <p>
            3D Aqua offers expert fabrication and job work services...
          </p>
          <div className="out-area">
            <h2>Our Areas of Expertise</h2>
            <ul>
              <li>MS and SS structural fabrication</li>
              <li>Custom industrial tank and vessel manufacturing</li>
              <li>Fabrication of equipment frames, supports, and enclosures</li>
              <li>On-site job work and welding services</li>
              <li>Timely delivery with high precision and quality</li>
            </ul>
          </div>
        </div>

        <div className="sewage-treatment-enquiry">
          <h2>Enquiry Form</h2>

          <form
            className="stp-enquiry-form"
            aria-label="Fabrication Enquiry Form"
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
                className="stp-textarea"
                rows="5"
                required
                onChange={() => setSubmitted(false)}
              ></textarea>
            </div>

            <div className="stp-form-buttons">
              <button type="submit" className="stp-submit-btn">Submit</button>
              <a href="tel:919560307837" className="stp-call-btn">Call Us: 91-9560307837</a>
            </div>

            {submitted && (
              <p className="form-success-message">
                ✅ Thank you! Your enquiry has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="sewage-manufacture-plants">
        <div className="sewage-manufacture-div">
          <div className="manufacture-div-image">
            <img src="./product/fabrication2.avif" alt="fabrication" />
          </div>
          <div className="manufacture-content-flag">
            <h2>Why We Are the Best</h2>
            <h1>Fabrication & Job Work – 3D Aqua Expertise</h1>
            <p>
              At 3D Aqua, we take pride in delivering top-notch fabrication and job work services...
            </p>
          </div>
        </div>
      </div>

      <div className="technology-we-are">
        <div className="left-content">
          <p>Important Role</p>
          <h1>Technology We are Using</h1>
          <h2>Modern Techniques in Fabrication & Job Work</h2>

          <div className="tech-list">
            <div className="tech-item">✅ Precision MS & SS Fabrication Techniques</div>
            <div className="tech-item">✅ CNC & Plasma Cutting for High Accuracy</div>
            <div className="tech-item">✅ MIG/TIG Welding with Certified Welders</div>
            <div className="tech-item">✅ Custom Sheet Metal Design & Assembly</div>
            <div className="tech-item">✅ Surface Finishing: Powder Coating & Painting</div>
            <div className="tech-item">✅ Modular Frame Fabrication for Quick Installation</div>
            <div className="tech-item">✅ On-site Job Work & Heavy Duty Industrial Fabrication</div>
          </div>

          <NavLink to="/contact">
            <button>Contact With us</button>
          </NavLink>
        </div>

        <div className="award-20-years">
          <img src="./plants/world2.webp" alt="awards" />
          <h1>20+ Year of Experience</h1>
        </div>
        <img src="./product/fabrication3.avif" alt="fabrication" style={{ width: '500px' }} />
      </div>

      <SewageProductCard />
      <ProductCommon />
    </>
  );
}

export default Fabrication;

