import Marquee from "../components/Marquee/Marquee";
import Navbar from "../components/Navbar/Navbar";
import Transition from "../components/Transition/Transition";
import styles from "./page-index.module.scss";
import Carousel from "../components/Carousel/Carousel";
import Trademark from "../components/Trademark/Trademark";
import { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { IntroContext } from "../context/navbarToggle";
import AnimatedLogo from "../components/AnimatedLogo/AnimatedLogo";
import NoticeBanner from "../components/NoticeBanner/NoticeBanner";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import IntroSection from "../components/IntroSection/IntroSection";

function Home() {
  const [, setHover] = useState(false);
  const loader = useContext(IntroContext);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // eslint-disable-next-line no-unused-vars
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });

  const handleChange = (param) => {
    setHover(param);
  };

  return (
    <>
      <Transition>
        <AnimatePresence>
          <Navbar key={"home"} />
        </AnimatePresence>
        <div className={styles.wrapper}>
          <Link to="/">{!loader && <AnimatedLogo />}</Link>
          <Carousel />
          <Trademark />
        </div>
        <NoticeBanner />
        <HeroSection />
        <IntroSection>
          <Marquee handleChange={handleChange} routeName="home">
            Welcome to my Portfolio - I am a developer without fear on using
            future tech to achieve anything Welcome to my Portfolio - I am a
            developer without fear on using future tech to achieve anything
            Welcome to my Portfolio - I am a developer without fear on using
            future tech to achieve anything
          </Marquee>
        </IntroSection>
        <div className={styles.test}></div>
        test scroll
        <div className={styles.test}>test scroll</div>
      </Transition>
    </>
  );
}

export default Home;
