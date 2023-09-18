import styles from "./NoticeBanner.module.scss";

function NoticeBanner({ children }) {
  return (
    <div className={styles.banner}>
      <h6>
        WIP portfolio
        <br />
        <span>(check github for details)</span>
      </h6>
      <div className={styles.hidden}>Check my bento instead</div>
    </div>
  );
}

export default NoticeBanner;
