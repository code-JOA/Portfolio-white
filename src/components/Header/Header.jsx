import React from 'react'
import css from './Header.module.scss'
import { BiMenuAltRight,BiPhoneCall } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { headerVariants } from '../../utils/motion'

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.5 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Joshua</div>

        <ul className={`flexCenter ${css.menu}`}>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p> +44 746 080 8996</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        <div className={css.menuIcon} 
        onclick={}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
}

export default Header