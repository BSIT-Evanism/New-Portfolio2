import styles from './Marquee.module.scss'
import { motion } from 'framer-motion';

function Marquee({ children }) {
  return (
    <div className={styles.marquee}>
      <motion.div
        className={styles.child}
        animate={{ x: [0, -1590] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Marquee;
