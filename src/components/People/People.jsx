import React from 'react'
import css from './People.module.scss'

const People = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>

        <div className={`ypaddings innerWidth ${css.container}`}>
            Testimonials
        </div>
    </section>
    )
}

export default People