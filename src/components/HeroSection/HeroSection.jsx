import NoticeBanner from "../NoticeBanner/NoticeBanner";
import styles from "./HeroSection.module.scss"
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <>
    <NoticeBanner />
    <motion.div className={styles.wrapper}
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 1.5, type: "spring", delay: 0.8 }}
    >
      <div className={styles.hero}
      >
        <div data-scroll data-scroll-speed="0.1" className={styles.inner}>
          <div data-scroll data-scroll-speed="0.2" className={styles.float}></div>
        </div>
      </div>
    </motion.div>
        </>
  )
}

export default HeroSection;
