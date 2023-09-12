import styles from "./AnimatedLogo.module.scss";
import Logo from "../../assets/evan.svg";
import { motion } from "framer-motion";
import { useHoverUpdate, useHover } from "../../context/ViewContext";
import { AnimatePresence } from "framer-motion";

export default function AnimatedLogo() {
  const hover = useHover();
  const setHover = useHoverUpdate();

  return (
    <>
      <motion.div
        layoutId="mainlogo"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={styles.logoContainer}>
          <AnimatePresence>
            {hover && (
              <motion.div layoutId="cursorLogo" className={styles.border} />
            )}
            <motion.img className={styles.logo} src={Logo} alt="myLogo" />
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
