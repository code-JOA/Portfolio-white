import React from 'react'
import css from './Portfolio.module.scss'

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
            
        </div>
      </div>
    </section>
  );
}

export default Portfolio