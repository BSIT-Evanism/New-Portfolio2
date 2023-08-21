import { Link } from "react-router-dom";
import styles from './Navbar.module.scss'


function Navbar() {
  return (
    <>
      <ul className={styles.nav}>
        <Link className={styles.links} to="/"><h3>Home</h3></Link>
        <Link className={styles.links} to="/about"><h3>About</h3></Link>
        <Link className={styles.links} to="/projects"><h3>Projects</h3></Link>
      </ul>
    </>
  )
}

export default Navbar;
