import React from "react";
import useMousePosition from "../../utils/useMousePosition";
import { motion } from "framer-motion";
import styles from "./Cursor.module.scss";
import { useHover } from "../../context/ViewContext";
import { AnimatePresence } from "framer-motion";

export default function Cursor() {
  const hover = useHover();
  const { mousePosition } = useMousePosition();

  const size = hover ? 4 : 0.8;
  const sizeVar = hover ? 3 : 0;

  return (
    <>
      <motion.div className={styles.cursorWrapper}>
        <AnimatePresence>
          <motion.div
            className={styles.cursor}
            style={{ x: mousePosition.x, y: mousePosition.y }}
            animate={{ scale: size, opacity: hover ? 0.5 : 0.8 }}
          ></motion.div>
        </AnimatePresence>
        {hover === "logo" ? (
          <motion.div
            className={styles.cursorSecondary}
            style={{ x: mousePosition.x, y: mousePosition.y }}
            animate={{ scale: sizeVar }}
            transition={{ type: "tween", ease: "backOut" }}
          ></motion.div>
        ) : hover === "projects" || hover === "about" || hover === "FAQ" ? (
          <motion.div
            className={styles.cursorThird}
            style={{ x: mousePosition.x, y: mousePosition.y }}
            animate={{ scale: sizeVar }}
            transition={{ type: "tween", ease: "backOut" }}
          ><p className={styles.label}>{hover}</p></motion.div>
        ) : null}
      </motion.div>
    </>
  );
}
