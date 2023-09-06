import styles from './AnimatedLogo.module.scss'
import { IntroContext } from '../../context/navbarToggle'
import { useContext } from 'react'
import Logo from '../../assets/evan.svg'
import { motion } from 'framer-motion'
import { useHover, useHoverUpdate } from '../../context/ViewContext'
import { useEffect } from 'react'

export default function AnimatedLogo() {
    const hover = useHover()
    const hoverUpdate = useHoverUpdate()
    const value = useContext(IntroContext)

    useEffect(() => {
        console.log(hover)
    }, [hover])

    return (
        <motion.div
            layoutId='mainlogo'
            onMouseOver={() => hoverUpdate(true)}
            onMouseLeave={() => hoverUpdate(false)}
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
            <div className={styles.logoContainer}>
            {}
            <motion.div layoutId='cursor' className={styles.cursor}/>

            <motion.img
                className={styles.logo}
                src={Logo} alt='myLogo' />
        
                </div>
            </motion.div>
    )
}
