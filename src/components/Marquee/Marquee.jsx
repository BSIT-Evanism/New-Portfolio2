import { useState } from 'react';
import styles from './Marquee.module.scss'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';


// eslint-disable-next-line react/prop-types
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
    </motion.div>
  )
}

// eslint-disable-next-line react/prop-types
function Marquee({ children, handleChange, routeName }) {
  const [hover, setHover] = useState(false)



  useEffect(() => {
    handleChange(hover)
  }, [hover])

  return (
    <>
      <motion.div className={styles.wrapper}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >

        <AnimatePresence mode="popLayout">
          {hover && (

            <motion.div className={styles.slidingText}
              key={"slidingText"}
              initial={{ y: "5vh" }}
              animate={{ y: 0 }}
              exit={{ y: "5vh" }}
              transition={{ duration: 0.8, type: "spring" }}

            >
              <MiniMarquee nameInput={routeName} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className={styles.marquee}
          key={"outer"}
          layout
          transition={{ duration: 0.5 }}
        >
          <motion.div
            key={"inner"}
            className={styles.child}
            animate={{ x: [0, -1590] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }}
          >

            <motion.div className={styles.nest}
              key={"nest"}
            >
              <h1 className={styles.text}
                key={"innerText"}
              >
                {children}
              </h1>

            </motion.div>
          </motion.div>
        </motion.div>
        <AnimatePresence mode="popLayout">

          {hover && (

            <motion.div className={styles.slidingText2}
              initial={{ y: "-7vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-8vh" }}
              transition={{ duration: 0.8, type: "spring" }}

            >
              <MiniMarquee nameInput="home" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Marquee;
