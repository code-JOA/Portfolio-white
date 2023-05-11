import React from 'react'
import css from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={`padding ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        {/* Upper Elements */}
        <div className={css.upperElements}>
          <span className="primaryText">
            Hey there, <br />I am Joshua
          </span>
          <span className="secondaryText">
            I turn design into code
            <br />
            And I love what I do
          </span>
        </div>

        <div className={css.person}>
            <img src="./Josh5.png" alt="" />
        </div>

        {/* Lower elements */}

        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>Certified Professional</span>
            <span>UI/UX Designer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero