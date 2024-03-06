import classNames from "classnames";
import styles from "./PlaylistTitle.module.css";
import SVG from "../SVG/SVG";

export default function PlaylistTitle() {
  return (
    <div className={styles.contentTitle}>
      <div className={classNames(styles.playlistTitleCol, styles.col01)}>Трек</div>
      <div className={classNames(styles.playlistTitleCol, styles.col02)}>Исполнитель</div>
      <div className={classNames(styles.playlistTitleCol, styles.col03)}>Альбом</div>
      <div className={classNames(styles.playlistTitleCol, styles.col04)}>
        <SVG className={styles.playlistTitleSvg} icon="icon-watch" />
      </div>
    </div>
  )
}