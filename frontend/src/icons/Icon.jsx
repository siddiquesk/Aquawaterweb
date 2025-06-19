import React from 'react'
import "./Icon.css"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { NavLink } from 'react-router-dom';
function Icon() {
  return (
    <>
      <div className='main-icons-div'>
        <NavLink to='https://api.whatsapp.com/send?phone=916262629090&text=Hi!%20I%20would%20like%20to%20know%20more%20about%203daqua.%20Can%20we%20connect%20some%20time%20to%20discuss%20more'>
          <FaWhatsapp className='fa-whatsapp colors-icons-static' />
        </NavLink>
        <NavLink>
          <IoIosCall className='fa-caller colors-icons-static' />
        </NavLink>
        <NavLink>
          <MdOutlineMail className='fa-mail colors-icons-static' />
        </NavLink>
      </div>
    </>
  )
}

export default Icon
