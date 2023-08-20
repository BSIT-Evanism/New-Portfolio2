import Home from "../../pages/Home";
import About from "../../pages/About"
import Projects from "../../pages/Projects"
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedNav() {

  const location = useLocation();


  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location} >
          <Route key={"1"} path="/" element={<Home />} />
          <Route key={"2"} path="/about" element={<About />} />
          <Route key={"3"} path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>

    </>
  )
}

export default AnimatedNav;
