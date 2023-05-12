import React from 'react'
import css from './Experience.module.scss'
import { projectExperience } from './utils/data'


const Experience = () => {
  return (
    <section className={css.wrapper}>
      <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>


        <div className={css.leftSide}>

            {
                projectExperience.map

            }
        </div>

        <div className={css.rightSide}></div>


      </div>
    </section>
  );
}

export default Experience