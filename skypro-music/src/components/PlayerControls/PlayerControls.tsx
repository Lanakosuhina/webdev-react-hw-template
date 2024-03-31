'use client'
import classNames from "classnames"
import styles from "../PlayerControls/PlayerControls.module.css"
import SVG from "../SVG/SVG"
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks"
import { nextTrack, prevTrack, toggleShuffled } from "@/app/store/features/PlaylistSlice"

type PlayerControlsType = {
  handleLoop: () => void,
  isLooping: boolean,
  togglePlay: () => void,
  isPlaying: boolean,
}

export default function PlayerControls({ handleLoop, isLooping, togglePlay, isPlaying }: PlayerControlsType) {

  const dispatch = useAppDispatch();
  const { isShuffled } = useAppSelector((store) => store.playlist)

  return (
    <div className={styles.playerControls}>
      <button
        onClick={() => dispatch(prevTrack())}
        className={classNames(styles.playerBtnPrev, styles.btnIcon)}>
        <SVG className={styles.playerBtnPrevSvg} icon="icon-prev" />
      </button>
      <button onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles.btnIcon)}>
        <SVG className={styles.playerBtnPlaySvg} icon={isPlaying ? "icon-pause" : "icon-play"} />
      </button>
      <button
        onClick={() => dispatch(nextTrack())}
        className={classNames(styles.playerBtnNext, styles.btnIcon)}>
        <SVG className={styles.playerBtnNextSvg} icon="icon-next" />
      </button>
      <button
        onClick={handleLoop}
        className={isLooping
          ? (classNames(styles.playerBtnRepeat, styles.btnIconActive))
          : (classNames(styles.playerBtnRepeat, styles.btnIcon))}>
        <SVG className={styles.playerBtnRepeatSvg} icon="icon-repeat" />
      </button>
      <button
        onClick={() => dispatch(toggleShuffled())}
        className={isShuffled
          ? (classNames(styles.playerBtnShuffle, styles.btnIconActive))
          : (classNames(styles.playerBtnShuffle, styles.btnIcon))}>
        <SVG className={styles.playerBtnShuffleSvg} icon="icon-shuffle" />
      </button>
    </div>
  )
}