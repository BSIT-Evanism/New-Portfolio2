import Navbar from '../components/Navbar/Navbar';
import Transition from '../components/Transition/Transition';
import styles from './page-index.module.scss'
import { motion } from 'framer-motion';
import { transition } from './animation';


function About() {

  return (
    <>
      <Transition>
        <Navbar />
        <motion.h1
          variants={transition}
          initial="initial"
          animate="enter"
          exit="exit"
        >About</motion.h1>
      </Transition>
    </>
  )
}

export default About;
