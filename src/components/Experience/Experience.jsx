import React from 'react'
import css from './Experience.module.scss'
import { projectExperience } from '../../utils/data'


const Experience = () => {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                <div className="flexCenter">
                  <exp.icon size={25} color="white" />
                </div>

                <div>
                  <span>{exp.name}</span>
                  <span>{exp.projects}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className={css.rightSide}></div>
      </div>
    </section>
  );
}

export default Experience