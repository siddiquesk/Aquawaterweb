import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SewageProductCard from '../product/SewageProductCard';
import ProductCommon from '../product/ProductCommon';
function UltraFiltration() {

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
          <h2>Ultrafiltration (UF) Plant</h2>
          <p>
            Our ultrafiltration plants are designed to remove suspended solids, bacteria, and viruses from water using advanced membrane technology.
            They are ideal for pre-treatment in RO systems or as standalone filtration units in industrial and domestic applications.
          </p>
          <div class="image-wrapper">
            <img src="./images/filtration6.webp" alt="Ultrafiltration Plant" />
          </div>
        </div>
      </section>


      <div className="sewage-treatment-stp container">
        <div className="sewage-treatment-plant-div">
          <h1>Ultrafiltration & Demineralization (DM) System</h1>
          <p>
            Ultrafiltration (UF) is a membrane-based water purification process that removes suspended solids, bacteria, and high-molecular-weight impurities, making it ideal as a pre-treatment for Demineralization (DM) systems. DM systems use ion-exchange resins to remove dissolved salts and minerals such as calcium, magnesium, sodium, chlorides, and sulfates from water, making it chemically pure.
            <br />
            At 3D Aqua, we offer integrated UF + DM systems for industries that require high-purity water for processes like pharmaceuticals, boilers, laboratories, and electronics. Our systems are fully automatic, low-maintenance, and designed to deliver consistently demineralized water with long resin life and efficient regeneration cycles.
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
            <img src="./product/filter4.avif" alt="soft" />
          </div>

          <div className="manufacture-content-flag">
            <h2>Simply Know About</h2>
            <h1>Ultrafiltration Applications – AquaPure Innovations</h1>
            <p>
              Ultrafiltration (UF) is a membrane-based filtration process used to remove suspended solids, bacteria, and high-molecular-weight contaminants from water. It plays a vital role in ensuring clean water for various industrial and commercial uses.
              <br /><br />
              At AquaPure Solutions, we provide advanced UF systems widely used in pre-treatment for RO plants, wastewater recovery, beverage production, and pharmaceutical manufacturing. Our UF units are compact, low-maintenance, and deliver consistent filtration performance across all applications.
            </p>
            <NavLink to="https://3daqua.in/assets/Best-STP-Plant-Manufacturers.pdf"><button>Download Brochure</button></NavLink>
          </div>
        </div>
      </div>

      <div className="technology-we-are">
        <div className="left-content">
          <p>Important Role</p>
          <h1>Technology We are Using</h1>
          <h2>Modern Technologies Used in Ultrafiltration Systems</h2>

          <div className="tech-list">
            <div className="tech-item">✅ Hollow Fiber Membrane Technology</div>
            <div className="tech-item">✅ Modular Skid-Mounted UF Units</div>
            <div className="tech-item">✅ Fully Automatic Control with PLC/SCADA Integration</div>
            <div className="tech-item">✅ Low-Pressure & Energy-Saving Operation</div>
            <div className="tech-item">✅ Pre-Treatment for RO and Demineralization Systems</div>
            <div className="tech-item">✅ Backwash & Chemical Cleaning Capabilities</div>
            <div className="tech-item">✅ Consistent Output Quality with Bacteria & Virus Removal</div>
          </div>

          <NavLink to="/contact">
            <button>Contact With us</button>
          </NavLink>
        </div>

        <div className="award-20-years">
          <img src="./plants/world2.webp" alt="awards" />
          <h1>20+ Year of Experience</h1>
        </div>
        <img src="./product/comm.webp" alt="manufacture" />
      </div>
      <SewageProductCard />
      <ProductCommon />
    </>
  )
}

export default UltraFiltration
