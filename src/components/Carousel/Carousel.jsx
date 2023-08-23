import styles from './Carousel.module.scss'
import { motion } from 'framer-motion';

function Carousel() {
  return (
    <ul className={styles.carousel}>
      <li className={styles.selection}>About Me</li>
      <li className={styles.selection}>Highlight</li>
      <li className={styles.selection}>FAQ</li>
    </ul>
  )
}

export default Carousel;
