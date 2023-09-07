import { useState } from "react";
import { useEffect } from "react";

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
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
