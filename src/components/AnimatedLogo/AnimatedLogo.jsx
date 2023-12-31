import styles from "./AnimatedLogo.module.scss";
import Logo from "../../assets/evan.svg";
import { motion } from "framer-motion";
import { useHoverUpdate, useHover } from "../../context/ViewContext";
import { AnimatePresence, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import useMousePosition from "../../utils/useMousePosition";

export default function AnimatedLogo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const hover = useHover();
  const setHover = useHoverUpdate();
  const ref = useRef(null);

  const setLogoPosition = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const setLogoLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <>
      <motion.div
        layoutId="mainlogo"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={styles.logoContainer}>
          <AnimatePresence>
            {hover && (
              <motion.div layoutId="cursorLogo" className={styles.border} />
            )}
            <motion.img
              ref={ref}
              animate={{ x: position.x, y: position.y }}
              onMouseMove={setLogoPosition}
              onMouseLeave={setLogoLeave}
              className={styles.logo}
              src={Logo}
              alt="myLogo"
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
