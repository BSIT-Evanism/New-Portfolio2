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
import { useContext } from 'react';
import { IntroContext, NavbarContext } from '../context/navbarToggle';


function Home() {
  const [hover, setHover] = useState(false)
  // const [loader, setLoader] = useState(true)
  const value = useContext(NavbarContext)
  const loader = useContext(IntroContext)
  
  // useEffect(() => {
  //     if(value >= 4) {
  //       setLoader(false)
  //     }
  //     setTimeout(() => {
  //       setLoader(false)
  //     }, 3000)
      
   
  // },[])

  
  const handleChange = (param) => {
    setHover(param)
    
  }

  return (
    <>
      <Transition>
        <Navbar key={"home"}/>
        <div className={styles.wrapper}>
          <Link to="/">
            {!loader && (
              <motion.img
                layoutId='mainlogo'
                className={styles.logo}
                // variants={transition}
                // initial={value >= 4 && "initial"}
                // animate={value >= 4 && "enter"}
                // exit={value >= 4 && "exit"}
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
