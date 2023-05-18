import React from 'react'
import css from './Footer.module.scss'
imp

const Footer = () => {
  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <div className={css.left}>
          <span className="primaryText">
            Let's Build Something <br />
            Awesome Together
          </span>

          <span className="primaryText">
            Feel Free <a href="@mailto:joshbillion1@gmail.com">Say Hello </a>
          </span>
        </div>

        <div className={css.right}>

            <div className={css.info}>

                <span className="secondaryText">
                    Information
                </span>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Footer