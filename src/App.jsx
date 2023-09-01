import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingBar from './components/LoadingBar/LoadingBar';
import { useState } from 'react';
import './index.scss'
import AnimatedNav from './components/AnimatedNav/AnimatedNav';
import { BrowserRouter } from 'react-router-dom';
import IncrementLoc from './context/navbarToggle.jsx';
import NoticeBanner from './components/NoticeBanner/NoticeBanner';

function App() {

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();

      }
    )()
    setTimeout(() => {
      setLoader(false)
    }, 3000)

  }, [])

  return (
    <>
      <AnimatePresence>
        {loader && (
          <LoadingBar />
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
