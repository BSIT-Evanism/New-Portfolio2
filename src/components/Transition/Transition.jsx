import { motion } from "framer-motion";
import styles from "./Transition.module.scss"
import { useLocation } from "react-router-dom";
import SmallMarquee from "../SmallMarquee/SmallMarquee";

function Transition({ children }) {

  const location = useLocation();
  return (
    <>
      {children}
      <motion.div
        className={styles.transitionEffect}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 0, opacity: 1 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <SmallMarquee nameInput="evan solanoy " />
        <motion.h2 className={styles.path}
          initial={{ rotateX: 180 }}
          animate={{ rotateX: 0 }}
          exit={{ rotateX: 90 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
        >{location.pathname}</motion.h2>
      </motion.div>
      <motion.div
        className={styles.transitionEffect2}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 1 }}
      >
        <SmallMarquee nameInput="evan solanoy " />
        <motion.h2 className={styles.path}
          initial={{ rotateX: 90 }}
          animate={{ rotateX: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >Going to {location.pathname}</motion.h2>
      </motion.div>
    </>
  )

}

export default Transition;

