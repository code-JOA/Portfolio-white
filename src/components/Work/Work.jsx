import React from 'react'
import css from './Work.module.scss'
import { motion } from 'framer-motion'
import { staggerChildren } from '../../utils/motion'
import { workExp } from '../../utils/data'

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
              return ()
            })

          }

        
        </div>
      </div>
    </motion.section>
  );
}

export default Work