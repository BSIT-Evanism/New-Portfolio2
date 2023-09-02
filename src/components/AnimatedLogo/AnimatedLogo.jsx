import styles from './AnimatedLogo.module.scss'
import { IntroContext } from '../../context/navbarToggle'
import { useContext } from 'react'
import Logo from '../../assets/evan.svg'
import { motion } from 'framer-motion'

export default function AnimatedLogo() {
    const value = useContext(IntroContext)

    return (
        <motion.div
            layoutId='mainlogo'

            initial={value >= 4 && { y: "-100vh"} }
            animate={value >= 4 && {
                y: 0,
                transition: {
                    duration: 1.5, type: "spring", delay: 0.8
                }
            }}
            exit={value >= 4 && {
                y: "-100vh",
                transition: {
                    duration: 0.8, type: "spring"
                }
            }}
        >
            <motion.img
                className={styles.logo}
                src={Logo} alt='myLogo' />
        </motion.div>
    )
}
