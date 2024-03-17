import classNames from "classnames"
import styles from "../PlayerControls/PlayerControls.module.css"
import SVG from "../SVG/SVG"

type PlayerControlsType = {
  handleLoop: () => void,
  isLooping: boolean,
  togglePlay: () => void,
  isPlaying: boolean,
}

export default function PlayerControls({handleLoop, isLooping, togglePlay, isPlaying}: PlayerControlsType) {

  return (
    <div className={styles.playerControls}>
      <div className={classNames(styles.playerBtnPrev, styles.btnIcon)}>
        <SVG className={styles.playerBtnPrevSvg} icon="icon-prev" />
      </div>
      <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles.btnIcon )}>
        <SVG className={styles.playerBtnPlaySvg} icon={isPlaying ? "icon-pause" : "icon-play"} />
      </div>
      <div className={classNames(styles.playerBtnNext, styles.btnIcon)}>
        <SVG className={styles.playerBtnNextSvg} icon="icon-next" />
      </div>
      <div onClick={handleLoop} className={isLooping ? (classNames(styles.playerBtnRepeat, styles.btnIcon)) : (classNames(styles.playerBtnRepeat, styles.btnIconActive))}>
        <SVG className={styles.playerBtnRepeatSvg} icon="icon-repeat" />
      </div>
      <div className={classNames(styles.playerBtnShuffle, styles.btnIcon)}>
        <SVG className={styles.playerBtnShuffleSvg} icon="icon-shuffle" />
      </div>
    </div>
  )
}