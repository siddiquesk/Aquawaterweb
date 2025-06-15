import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import "./TopComp.css"
function TopComp() {
  return (
    <>
      <section className="water-layout">
        <div className="contact-group">
          <article className="contact-box">
            <IoCallOutline className="contact-icon" />
            <p className="contact-text">+91-77889 55667</p>
          </article>

          <article className="contact-box">
            <IoCallOutline className="contact-icon" />
            <p className="contact-text">+91-99999 88888</p>
          </article>

          <address className="contact-box-2">
            <CiLocationOn className="contact-icon" />
            <p className="contact-text">
              A-12, Sector 63, Industrial Area, Noida - 201301
            </p>
          </address>
        </div>

        <div className="right-group">
          <article className="contact-box email-box">
            <TfiEmail className="contact-icon" />
            <p className="contact-text">contact@watervision.in</p>
          </article>

          <div className="language-box">
            <div className="select-wrapper">
              <label htmlFor="language-select" className="sr-only">
                Select a Country
              </label>
              <select id="language-select" className="language-select">
                <option value="">Select a Country</option>
                <option value="india">India</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="japan">Japan</option>
                <option value="china">China</option>
                <option value="brazil">Brazil</option>
                <option value="south_africa">South Africa</option>
                <option value="italy">Italy</option>
                <option value="mexico">Mexico</option>
                <option value="russia">Russia</option>
                <option value="singapore">Singapore</option>
                <option value="netherlands">Netherlands</option>
                <option value="spain">Spain</option>
                <option value="indonesia">Indonesia</option>
              </select>
              <span className="select-arrow">&#9662;</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopComp


