import styles from "./NoticeBanner.module.scss"

function NoticeBanner({ children }) {
  return (
    <div className={styles.banner}>
      <h5>
        Very Early WIP porfolio<br />
        check my bento instead
      </h5>
    </div>
  )

}

export default NoticeBanner;
