import Marquee from '../components/Marquee/Marquee';
import Navbar from '../components/Navbar/Navbar';
import Transition from '../components/Transition/Transition';
import styles from './page-index.module.scss'
import { motion, AnimatePresence } from 'framer-motion';
import { transition } from './animation';
import Carousel from '../components/Carousel/Carousel';
import Trademark from '../components/Trademark/Trademark';
import { useState } from 'react';
import Logo from '../assets/evan.svg'
import HeroSection from '../components/HeroSection/HeroSection';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../assets/evan.svg'

function Home() {
  const [hover, setHover] = useState(false)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 4000)

  }, [])

  const handleChange = (param) => {
    setHover(param)
    console.log("the param is", param)
  }

  return (
    <>
      <AnimatePresence>
        {loader && (
          <motion.img
            layoutId='mainlogo'
            className={styles.logoIn}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 3.5, type: "spring" }}
            src={logo} alt="logo" />
        )}
      </AnimatePresence>

      <Transition>
        <Navbar />
        <div className={styles.wrapper}>
          <Link to="/">
            {!loader && (
              <motion.img
                layoutId='mainlogo'
                className={styles.logo}
                // variants={transition}
                // initial="initial"
                // animate="enter"
                // exit="exit"
                src={Logo} alt='myLogo' />
            )}
          </Link>
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
