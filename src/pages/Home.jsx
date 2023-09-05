import Marquee from '../components/Marquee/Marquee';
import Navbar from '../components/Navbar/Navbar';
import Transition from '../components/Transition/Transition';
import styles from './page-index.module.scss'
import Carousel from '../components/Carousel/Carousel';
import Trademark from '../components/Trademark/Trademark';
import { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { IntroContext } from '../context/navbarToggle';
import AnimatedLogo from '../components/AnimatedLogo/AnimatedLogo';
import NoticeBanner from '../components/NoticeBanner/NoticeBanner';
import useMousePosition from '../utils/useMousePosition';
import { motion } from 'framer-motion';


function Home() {
  const [, setHover] = useState(false)
  const loader = useContext(IntroContext)
  const { x, y } = useMousePosition()

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        // eslint-disable-next-line no-unused-vars
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()

  })


  const handleChange = (param) => {
    setHover(param)

  }

  return (
    <>
      <motion.div
        className={styles.cursor}
        style={{ x, y }}
        transition={{ type: "tween", ease: "backOut" }}
      ></motion.div>
      <Transition>
        <Navbar key={"home"} />
        <div className={styles.wrapper}>
          <Link to="/">
            {!loader && (
              <AnimatedLogo />
            )}
          </Link>
          <Carousel />
          <Trademark />
        </div>
        <NoticeBanner />
        <HeroSection />
        <div className={styles.test}>
          <Marquee handleChange={handleChange} routeName="home">
            Welcome to my Portfolio - I am a developer without fear on using future tech to achieve anything Welcome to my Portfolio - I am a developer without fear on using future tech to achieve anything
          </Marquee>
          test scroll
        </div>
        <div className={styles.test}>test scroll</div>
      </Transition>
    </>
  )
}

export default Home;
