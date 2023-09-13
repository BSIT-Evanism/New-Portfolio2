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
          transition={{ duration: 2, ease: [0.19, 0.78, 0.25, 0.855] }}
        ></motion.div>
        <motion.div
          className={styles.containerBottom}
          initial={{ x: 0 }}
          exit={{ x: "-300vh" }}
          transition={{ duration: 2, ease: [0.19, 0.78, 0.25, 0.855] }}
        ></motion.div>
      </div>
    </>
  );
}

export default LoadingBar;
