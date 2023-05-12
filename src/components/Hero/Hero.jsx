import React from 'react';
import css from './Hero.module.scss';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className={`padding ${css.wrapper}`}>
      <motion.div className={`innerWidth ${css.container}`}>
        variant: {stagger}
        {/* Upper Elements */}
        <div className={css.upperElements}>
          <span className="primaryText">
            Hey there, <br />I am Joshua
          </span>
          <span className="secondaryText">
            I turn design into code
            <br />
            And I love what I do
          </span>
        </div>
        {/* image goes here */}
        <div className={css.person}>
          <img src="./josh6.png" alt="" />
        </div>

        {/* email goes here  */}
        <a className={css.email} href="mailto:josh_billion@gmail.com">
            josh_billion@yahoo.com
        </a>

        {/* Lower elements */}

        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>Certified Professional</span>
            <span>UI/UX Designer</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero