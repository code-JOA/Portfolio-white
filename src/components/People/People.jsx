import React from 'react'
import css from './People.module.scss'
import { motion } from 'framer-motion'
import { staggerChildren } from '../../utils/motion'

const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`yPaddings innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Testimonials</span>

          <p style={{ marginTop: '2rem'}}>
            I contacted Josh on LinkedIn and he helped me write my masters
            thesis.
          </p>
          <p>He assisted me with all my python assignments too.</p>
        </div>


        {/* carousel */}
        <div className={css.comments}>
            <Slider {...sliderSettings} className={css.slider}>
                {
                    comments.map((comments, i)=>{
                        return (
                            div.{css.}
                        )
                    })
                }
            </Slider>
        </div>
      </div>
    </motion.section>
  );
}

export default People