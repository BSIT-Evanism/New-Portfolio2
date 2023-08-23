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
        <div className={styles.wrapper}>
          <Marquee><h1 className={styles.text}>Welcome to my Portfolio - I am a developer without fear on using future tech to achieve anything Welcome to my Portfolio - I am a developer without fear on using future tech to achieve anything</h1></Marquee>
          <Marquee><h1 className={styles.text}>Also --- I'm also a design enthusiast, crafting microinteractions with futuristic flair and edge Also --- I'm also a design enthusiast, crafting microinteractions with futuristic flair and edge</h1></Marquee>
        </div>
      </Transition>
    </>


  )
}

export default Home;
