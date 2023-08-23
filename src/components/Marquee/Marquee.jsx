import { useState } from 'react';
import styles from './Marquee.module.scss'
import { motion } from 'framer-motion';
import { useEffect } from 'react';

function Marquee({ children }) {
  const [hover, setHover] = useState(false)

  useEffect(() => {
    console.log(hover)
  }, [hover])

  return (
    <div className={styles.marquee}>
      <motion.div
        className={styles.child}
        animate={{ x: [0, -1590] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" }}
      >

        <motion.div className={styles.nest}
          whileHover={{ scaleY: 0.5 }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Marquee;
