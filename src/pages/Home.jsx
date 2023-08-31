import Marquee from '../components/Marquee/Marquee';
import Navbar from '../components/Navbar/Navbar';
import Transition from '../components/Transition/Transition';
import styles from './page-index.module.scss'
import { motion } from 'framer-motion';
import { transition } from './animation';
import Carousel from '../components/Carousel/Carousel';
import Trademark from '../components/Trademark/Trademark';
import { useState } from 'react';
import Logo from '../assets/evan.svg'
import HeroSection from '../components/HeroSection/HeroSection';

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
          <motion.div
            className={styles.logo}
            variants={transition}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <a href="https://react.dev" target='_blank'>
              <img src={Logo} alt='myLogo' />
            </a>
          </motion.div>
          <Carousel />
          <Trademark />
        </div>
        <HeroSection />
        <Marquee handleChange={handleChange} routeName="home">
          Welcome to my Portfolio - I am a developer without fear on using future tech to achieve anything Welcome to my Portfolio - I am a developer without fear on using future tech to achieve anything
        </Marquee>
        <div className={styles.test}>test scroll</div>
        <div className={styles.test}>test scroll</div>
      </Transition>
    </>
  )
}

export default Home;
