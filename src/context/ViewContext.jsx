import React from "react";
import { createContext, useContext, useState } from "react";

const InViewContext = createContext();
const InViewUpdateContext = createContext();
const HoverContext = createContext();
const HoverUpdateContext = createContext();

export function useView() {
  return useContext(InViewContext);
}

export function useInViewUpdate() {
  return useContext(InViewUpdateContext);
}

export function useHover() {
  return useContext(HoverContext);
}

export function useHoverUpdate() {
  return useContext(HoverUpdateContext);
}

export default function ViewContext({ children }) {
  const [inView, setInView] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <InViewContext.Provider value={inView}>
      <InViewUpdateContext.Provider value={setInView}>
        <HoverContext.Provider value={hover}>
          <HoverUpdateContext.Provider value={setHover}>
            {children}
          </HoverUpdateContext.Provider>
        </HoverContext.Provider>
      </InViewUpdateContext.Provider>
    </InViewContext.Provider>
  );
}
