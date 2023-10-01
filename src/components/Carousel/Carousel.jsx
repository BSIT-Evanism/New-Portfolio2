import { useRef } from 'react';
import styles from './Carousel.module.scss'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect } from 'react';
import { useInViewUpdate, useView } from '../../context/ViewContext';



function Carousel() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const setView = useInViewUpdate();

  useEffect(() => {
    setView(isInView)
  }, [isInView])

  return (
    <motion.ul ref={ref} className={styles.carousel}
      key="carousel"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, type: "spring", delay: 0.8 }}
    >
      <li className={styles.selection}>Projects</li>
      <li className={styles.selection}>About</li>
      <li className={styles.selection}>FAQ</li>
    </motion.ul>
  )
}

export default Carousel;
