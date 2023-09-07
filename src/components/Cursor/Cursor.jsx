import React from 'react'
import useMousePosition from '../../utils/useMousePosition'
import { motion } from 'framer-motion'
import styles from './Cursor.module.scss'
import { AnimatePresence } from 'framer-motion'
import { useHover } from '../../context/ViewContext'

export default function Cursor() {
    const hover = useHover()
    const { x, y } = useMousePosition()

    const size = hover ? 5.5 : 1.5;
  return (
    <>
   
        

        <motion.div
        className={styles.cursor}
        animate={{ x: x, y: y, scale: size }}
        transition={{ type: "tween", ease: "backOut" }}
        ></motion.div>
        
        </>
  )
}
