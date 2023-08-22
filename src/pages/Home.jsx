import Marquee from '../components/Marquee/Marquee';
import Navbar from '../components/Navbar/Navbar';
import Transition from '../components/Transition/Transition';
import styles from './page-index.module.scss'
import { motion } from 'framer-motion';
import { transition } from './animation';

function Home() {
  return (
    <>
      <Transition>
        <Navbar />
        <motion.h1
          variants={transition}
          initial="initial"
          animate="enter"
          exit="exit"
        >Home</motion.h1>
        <Marquee><h1>hello world hello world hellohello world hello world hellohello world hello world hello world hello world</h1><h1>hello world</h1><h1>hello world</h1><h1>hello world</h1><h1>hello world</h1></Marquee>
      </Transition>
    </>


  )
}

export default Home;
