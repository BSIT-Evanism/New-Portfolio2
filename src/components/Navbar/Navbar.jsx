import styles from './Navbar.module.scss'
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Links from "../Links/Links";
import { NavbarContext } from '../../context/navbarToggle';
import { useContext } from 'react';
import { useView } from '../../context/ViewContext';


function Tooltip() {

  return (
    <motion.div
      className={styles.motionwrapper}
      initial={{ rotate: "-90deg", opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      exit={{ rotate: "-90deg", opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <p className={styles.tooltip__text}>Hover here</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.tooltip}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
      </svg>
    </motion.div>



  )
}


function Navbar() {
  const [hover, setHover] = useState(false)
  const value = useContext(NavbarContext)
  const viewValue = useView()

  const container = {
    hidden: { y: "30vh" },
    show: {
      y: 0,
      transition: {
        type: "spring", bounce: 0.2, damping: 20, mass: 2, velocity: 0.3, delay: 0.8
      }
    }
  }

  return (
    <>
      <AnimatePresence>
        {!viewValue && (

          <motion.div className={styles.wrapper}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{
              y: "30vh", transition: {
                type: "spring", bounce: 0.2, damping: 20, mass: 2, velocity: 0.3
              }
            }}
          >
            <AnimatePresence>

              {value < 2 && (
                !hover && (
                  <Tooltip />
                )
              )}
            </AnimatePresence>
            <motion.div className={styles.nav}
              layoutId="navbar"
              animate={hover ? { width: 400, x: -100 } : { width: 200, x: 0 }}
              // whileHover={{ width: 400, x: -100 }}
              onHoverStart={() => setHover(true)}
              onHoverEnd={() => setHover(false)}
              transition={{ duration: 0.5, type: "tween", ease: "backOut" }}
            >
              <AnimatePresence>


                <Links key={"home"} locationName="home" loc="/" hover={hover} />
                <Links key={"about"} locationName="about" loc="/about" hover={hover} />
                <Links key={"projects"} locationName="Projects" loc="/projects" hover={hover} />

              </AnimatePresence >
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar;
