import React from 'react'
import css from './Header.module.scss'
import { BiPhoneCall } from 'react-icons/bi'
import { motion }

const Header = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>

      <div className={`flexCenter innerWidth ${css.container}`}>

        <div className={css.name}>
          Joshua
        </div>

        <ul className={`flexCenter ${css.menu}`}>
          <li><a href="">Services</a></li>
          <li><a href="">Experience</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p> +44 746 080 8996</p>
            <BiPhoneCall size={"40px"}/>
            </li>
        </ul>

      </div>
    </div>
     
    )
}

export default Header