import { useState } from 'react';
import styles from './Marquee.module.scss'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { LayoutGroup } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

function MiniMarquee({ nameInput }) {
  return (
    <motion.div
      className={styles.container}
      animate={{ x: [0, -1024] }}
      transition={{ repeat: Infinity, duration: 10, repeatType: "loop" }}
    >
      <p>{nameInput}</p>
      <p>{nameInput}</p>
      <p>{nameInput}</p>
      <p>{nameInput}</p>
      <p>{nameInput}</p>
      <p>{nameInput}</p>
      <p>{nameInput}</p>
      <p>{nameInput}</p>
      <p>{nameInput}</p>
      <p>{nameInput}</p>
      <p>{nameInput}</p>
      <p>{nameInput}</p>
    </motion.div>
  )
}

function Marquee({ children, handleChange, routeName }) {
  const [hover, setHover] = useState(false)



  useEffect(() => {
    handleChange(hover)
    console.log(hover)
  }, [hover])

  return (
    <>

      {hover && (
        
        <motion.div className={styles.slidingText}
          initial={{ y: "5vh" }}
          animate={{ y: 0 }}
          exit={{y: "5vh"}}
          transition={{ duration: 0.5 }}

        >
          <MiniMarquee nameInput={routeName}  />
        </motion.div>
      )}
      <motion.div className={styles.marquee}
        layoutId='marquee'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={styles.child}
          animate={{ x: [0, -1590] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" }}
        >

          <motion.div className={styles.nest}

          >
            <h1 className={styles.text}>
              {children}
            </h1>

          </motion.div>
        </motion.div>
      </motion.div>
      {hover && (
        
        <motion.div className={styles.slidingText2}
        initial={{ y: "-7vh" }}
        animate={{ y: 0 }}
        exit={{y: "-7vh"}}
        transition={{ duration: 0.5 }}
        
        >
          <MiniMarquee nameInput="home"  />
        </motion.div>
      )}
    </>
  )
}

export default Marquee;
