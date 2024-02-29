import classNames from "classnames";
import styles from "./PlaylistTitle.module.css";

export default function PlaylistTitle() {
  return (
    <div className={styles.contentTitle}>
      <div className={classNames(styles.playlistTitleCol, styles.col01)}>Трек</div>
      <div className={classNames(styles.playlistTitleCol, styles.col02)}>Исполнитель</div>
      <div className={classNames(styles.playlistTitleCol, styles.col03)}>Альбом</div>
      <div className={classNames(styles.playlistTitleCol, styles.col04)}>
        <svg className={styles.playlistTitleSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
        </svg>
      </div>
    </div>
  )
}