import React from "react";
import useMousePosition from "../../utils/useMousePosition";
import { motion } from "framer-motion";
import styles from "./Cursor.module.scss";
import { useHover } from "../../context/ViewContext";
import { AnimatePresence } from "framer-motion";

export default function Cursor() {
  const hover = useHover();
  const { mousePosition } = useMousePosition();

  const size = hover ? 3 : 0.8;
  const sizeVar = hover ? 2 : 0;

  return (
    <>
      <motion.div className={styles.cursorWrapper}>
        <AnimatePresence>
          <motion.div
            layoutId="cursorLogo"
            className={styles.cursor}
            style={{ x: mousePosition.x, y: mousePosition.y }}
            animate={{ scale: size, opacity: hover ? 0 : 0.8 }}
          ></motion.div>
          {hover && (
            <motion.div
              layout
              className={styles.cursor}
              style={{ x: mousePosition.x, y: mousePosition.y }}
              animate={{ scale: sizeVar }}
              transition={{ type: "tween", ease: "backOut" }}
            ></motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
