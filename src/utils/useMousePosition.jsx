import { useState } from "react";
import { useEffect } from "react";

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseTilt, setMouseTilt] = useState({xDeg: 0, yDeg: 0})

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const updateMouseTilt = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
    const offsetX = ((x - middleX) / middleX) * 20;
    const offsetY = ((y - middleY) / middleY) * 20;
    setMouseTilt({xDeg: offsetY, yDeg: offsetX})
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousemove", updateMouseTilt)

  }, [])

  return {mousePosition, mouseTilt};

}

export default useMousePosition;
