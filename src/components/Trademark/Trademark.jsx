import { useState } from 'react';
import styles from './Trademark.module.scss'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

function Trademark() {
  const [hover, setHover] = useState(false)

  useEffect(() => {
    console.log(hover)
  }, [hover])
  return (
    <motion.div className={styles.container}
      key="trademark"
      initial={{ opacity: 1, y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, type: "spring", delay: 1.5 }}

      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        whileHover={{ y: -25 }}
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
