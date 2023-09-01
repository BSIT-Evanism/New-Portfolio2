import styles from "./HeroSection.module.scss"

function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}
      >
        <div data-scroll data-scroll-speed="0.1" className={styles.inner}>
          <div data-scroll data-scroll-speed="0.2" className={styles.float}></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
