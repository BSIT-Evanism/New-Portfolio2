import styles from './AnimatedLogo.module.scss'
import Logo from '../../assets/evan.svg'
import {motion} from 'framer-motion'
import {useHover, useHoverUpdate} from '../../context/ViewContext'

export default function AnimatedLogo() {
    const setHover = useHoverUpdate();
    const hover = useHover();

    return (
        <>
            <motion.div layoutId="mainlogo"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
            >
                <div className={styles.logoContainer}>
                    <motion.div layoutId="cursor" className={styles.cursor}/>
                    {hover && (
                        <motion.div
                            layoutId="logoCursor"
                            className={styles.border}/>

                    )}
                    <motion.img className={styles.logo} src={Logo} alt="myLogo"/>
                </div>
            </motion.div>
        </>
    );
}
