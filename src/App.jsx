import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingBar from './components/LoadingBar/LoadingBar';
import { useState } from 'react';
import './index.scss'
import AnimatedNav from './components/AnimatedNav/AnimatedNav';
import { BrowserRouter } from 'react-router-dom';
import IncrementLoc from './context/navbarToggle.jsx';
import NoticeBanner from './components/NoticeBanner/NoticeBanner';
import logo from "./assets/evan.svg"
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const [loader, setLoader] = useState(true)

  const locomotiveScroll = new LocomotiveScroll();
  
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)

  }, [])

  return (
    <>
      <AnimatePresence>
        {loader && (
          <>
            <motion.img
              layoutId='mainlogo'
              className="logoIn"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 3.5, type: "spring" }}
              src={logo} alt="logo" />   
          <LoadingBar />
              </>
        )}
      </AnimatePresence>
      <BrowserRouter>
        <IncrementLoc>
          <NoticeBanner />
          <AnimatedNav />
        </IncrementLoc>
      </BrowserRouter>
    </>
  )
}

export default App
