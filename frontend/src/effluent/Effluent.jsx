import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import SewageProductCard from '../product/SewageProductCard';
import ProductCommon from '../product/ProductCommon';
function Effluent() {
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
          <h2>Effluent Treatment Plant</h2>
          <p>
            We provide high-efficiency effluent treatment plants designed to remove harmful pollutants
            from industrial wastewater, ensuring compliance with environmental regulations and
            promoting sustainable practices.
          </p>
          <div class="image-wrapper">
            <img src="./images/Eff2.webp" alt="Effluent Treatment" />
          </div>
        </div>
      </section>


      <div className="sewage-treatment-stp container">
        <div className="sewage-treatment-plant-div">
          <h1>Effluent Treatment Plant (ETP)</h1>
          <p>
            An Effluent Treatment Plant (ETP) is designed to treat industrial wastewater and remove harmful chemicals, oils, grease, and toxic substances before it is discharged into the environment. These plants are essential for industries to comply with pollution control regulations and protect the ecosystem.
            <br />
            At 3D Aqua, we specialize in manufacturing high-performance ETP systems in both civil and mechanical formats. Our solutions are highly valued for their space-saving design, corrosion resistance, user-friendly operation, energy efficiency, and long-term durability. We aim to deliver optimal performance with minimal maintenance.
          </p>

          <div className="out-area">
            <h2>Our Areas of Expertise</h2>
            <p>We specialize in:</p>
            <ul>
              <li>Advanced chemical, physical, and biological treatment processes</li>
              <li>Compact and modular plant design</li>
              <li>Effective removal of hazardous industrial waste</li>
              <li>Quick and easy on-site installation</li>
              <li>Low operational cost</li>
              <li>Highly energy-efficient systems</li>
              <li>Automation for seamless operations</li>
              <li>Reliable and fast effluent treatment cycles</li>
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
            <img src="./product/eff.webp" alt="manufacture" />
          </div>
          <div className="manufacture-content-flag">
            <h2>Simply Know About</h2>
            <h1>ETP Design & Manufacturing – AquaPure Solutions</h1>
            <p>
              As India progresses toward rapid industrialization and economic growth, environmental challenges are also on the rise. One of the major concerns is the safe and effective treatment of industrial wastewater, also known as effluent. Many industries discharge untreated or partially treated wastewater containing hazardous chemicals, oils, and toxins into natural water bodies.
              This not only contaminates drinking water sources but also causes serious damage to agriculture, aquatic life, and public health. To tackle these issues, advanced Effluent Treatment Plants (ETPs) are being implemented across sectors like pharmaceuticals, textiles, chemicals, and food processing. ETPs are crucial for reducing water pollution, ensuring regulatory compliance, enabling wastewater reuse, and supporting sustainable industrial practices.
            </p>
            <NavLink to="https://3daqua.in/assets/etp-plant.pdf">
              <button>Download Brochure</button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="technology-we-are">
        <div className="left-content">
          <p>Important Role</p>
          <h1>Technology We are Using</h1>
          <h2>Modern Technologies Used in Effluent Treatment Plants</h2>

          <div className="tech-list">
            <div className="tech-item">✅ Advanced Physico-Chemical Treatment</div>
            <div className="tech-item">✅ Compact ETP Modular Units</div>
            <div className="tech-item">✅ SCADA-Based Smart Monitoring Systems</div>
            <div className="tech-item">✅ Energy-Efficient Chemical Dosing Systems</div>
            <div className="tech-item">✅ Pressure Sand & Activated Carbon Filtration</div>
            <div className="tech-item">✅ Sludge Dewatering & Odour Control Units</div>
            <div className="tech-item">✅ Treated Effluent Reuse for Non-potable Applications</div>
          </div>

          <NavLink to="/contact">
            <button>Contact With us</button>
          </NavLink>
        </div>

        <div className="award-20-years">
          <img src="./plants/world2.webp" alt="awards" />
          <h1>20+ Year of Experience</h1>
        </div>
        <img src="./product/eff.webp" alt="manufacture" />
      </div>

      <SewageProductCard />
      <ProductCommon />
    </>
  )
}

export default Effluent
