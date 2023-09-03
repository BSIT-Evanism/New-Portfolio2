import { useState } from 'react';
import styles from './Trademark.module.scss'
import { motion } from 'framer-motion';

function Trademark() {
  const [, setHover] = useState(false)

  return (
    <motion.div className={styles.container}
      key="trademark"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, type: "spring", delay: 0.8 }}

      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        whileHover={{ y: '-35px' }}
      >
        <h3 className={styles.trademark}
        >code by evan solanoy ©</h3>
        <h3 className={styles.trademark}
        >Go to my github</h3>
      </motion.div>

    </motion.div>
  )
}

export default Trademark;
