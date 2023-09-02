export const transition = {
  initial: {
    y: "-100vh"
  },
  enter: {
    y: 0,
    transition: {
      duration: 1.5, type: "spring", delay: 0.8
    }
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 0.8, type: "spring"
    }
  }
}
