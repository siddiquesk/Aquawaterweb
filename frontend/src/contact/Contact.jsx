import React, { useState } from 'react'
import "./Contact.css"
import MajorComp from '../pages/MajorComp'
function Contact() {

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setContact({
      name: '',
      email: '',
      phone: '',
      location: '',
      message: ''
    });
  };
  return (
    <>
      {/* Top Banner Image Section */}
      <section className='common-page-element'>
        <figure className="first-common-image">
          <img src="./images/contact.webp" alt="Contact Banner" />
        </figure>
      </section>

      {/* Contact Heading & Google Map */}
      <section className='contact-section-first'>
        <header>
          <h1>We’d Love To Help You</h1>
          <p>
            Please feel free to get in touch using the form below. We'd love to hear your
            thoughts & answer any questions you may have!
          </p>
        </header>

        <section className="mt-10" aria-label="Our Location on Google Map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="3D Aqua Pune Location"
            className="rounded-md border border-gray-300 shadow-md"
          />
        </section>
      </section>

      {/* Enquire & Form Section */}
      <section className="contact-enquire-wrapper">
        {/* LEFT: Enquire Now Info */}
        <article className="contact-enquire-left">
          <h1>Enquire Now</h1>
          <h2><a href="tel:+918963089630">+91-89630-89630</a></h2>
          <h3><a href="mailto:info@3daqua.in">info@3daqua.in</a></h3>

          <address className="water-card-free">Free Water Testing and Free Demo available</address>
          <address className="water-card-free">All over India service available</address>
        </article>

        {/* RIGHT: Contact Form */}
        <article className="contact-enquire-right">
          <form className="enquiry-form" aria-label="Contact Us Form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" value={contact.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={contact.email} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <input type="text" name="location" placeholder="Your Location" value={contact.location} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Your Phone Number" value={contact.phone} onChange={handleChange} required />
            </div>

            <div className="form-full">
              <textarea name="message" placeholder="Your Message" rows="5" onChange={handleChange} value={contact.message} required></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </article>
      </section>
      <MajorComp />
    </>
  )
}

export default Contact
