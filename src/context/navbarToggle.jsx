import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const NavbarContext = createContext()

function IncrementLoc({ children }) {
  const [changeLoc, setChangeLoc] = useState(0);
  const { pathname } = useLocation();
  const [location, changeLocation] = useState("")

  useEffect(() => {
    if (location === pathname) {
      return
    } else {
      changeLocation(prev => prev = pathname)
    }
  }, [location])

  useEffect(() => {
    setChangeLoc((prev) => prev += 1)
  }, [pathname])


  return (
    <NavbarContext.Provider value={changeLoc}>
      {children}
    </NavbarContext.Provider>
  )
}

export default IncrementLoc;
