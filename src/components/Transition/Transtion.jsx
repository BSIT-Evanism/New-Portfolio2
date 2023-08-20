import { motion } from "framer-motion";
import styles from "./Transition.module.scss"
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Transition({ children }) {
  const location = useLocation();
  return (
    <>
      {children}
      <motion.div
        className={styles.transitionEffect}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.h2 className={styles.path}>{location.pathname}</motion.h2>
      </motion.div>
      <motion.div
        className={styles.transitionEffect}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
      >
        <motion.h2 className={styles.path}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >Going to {location.pathname}</motion.h2>
      </motion.div>
    </>
  )

}

export default Transition;

