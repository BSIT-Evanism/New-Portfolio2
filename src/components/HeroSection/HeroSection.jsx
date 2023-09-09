import {useState} from "react";
import styles from "./HeroSection.module.scss"
import {motion} from "framer-motion";

function HeroSection() {
    const [hover, setHover] = useState(false)

    return (
        <>
            <motion.div className={styles.wrapper}
                        initial={{y: -100}}
                        animate={{y: 0}}
                        whileHover={{originX: 0.5}}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        transition={{duration: 1.5, type: "spring", delay: 0.8}}
            >
                <motion.div className={styles.hero}
                >
                    <motion.div className={styles.inner}
                    >
                        <motion.div className={styles.float}
                                    whileHover={{rotateY: "180deg"}}
                                    transition={{duration: 0.5}}
                        ></motion.div>
                        <motion.div className={styles.callFloat}
                        >
                            <div className={styles.ping}>
                                <div className={styles.innerPing}/>
                            </div>

                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default HeroSection;
