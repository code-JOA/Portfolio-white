import React from 'react';
import css from './Hero.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';

const Hero = () => {
  return (
    <section className={`padding ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* Upper Elements */}
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey there, <br />I am Joshua
          </motion.span>
        {/* animation fades in left ,for 0.4seconds delay 1 second  */}
          <motion.span className="secondaryText" 
          variants={fadeIn("left", "tween", 0.4, 1)}>
            I turn design into code
            <br />
            And I love what I do
          </motion.span>
        </div>
        {/* image goes here */}
        <motion.div 
        variants={fadeIn("Up", "tween", 0.3 , 1)}
        className={css.person}>
          <motion.img 
          variants={slideIn("Down", "tween", 0.5 , 1.3)}
          src="./josh6.png" alt="" />
        </motion.div>

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