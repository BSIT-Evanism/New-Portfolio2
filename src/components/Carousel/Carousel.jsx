import styles from './Carousel.module.scss'
import { motion } from 'framer-motion';


function Carousel() {
  return (
    <motion.ul className={styles.carousel}
    key="carousel"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 1.5, type: "spring", delay: 0.8 }}
    >
      <li className={styles.selection}>About Me</li>
      <li className={styles.selection}>Highlight</li>
      <li className={styles.selection}>FAQ</li>
    </motion.ul>
  )
}

export default Carousel;
