import styles from "./LoadingBar.module.scss"
import { motion } from "framer-motion";

function LoadingBar() {
  return (
    <motion.div className={styles.container}
      initial={{ y: 0 }}
      exit={{ y: "100vh" }}
      transition={{ duration: 1.3, ease: [0.32, 0, 0.46, 1] }}
    >

    </motion.div>
  )
}

export default LoadingBar;
