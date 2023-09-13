import styles from "./LoadingBar.module.scss";
import { motion } from "framer-motion";

function LoadingBar() {
  return (
    <>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.containerTop}
          initial={{ x: 0 }}
          exit={{ x: "200vw" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        ></motion.div>
        <motion.div
          className={styles.containerBottom}
          initial={{ x: 0 }}
          exit={{ x: "-300vh" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        ></motion.div>
      </div>
    </>
  );
}

export default LoadingBar;
