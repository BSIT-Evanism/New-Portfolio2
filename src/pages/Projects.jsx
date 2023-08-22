import { AnimatePresence } from "framer-motion";
import Transition from "../components/Transition/Transition";
import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";
import { transition } from "./animation";

function Projects() {
  return (
    <>
      <Transition >
        <Navbar />
        <motion.h1
          variants={transition}
          initial="initial"
          animate="enter"
          exit="exit"

        >Projects</motion.h1>
      </Transition >
    </>
  )
}

export default Projects;
