import React from "react";
import styles from "./IntroSection.module.scss";

function IntroSection({ children }) {
  return (
    <div className={styles.wrapper}>
      <h1>Intro Section</h1>
      {children}
    </div>
  );
}

export default IntroSection;
