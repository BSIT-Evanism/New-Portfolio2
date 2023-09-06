import React from 'react'
import useMousePosition from '../../utils/useMousePosition'
import { motion } from 'framer-motion'
import styles from './Cursor.module.scss'
import { AnimatePresence } from 'framer-motion'

export default function Cursor() {
    
    const { x, y } = useMousePosition()
  return (
    <>
   
        <AnimatePresence>

        <motion.div
        className={styles.cursor}
        style={{ x, y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", ease: "backOut" }}
        ></motion.div>
        </AnimatePresence>
        
        </>
  )
}
