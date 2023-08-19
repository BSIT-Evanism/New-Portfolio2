import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import { AnimatePresence } from 'framer-motion';
import LoadingBar from './components/LoadingBar/LoadingBar';
import { useState } from 'react';


function App() {

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setLoader(false)
        }, 3000)
      }
    )()
  }, [])

  return (
    <>
      <AnimatePresence>
        {loader && (
          <LoadingBar />
        )}
      </AnimatePresence>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
