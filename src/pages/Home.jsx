import Marquee from '../components/Marquee/Marquee';
import Navbar from '../components/Navbar/Navbar';
import Transition from '../components/Transition/Transition';
import styles from './page-index.module.scss'
import { motion, AnimatePresence } from 'framer-motion';
import { transition } from './animation';
import Carousel from '../components/Carousel/Carousel';
import Trademark from '../components/Trademark/Trademark';
import { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { IntroContext } from '../context/navbarToggle';
import AnimatedLogo from '../components/AnimatedLogo/AnimatedLogo';


function Home() {
  const [hover, setHover] = useState(false)
  const loader = useContext(IntroContext)

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
              <AnimatedLogo />
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
