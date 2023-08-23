import Marquee from '../components/Marquee/Marquee';
import Navbar from '../components/Navbar/Navbar';
import Transition from '../components/Transition/Transition';
import styles from './page-index.module.scss'
import { motion } from 'framer-motion';
import { transition } from './animation';
import Carousel from '../components/Carousel/Carousel';
import Trademark from '../components/Trademark/Trademark';
import { useState } from 'react';

function Home() {
  const[hover,setHover] = useState(false)

  const handleChange = (param) => {
    setHover(param)
    console.log("the param is",param)
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
          >Home</motion.h1>
          <Carousel />
          <Trademark />
        </div>
        <Marquee handleChange={handleChange} routeName="home">
          Welcome to my Portfolio - I am a developer without fear on using future tech to achieve anything Welcome to my Portfolio - I am a developer without fear on using future tech to achieve anything
        </Marquee>
      </Transition>
    </>
  )
}

export default Home;
