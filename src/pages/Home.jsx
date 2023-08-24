import Marquee from '../components/Marquee/Marquee';
import Navbar from '../components/Navbar/Navbar';
import Transition from '../components/Transition/Transition';
import styles from './page-index.module.scss'
import { motion } from 'framer-motion';
import { transition } from './animation';
import Carousel from '../components/Carousel/Carousel';
import Trademark from '../components/Trademark/Trademark';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function Home() {
  const [hover, setHover] = useState(false)


  const handleChange = (param) => {
    setHover(param)
    console.log("the param is", param)
  }

  return (
    <>
      <Transition>
        <Navbar />
        <div className={styles.wrapper}>
          <motion.h1
            className={styles.title}
            variants={transition}
            initial="initial"
            animate="enter"
            exit="exit"
          >Home</motion.h1>
          <Carousel />
          <Trademark />
        </div>
        <AnimatePresence>
        
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
          >

          <Marquee handleChange={handleChange} routeName="home">
            Welcome to my Portfolio - I am a developer without fear on using future tech to achieve anything Welcome to my Portfolio - I am a developer without fear on using future tech to achieve anything
          </Marquee>
          </motion.div>
      
            </AnimatePresence>
      </Transition>
    </>
  )
}

export default Home;
