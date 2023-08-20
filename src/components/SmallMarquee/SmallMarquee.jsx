import { motion } from "framer-motion"
import styles from "./SmallMarquee.module.scss"

function SmallMarquee() {
  return (
    <>
      <div className={styles.slidingText}>
        <motion.div
          className={styles.container}
          animate={{ x: [0, -1024] }}
          transition={{ repeat: Infinity, duration: 10, repeatType: "loop" }}
        >
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
        </motion.div>
      </div>
      <div className={styles.slidingTextTop}>
        <motion.div
          className={styles.container}
          animate={{ x: [-1024, 0] }}
          transition={{ repeat: Infinity, duration: 10, repeatType: "loop" }}
        >
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
        </motion.div>
      </div>


      <div className={styles.slidingText2}>
        <motion.div
          className={styles.container}
          animate={{ x: [0, -1024] }}
          transition={{ repeat: Infinity, duration: 50, repeatType: "loop" }}
        >
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>

        </motion.div>
      </div>
      <div className={styles.slidingTextTop2}>
        <motion.div
          className={styles.container}
          animate={{ x: [-1024, 0] }}
          transition={{ repeat: Infinity, duration: 50, repeatType: "loop" }}
        >
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>
          <p>evan solanoy</p>

        </motion.div>
      </div>

      </>
  )
}

export default SmallMarquee;
