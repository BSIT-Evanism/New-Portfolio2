import { useState } from "react";
import styles from "./HeroSection.module.scss"
import { motion } from "framer-motion";

function HeroSection() {
  const [hover, setHover] = useState(false)

  return (
    <>
      <motion.div className={styles.wrapper}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        whileHover={{ originX: 0.5 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        transition={{ duration: 1.5, type: "spring", delay: 0.8 }}
      >
        <motion.div className={styles.hero}
        >
          <motion.div data-scroll data-scroll-speed="0.1" className={styles.inner}
          >
            <motion.div data-scroll data-scroll-speed="0.2" className={styles.float}
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default HeroSection;
