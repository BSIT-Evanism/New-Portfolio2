import styles from "./HeroSection.module.scss"

function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}
      >
        <div className={styles.inner}>
          <div className={styles.float}></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
