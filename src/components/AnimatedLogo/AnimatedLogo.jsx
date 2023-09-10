import styles from './AnimatedLogo.module.scss'
import { IntroContext } from '../../context/navbarToggle'
import { useContext } from 'react'
import Logo from '../../assets/evan.svg'
import { motion } from 'framer-motion'
import { useHover, useHoverUpdate } from '../../context/ViewContext'
import { useEffect } from 'react'

export default function AnimatedLogo() {
  const setHover = useHoverUpdate();
  const hover = useHover();

  return (
    <motion.div layoutId="mainlogo"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.logoContainer}>
        <motion.div layoutId="cursor" className={styles.cursor} />
        {hover ? (
          <motion.div
            layoutId="logoCursor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.border} />

        ) : null}
        <motion.img className={styles.logo} src={Logo} alt="myLogo" />
      </div>
    </motion.div>
  );
}
