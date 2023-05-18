import React from 'react';
import css from './Footer.module.scss';
import { footerVariants, staggerChildren } from '../../utils/motion';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.section
    vairiants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

        <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
            <span className="primaryText">
            Let's Build Something <br />
            Awesome Together
          </span>

          <span className="primaryText">
            Feel Free <a href="@mailto:joshbillion1@gmail.com">Say Hello </a>
          </span>
        </div>

        <div className={css.right}>

            <div className={css.info}>

                <span className="secondaryText">
                    Information
                </span>
            </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Footer