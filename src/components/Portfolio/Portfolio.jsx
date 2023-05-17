import React from 'react'
import css from './Portfolio.module.scss'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'

const Portfolio = () => {
  return (
    <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}
    >
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Project</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital products
            </p>
          </div>

          <span className="secondaryText">Explore More</span>
        </div>

        <div className={css.showCase}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./showCase1.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./showCase2.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./showCase3.png"
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio