import styles from './AnimatedLogo.module.scss'
import { IntroContext } from '../../context/navbarToggle'
import { useContext } from 'react'
import { transition } from './anim'
import Logo from '../../assets/evan.svg'
import { motion } from 'framer-motion'

export default function AnimatedLogo() {
    const value = useContext(IntroContext)

    return (
        <motion.div
            
        >
            <motion.img
                className={styles.logo}
                src={Logo} alt='myLogo' />
        </motion.div>
    )
}
