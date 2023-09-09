import styles from "./NoticeBanner.module.scss"

function NoticeBanner({ children }) {
  return (
    <div className={styles.banner}>
      <h6>
        WIP portfolio<br />
        (check github for details)
      </h6>
    </div >
  )

}

export default NoticeBanner;
