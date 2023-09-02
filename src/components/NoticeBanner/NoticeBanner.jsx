import styles from "./NoticeBanner.module.scss"

function NoticeBanner({ children }) {
  return (
    <div className={styles.banner}>
      <h6>
        WIP portfolio<br />
        (check github for details)
      </h6>
      <div className={styles.circle}>
        <div className={styles.ping}>
        <div className={styles.ping__inner}></div>
        </div>
      </div>
    </div >
  )

}

export default NoticeBanner;
