import classNames from "classnames"
import styles from "../PlayerControls/PlayerControls.module.css"
import SVG from "../SVG/SVG"

export default function PlayerControls() {
  return (
    <div className={styles.playerControls}>
      <div className={styles.playerBtnPrev}>
        <SVG className={styles.playerBtnPrevSvg} icon="icon-prev" />
      </div>
      <div className={classNames(styles.playerBtnPlay, styles.btn)}>
        <SVG className={styles.playerBtnPlaySvg} icon="icon-play" />
      </div>
      <div className={styles.playerBtnNext}>
        <SVG className={styles.playerBtnNextSvg} icon="icon-next" />
      </div>
      <div className={classNames(styles.playerBtnRepeat, styles.btnIcon)}>
        <SVG className={styles.playerBtnRepeatSvg} icon="icon-repeat" />
      </div>
      <div className={classNames(styles.playerBtnShuffle, styles.btnIcon)}>
        <SVG className={styles.playerBtnShuffleSvg} icon="icon-shuffle" />
      </div>
    </div>
  )
}