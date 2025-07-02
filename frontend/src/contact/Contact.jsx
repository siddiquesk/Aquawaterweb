import React, { useState } from 'react';
import "./Contact.css";
import MajorComp from '../pages/MajorComp';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      // Send form data to FormSubmit
      const waitResponse = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      })
      if (waitResponse) {
        setSubmitted(true);
        form.reset(); // Reset form fields
      }
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <>
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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.9008887783643!2d77.3272550754997!3d28.602749975680954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM2JzA5LjkiTiA3N8KwMTknNDcuNCJF!5e0!3m2!1sen!2sin!4v1751015257914!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>

      {/* Enquire & Form Section */}
      <section className="contact-enquire-wrapper">
        {/* LEFT: Enquire Now Info */}
        <article className="contact-enquire-left">
          <h1>Enquire Now</h1>
          <h2><a href="tel:+918963089630">+91-9560307837</a></h2>
          <h3><a href="mailto:info@3daqua.in">mukesh.hrsaquatreat@gmail.com</a></h3>

          <address className="water-card-free">Free Water Testing and Free Demo available</address>
          <address className="water-card-free">All over India service available</address>
        </article>

        {/* RIGHT: Contact Form */}
        <article className="contact-enquire-right">
          <form
            className="enquiry-form"
            aria-label="Contact Us Form"
            action="https://formsubmit.co/mukesh.hrsaquatreat@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />

            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={() => setSubmitted(false)}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                onChange={() => setSubmitted(false)}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="location"
                placeholder="Your Location"
                required
                onChange={() => setSubmitted(false)}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                required
                onChange={() => setSubmitted(false)}
              />
            </div>

            <div className="form-full">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                onChange={() => setSubmitted(false)}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
            {submitted && (
              <p className="form-success-message">
                Thank you! Your enquiry has been sent successfully.
              </p>
            )}
          </form>
        </article>
      </section>
      <MajorComp />
    </>
  );
}

export default Contact;



