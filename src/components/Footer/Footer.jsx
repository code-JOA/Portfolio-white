import React from 'react'
import css from './Footer.module.scss'

const Footer = () => {
  return (
    <section className={css.wrapper}>

        <div className={css.container}>

            <div className={css.left}>

                <span className="primaryText">
                    Say hello <a href="" '@mailtojoshbillion1@gmail.com'> />

                </span>
            </div>

            <div className={css.right}>

            </div>
        </div>
    </section>
    )
}

export default Footer