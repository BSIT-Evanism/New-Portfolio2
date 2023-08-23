import styles from './Trademark.module.scss'
import { motion } from 'framer-motion';

function Trademark() {
  return (
    <motion.h3 className={styles.trademark}>code by evan solanoy ©</motion.h3>
  )
}

export default Trademark;
