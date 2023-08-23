import Navbar from '../components/Navbar/Navbar';
import Transition from '../components/Transition/Transition';
import styles from './page-index.module.scss'
import { motion } from 'framer-motion';
import { transition } from './animation';
import Marquee from '../components/Marquee/Marquee';
import { useState } from 'react';


function About() {
const [hover,setHover] = useState(false)

const handleChange = (params) => {
  setHover(params)
}
  return (
    <>
      <Transition>
        <Navbar />
        <div className={styles.wrapper}>
          <motion.h1
            variants={transition}
            initial="initial"
            animate="enter"
            exit="exit"
          >About</motion.h1>
        </div>
          <Marquee handleChange={handleChange} routeName="About">
          Also --- I'm also a design enthusiast, crafting microinteractions with futuristic flair and edge Also --- I'm also a design enthusiast, crafting microinteractions with futuristic flair and edge
        </Marquee>
      </Transition>
    </>
  )
}

export default About;
