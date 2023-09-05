import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

function useMousePosition() {
  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const updateMousePosition = (e) => {
    const { x, y } = e;
    const setX = x - (window.innerWidth / 2 * 0.02)
    const setY = y - (window.innerHeight / 2 * 0.02)
    mousePosition.x.set(setX)
    mousePosition.y.set(setY)
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.addEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return mousePosition;

}

export default useMousePosition;
