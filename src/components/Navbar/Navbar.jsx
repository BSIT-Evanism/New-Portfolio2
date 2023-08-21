import { Link } from "react-router-dom";
import styles from './Navbar.module.scss'
import { useState } from "react";
import { motion } from "framer-motion";


function Navbar() {
  const [hover, setHover] = useState(false)


  return (
    <>
      <motion.ul className={styles.nav}
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 2 }}
      >
        <Link className={styles.links} to="/"><h3>Home</h3></Link>
        <Link className={styles.links} to="/about"><h3>About</h3></Link>
        <Link className={styles.links} to="/projects"><h3>Projects</h3></Link>
      </motion.ul>
    </>
  )
}

export default Navbar;
