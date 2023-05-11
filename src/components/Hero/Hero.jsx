import React from 'react'
import css from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={`padding ${css.wrapper}`}>
        <div className={`innerWidth ${css.container}`}>


                <div className={css.upperElements}>

                    <span>Het there, <br>
                    I am Joshua</br></span>
                    <span></span>
                </div>
                <div className={css.lowerElements}></div>

        </div>
    </section>

    )
}

export default Hero