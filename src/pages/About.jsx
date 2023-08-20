import Navbar from '../components/Navbar/Navbar';
import Transition from '../components/Transition/Transtion';
import styles from './page-index.module.scss'


function About() {

  return (
    <>
      <Transition>
        <Navbar />
        <h1>About</h1>
      </Transition>
    </>
  )
}

export default About;
