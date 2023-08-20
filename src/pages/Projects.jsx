import { AnimatePresence } from "framer-motion";
import Transition from "../components/Transition/Transtion";
import Navbar from "../components/Navbar/Navbar";


function Projects() {
  return (
    <>
      <Transition >
        <Navbar />
        <h1>Projects</h1>
      </Transition >
    </>
  )
}

export default Projects;
