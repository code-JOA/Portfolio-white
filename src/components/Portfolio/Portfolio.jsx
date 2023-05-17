import React from 'react'
import css from './Portfolio.module.scss'
import { motion } from 

const Portfolio = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">
                My Latest Project
            </span>
            <p style={{marginTop: '10px'}}>
                Perfect solution for digital products
            </p>
          </div>

          <span className="secondaryText">
            Explore More
          </span>
        </div>

        <div className={css.showCase}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" />
        </div>
      </div>
    </section>
  );
}

export default Portfolio