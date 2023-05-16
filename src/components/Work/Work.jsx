import React from 'react'
import css from './Work.module.scss'
import { motion } from 'framer-motion'
import { staggerChildren } from '../../utils/motion'

const Work = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings {css.container}`}
    >
      <div className={`flexCenter innerWidth ${css.experience}`}>
        <span className="primaryText yPaddings">
          Work Experience
        </span>


        <div className={css.experiences}>

          {
            workExp.map((exp, i)=>{
              return(<div className={css.experience} key={i}>
              </div>
                )
            })
          }

          {workExp.map((exp, i) => {
            return (
              <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>


        </div>
      </div>
    </motion.section>
  );
}

export default Work