import React, { useState } from 'react';
import "./Career.css";
import MajorComp from "../pages/MajorComp";

function Career() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form)
    }).then(() => {
      setSubmitted(true);
      form.reset();
    }).catch((err) => {
      console.log(err);
    })
  };

  return (
    <>
      <section className="career-intro-section container">
        <div className="career-intro-content">
          <h2>Careers at Hrsaquatreat</h2>
          <p>
            At <strong>Hrsaquatreat</strong>, we empower individuals to grow their careers while solving real-world water treatment challenges.
            We offer opportunities for engineers, technicians, sales professionals, and service experts to thrive in a dynamic environment.
          </p>
          <p>
            Whether you're starting out or an experienced professional, we believe in nurturing talent, encouraging innovation,
            and building strong, future-ready teams.
          </p>
          <a href="#career-form" className="career-btn">Explore Career Opportunities</a>
        </div>
      </section>

      <div className="career-section container">
        <div className="career-about-section">
          <p className='welcome-career'><span>Welcome!</span> career</p>
          <div className="career-h1-div">
            <h1>Discover your new career</h1>
          </div>
          <p>
            Come be part of our team with <strong>HRS Aquatreat</strong> – bring your ideas, ingenuity and determination to make a difference...
          </p>
          <p>
            We are constantly on the lookout for talented individuals who are passionate about water purification, sustainability, and customer service excellence.
          </p>
          <p>
            At <strong>HRS Aquatreat</strong>, we believe in investing in people. We provide ongoing training, growth opportunities, and a collaborative environment where every voice is heard.
          </p>
          <p>
            Whether you are in engineering, sales, operations, or administration – your skills can help shape a better tomorrow.
          </p>
          <p>
            Apply today and let’s build cleaner, healthier communities through cutting-edge water technologies.
          </p>
          <ul className="career-points">
            <li>✔️ Competitive Salary & Benefits</li>
            <li>✔️ Supportive Team Culture</li>
            <li>✔️ Career Advancement Programs</li>
            <li>✔️ Pan India Presence</li>
            <li>✔️ Employee Wellness Initiatives</li>
          </ul>
        </div>


        <div className="career-form-div">
          <form
            className="enquiry-form"
            aria-label="Contact Us Form"
            action="https://formsubmit.co/mukesh.hrsaquatreat@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-row">
              <input type="text" name="name" placeholder="First Name" required onChange={() => setSubmitted(false)} />
              <input type="text" name="lastname" placeholder="Last Name" required onChange={() => setSubmitted(false)} />
            </div>

            <div className="form-row">
              <input type="text" name="qualification" placeholder="Enter your qualification" required onChange={() => setSubmitted(false)} />
              <input type="text" name="experience" placeholder="Experience" required onChange={() => setSubmitted(false)} />
            </div>

            <div className="form-row">
              <input type="email" name="email" placeholder="Your Email" required onChange={() => setSubmitted(false)} />
              <input type="tel" name="phone" placeholder="Your Phone Number" required onChange={() => setSubmitted(false)} />
            </div>

            <div className="form-row">
              <input type="text" name="city" placeholder="Your City Name" required onChange={() => setSubmitted(false)} />
            </div>

            <div className="form-full">
              <textarea name="message" placeholder="Type Your Message" rows="5" required onChange={() => setSubmitted(false)}></textarea>
            </div>

            <div className="form-full">
              <input type="file" name="resume" required onChange={() => setSubmitted(false)} />
            </div>

            <button type="submit">Submit</button>

            {submitted && (
              <p className="form-success-message" style={{ color: '#fff' }}>
                Thank you! Your enquiry has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </div>

      <MajorComp />
    </>
  );
}

export default Career;
