export const transition = {
  initial: {
    x: "-100vw"
  },
  enter: {
    x: 0,
    transition: {
      duration: 1.5, type: "spring", delay: 2
    }
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.8, type: "spring"
    }
  }
}
