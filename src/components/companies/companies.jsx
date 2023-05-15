import React from 'react'
import css from './Companies.module.scss'
import { motion } from 'framer-motion'

const Companies = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`padding ${css.wrapper}`}
    >
      <div className={css.container}>
        <span className="primaryText">
            My Work Experience
        </span>
      </div>
    </motion.section>
  );
}

export default Companies