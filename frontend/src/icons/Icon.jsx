import React from 'react';
import "./Icon.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function Icon() {
  return (
    <>
      <div className='main-icons-div'>
        {/* WhatsApp Link */}
        <NavLink
          to='https://api.whatsapp.com/send?phone=919560307837&text=Hi!%20I%20would%20like%20to%20know%20more%20about%20HRS%20Aquatreat.%20Can%20we%20connect%20some%20time%20to%20discuss%20more'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className='fa-whatsapp colors-icons-static' />
        </NavLink>

        {/* Phone Call Link */}
        <a href="tel:+919560307837">
          <IoIosCall className='fa-caller colors-icons-static' />
        </a>

        {/* Email Link */}
        <a href="mailto:mukesh.hrsaquatreat@gmail.com?subject=Job%20Enquiry&body=Hello,%20I%20am%20interested%20in%20career%20opportunities.">

          <MdOutlineMail className='fa-mail colors-icons-static' />
        </a>
      </div>
    </>
  );
}

export default Icon;
