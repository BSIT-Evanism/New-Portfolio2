import { useState } from "react";
import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

function useMousePosition() {
  const [mouseTilt, setMouseTilt] = useState({ xDeg: 0, yDeg: 0 });
  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const updateMousePosition = (e) => {
    const { clientX, clientY } = e;
    mousePosition.x.set(clientX);
    mousePosition.y.set(clientY);
  };

  const updateMouseTilt = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
    const offsetX = ((x - middleX) / middleX) * 30;
    const offsetY = ((y - middleY) / middleY) * 30;
    setMouseTilt({ xDeg: offsetY, yDeg: offsetX });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousemove", updateMouseTilt);
  }, []);

  return { mousePosition, mouseTilt };
}

export default useMousePosition;
