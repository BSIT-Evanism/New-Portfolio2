import React from 'react'
import useMousePosition from '../../utils/useMousePosition'
import { motion } from 'framer-motion'
import styles from './Cursor.module.scss'
import { AnimatePresence } from 'framer-motion'
import { useHover } from '../../context/ViewContext'
import { useEffect } from 'react'

export default function Cursor() {
  const { hover } = useHover()
  const { x, y } = useMousePosition()


  const size = hover ? 3 : 0.8;
  return (
    <>
      {!hover && (
        <motion.div
          layoutId="logoCursor"
          className={styles.cursor}
          animate={{ scale: size, x, y }}
          transition={{ type: "tween", ease: "backOut" }}
        ></motion.div>
      )}
    </>
  );
}
