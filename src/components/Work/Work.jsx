import React from 'react'
import css from './Work.module.scss'
import { motion } from 'framer-motion'

const Work = () => {
  return (
    <section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings {css.container}`}
    >
      <div className={css.experience}>Here is my work</div>
    </section>
  );
}

export default Work