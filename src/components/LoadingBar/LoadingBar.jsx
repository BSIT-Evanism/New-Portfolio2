import styles from "./LoadingBar.module.scss"
import { motion } from "framer-motion";
import logo from "../../assets/evan.svg"

function LoadingBar() {
  return (
    <>
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

    </>
  )
}

export default LoadingBar;
