import React from 'react'
import css from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={`padding ${css.wrapper}`}>
        <div className={`innerWidth ${css.container}`}>


                <div className={css.upperElements}>

                    <span>
                        Hey there, <br/>I am Joshua
                        </span>
                    <span>I turn design into code<br/>
                    </span>
                </div>
                <div className={css.lowerElements}></div>

        </div>
    </section>

    )
}

export default Hero