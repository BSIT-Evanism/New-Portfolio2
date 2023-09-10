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
                        transition={{duration: 1.5, type: "spring", delay: 0.8}}
            >
                <motion.div className={styles.hero}
                >
                    <motion.div className={styles.inner}
                    >
                        <motion.div
                            className={styles.contain}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            <motion.div className={styles.float}
                                        animate={hover ? {rotateY: "180deg"} : {rotateX: 0}}
                                        transition={{duration: 0.5, type: "tween"}}
                            ></motion.div>
                        </motion.div>
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
