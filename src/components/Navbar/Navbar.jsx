import { Link } from "react-router-dom";
import styles from './Navbar.module.scss'
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Links from "../Links/Links";
import { useLocation } from "react-router-dom";


function Navbar() {
  const [hover, setHover] = useState(false)
  const { pathname } = useLocation()


  useEffect(() => {
    console.log(hover)
  }, [hover])

  const container = {
    hidden: { y: "100vh" },
    show: {
      y: 0,
      transition: {
        type: "spring", bounce: 0.2, damping: 20, mass: 2, velocity: 0.3, delay: 1.5
      }
    }
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div className={styles.nav}
          layoutId="nav"
          variants={container}
          initial="hidden"
          animate="show"
          whileHover={{ width: 400 }}
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
        >
          <Links locationName="home" loc="/" hover={hover} />
          <Links locationName="about" loc="/about" hover={hover} />
          <Links locationName="Projects" loc="/projects" hover={hover} />
        </motion.div>
      </AnimatePresence >
    </>
  )
}

export default Navbar;
