import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SewageProductCard from '../product/SewageProductCard';
import ProductCommon from '../product/ProductCommon';
function FireFighting() {
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
          <h2>Fire Fighting System</h2>
          <p>
            We offer advanced fire fighting systems that ensure maximum safety in residential, commercial, and industrial environments.
            Our solutions include fire hydrant networks, sprinkler systems, smoke detectors, and fire extinguishers — all designed to detect, control, and suppress fire hazards effectively.
          </p>
          <div class="image-wrapper">
            <img src="./images/fire3.webp" alt="Fire Fighting System" />
          </div>
        </div>
      </section>


      <div className="sewage-treatment-stp container">
        <div className="sewage-treatment-plant-div">
          <h1>Fire Fighting & Alarm Detection System</h1>
          <p>
            Fire emergencies are unpredictable and can cause massive damage to life and property. To manage risks and reduce hazards, a reliable and well-designed Fire Fighting System is essential in every building. Sea Max Fire Engineering Works provides advanced fire protection solutions to secure your premises and its occupants.
            <br />
            Our comprehensive fire protection plans are designed with precision to ensure early detection and quick response. From residential buildings to industrial complexes, we supply and install the most effective and efficient fire detection systems. Our goal is to ensure your safety through intelligent alarm systems and professionally executed fire control strategies.
            <br /><br />
            <strong>Our Fire and Alarm Detection Systems Include:</strong>
            <ul>
              <li>✔️ Heat Detector</li>
              <li>✔️ Smoke Detector</li>
              <li>✔️ Flame Detector</li>
              <li>✔️ Multi-Sensor Detector</li>
              <li>✔️ Infrared (IR) Detector</li>
              <li>✔️ Carbon Monoxide Detector</li>
              <li>✔️ Wireless Fire Alarm System</li>
              <li>✔️ Manual Fire Alarm System</li>
              <li>✔️ Automatic Fire Alarm System</li>
              <li>✔️ Addressable Fire Alarm System</li>
              <li>✔️ Conventional Fire Alarm System</li>
            </ul>
          </p>
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
            <img src="./product/fire.avif" alt="fire" />
          </div>

          <div className="manufacture-content-flag">
            <h2>Simply Know About</h2>
            <h1>Fire Fighting Systems – Sea Max Fire Solutions</h1>
            <p>
              Fire safety is critical in every residential, commercial, and industrial setup. A well-designed fire fighting system can save lives, protect valuable assets, and minimize fire-related damage during emergencies.
              <br /><br />
              At Sea Max Fire Engineering Works, we offer advanced fire fighting systems including hydrant systems, sprinkler networks, hose reels, and pump control panels. Our solutions are tailored to meet national fire safety standards and ensure quick response during any fire outbreak.
              <br /><br />
              Whether you need installation in buildings, factories, warehouses, or hospitals, our team delivers reliable and efficient fire safety systems with professional service and expert planning.
            </p>
          </div>
        </div>
      </div>

      <div className="technology-we-are">
        <div className="left-content">
          <p>Important Role</p>
          <h1>Technology We are Using</h1>
          <h2>Modern Technologies Used in Fire Fighting Systems</h2>

          <div className="tech-list">
            <div className="tech-item">✅ Hydrant & Sprinkler-Based Fire Suppression Systems</div>
            <div className="tech-item">✅ Smoke & Heat Detection Technologies</div>
            <div className="tech-item">✅ Fire Alarm Control Panels (Addressable & Conventional)</div>
            <div className="tech-item">✅ Pump Room with Automatic & Manual Operation Modes</div>
            <div className="tech-item">✅ Fire Hose Reel & Landing Valves with ISI Standards</div>
            <div className="tech-item">✅ Intelligent Flame, IR & Gas Leak Detectors</div>
            <div className="tech-item">✅ Integration with SCADA/BMS for Real-Time Monitoring</div>
          </div>

          <NavLink to="/contact">
            <button>Contact With us</button>
          </NavLink>
        </div>

        <div className="award-20-years">
          <img src="./plants/world2.webp" alt="awards" />
          <h1>20+ Year of Experience</h1>
        </div>
        <img src="./product/ff3.webp" alt="manufacture" />
      </div>

      <SewageProductCard />
      <ProductCommon />
    </>
  )
}

export default FireFighting
