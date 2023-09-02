import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const NavbarContext = createContext()
export const IntroContext = createContext()

function IncrementLoc({ children }) {
  const [changeLoc, setChangeLoc] = useState(0);
  const { pathname } = useLocation();
  const [location, changeLocation] = useState("")
  const [intro,setIntro] = useState(true);

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

  useEffect(() => {
    if(changeLoc >= 4) {
      setIntro(false)
    } else {
      setTimeout(() => {
        setIntro(false)
      }, 3000)
    }
  },[changeLoc])



  return (
    <NavbarContext.Provider value={changeLoc}>
      <IntroContext.Provider value={intro}>

      {children}
      </IntroContext.Provider>
    </NavbarContext.Provider>
  )
}

export default IncrementLoc;
