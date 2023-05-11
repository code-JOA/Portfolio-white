import React from 'react'
import css from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={`padding ${css.wrapper}`}>
        <div className={`innerWidth ${css.container}`}>

                {/* Upper Elements */}
                <div className={css.upperElements}>

                    <span>
                        Hey there, <br/>I am Joshua
                        </span>
                    <span>I turn design into code<br/>
                    And I love what I do</span>
                </div>

                {/* Lower elements */}

                <div className={css.lowerElements}>
                    <div className={css.experience}></div>
                    <div className={css.}></div>
                </div>

                

        </div>
    </section>

    )
}

export default Hero