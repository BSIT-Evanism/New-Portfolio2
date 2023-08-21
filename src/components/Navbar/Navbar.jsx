import { Link } from "react-router-dom";
import styles from './Navbar.module.scss'
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";


function Navbar() {
  const [hover, setHover] = useState(false)

  const container = {
    hidden: { y: "100vh" },
    show: {
      y: 0,
      transition: {
        type: "spring", bounce: 0.3, damping: 9, mass: 2, velocity: 0.2, delay: 1.5
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        damping: 15, type: "spring", stiffness: 400
      }
    }
  }

  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.div className={styles.nav}
          layoutId="nav"
          variants={container}
          initial="hidden"
          animate="show"
          whileHover="hover"
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
        >
          <Link className={styles.links} to="/"><h3>Home</h3></Link>
          {hover && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link className={styles.links} to="/about"><h3>About</h3></Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link className={styles.links} to="/projects"><h3>Projects</h3></Link>
              </motion.div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Navbar;
