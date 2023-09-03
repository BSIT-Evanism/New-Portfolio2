import styles from "./LoadingBar.module.scss"
import { motion } from "framer-motion";

function LoadingBar() {
  
  return (
    <>
    <div className={styles.wrapper}>
      <motion.div className={styles.containerTop}
        initial={{ x: 0 }}
        exit={{ x: "200vw" }}
        transition={{ duration: 1.3, ease: [0.32, 0, 0.46, 1] }}
      >
      </motion.div>
      <motion.div className={styles.containerBottom}
        initial={{ x: 0 }}
        exit={{ x: "-300vh" }}
        transition={{ duration: 1.3, ease: [0.32, 0, 0.46, 1] }}
      >
      </motion.div>
    </div>

    </>
  )
}

export default LoadingBar;
