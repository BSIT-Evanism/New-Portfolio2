import { motion } from "framer-motion";
import styles from './Links.module.scss'
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Trans({ children, loc }) {
  return (
    <motion.div
      layoutId={loc}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

function Links({ locationName, loc, hover }) {
  const { pathname } = useLocation()

  return (

    <>
      {pathname === loc ? (
        <Trans loc={loc}>
          <Link className={`${styles.linksActive} ${hover && (styles.linkExtended)}`} to={loc}><h3>{locationName}</h3></Link>
        </Trans>
      ) : hover ? (
        <Trans loc={loc}>
          <Link className={`${styles.links} ${styles.linkHover}`} to={loc}><h3>{locationName}</h3></Link>
        </Trans>
      ) : null}

    </>
  )

}

export default Links;
