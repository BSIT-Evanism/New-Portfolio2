import React from 'react'
import useMousePosition from '../../utils/useMousePosition'
import {motion} from 'framer-motion'
import styles from './Cursor.module.scss'
import {useHover} from '../../context/ViewContext'


export default function Cursor() {
    const hover  = useHover()
    const {mousePosition} = useMousePosition()


    const size = hover ? 3 : 0.8;
    return (
        <>
            {!hover && (
                <motion.div
                    layoutId="logoCursor"
                    className={styles.cursor}
                    style={{x: mousePosition.x, y: mousePosition.y}}
                    animate={{scale: size}}
                    transition={{type: "tween", ease: "backOut"}}
                ></motion.div>
            )}
        </>
    );
}
