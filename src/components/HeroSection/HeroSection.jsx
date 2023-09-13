import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.scss";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useMousePosition from "../../utils/useMousePosition.jsx";

function HeroSection() {
  const [hover, setHover] = useState(false);
  const [tilt, setTilt] = useState(false);
  const { mouseTilt } = useMousePosition();

  const heroTilt = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const xSpring = useSpring(heroTilt.x);
  const ySpring = useSpring(heroTilt.y);

  useEffect(() => {
    if (tilt) {
      heroTilt.x.set(mouseTilt.xDeg * -1);
      heroTilt.y.set(mouseTilt.yDeg);
    } else {
      heroTilt.x.set(0);
      heroTilt.y.set(0);
    }
  }, [mouseTilt.xDeg, mouseTilt.yDeg]);

  // useEffect(() => {
  //   if (tilt) {
  //     coords.x.set(mouseTilt.xDeg * -1);
  //     coords.y.set(mouseTilt.yDeg);
  //   } else {
  //     coords.x.set(0);
  //     coords.y.set(0);
  //   }
  //   ref.current.style.setProperty("--rotateX", -1 * mouseTilt.yDeg + "deg")
  //   ref.current.style.setProperty("--rotateY", mouseTilt.xDeg + "deg")
  // }, [mouseTilt.xDeg, mouseTilt.yDeg]);

  // useEffect(() => {
  //   console.log(mouseTilt);
  // }, [mouseTilt]);

  return (
    <>
      <motion.div
        className={styles.wrapper}
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        onMouseEnter={() => setTilt(true)}
        onMouseLeave={() => setTilt(false)}
        transition={{ duration: 1.5, type: "spring", delay: 0.8 }}
      >
        <motion.div
          className={styles.hero}
          style={{ rotateX: xSpring, rotateY: ySpring }}

          // animate={{rotateX: mouseTilt.yDeg, rotateY: mouseTilt.xDeg}}
        >
          <div className={styles.inner}>
            <div
              className={styles.contain}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className={`${styles.float}`}>
                <h1 className={styles.heroText}>
                  Evan <br />
                  Solanoy
                </h1>
              </div>
            </div>
            <motion.div
              className={styles.callFloat}
              drag="x"
              dragConstraints={{ left: 0, right: 300, top: 0, bottom: 0 }}
            >
              <div className={styles.ping}>
                <div className={styles.innerPing} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default HeroSection;
