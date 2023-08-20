import Marquee from '../components/Marquee/Marquee';
import Navbar from '../components/Navbar/Navbar';
import Transition from '../components/Transition/Transtion';
import styles from './page-index.module.scss'

function Home() {
  return (
    <>
      <Transition>
        <Navbar />
        <h1>Home</h1>
        <Marquee><h1>hello world hello world hellohello world hello world hellohello world hello world hello world hello world</h1><h1>hello world</h1><h1>hello world</h1><h1>hello world</h1><h1>hello world</h1></Marquee>
      </Transition>
    </>


  )
}

export default Home;
