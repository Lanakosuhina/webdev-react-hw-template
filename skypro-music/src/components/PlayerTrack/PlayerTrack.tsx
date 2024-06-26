'use client'
import classNames from "classnames"
import styles from "../PlayerTrack/PlayerTrack.module.css"
import SVG from "../SVG/SVG";
import { DataTrack } from "@/app/api/trackAPI";

type PlayerTrackProps = {
  track: DataTrack,
}

export default function PlayerTrack({ track  }: PlayerTrackProps) {

  return (
    <div className={styles.playerTrackPlay}>
      <div className={styles.trackPlayContain}>
        <div className={styles.trackPlayImage}>
          <SVG className={styles.trackPlaySvg} icon="icon-note" />
        </div>
        <div className={styles.trackPlayAuthor}>
          <div className={styles.trackPlayAuthorLink}>
            {track.name}
          </div>
        </div>
        <div className={styles.trackPlayAlbum}>
          <div className={styles.trackPlayAlbumLink}>
            {track.author}
          </div>
        </div>
      </div>
      <div className={styles.trackPlayLikeDis}>
        <div className={classNames(styles.trackPlayLike, styles.btnIcon)}>
          <SVG className={styles.trackPlayLikeSvg} icon="icon-like" />
        </div>
        <div className={classNames(styles.trackPlayDislike, styles.btnIcon)}>
          <SVG className={styles.trackPlayDislikeSvg} icon="icon-dislike" />
        </div>
      </div>
    </div >
  )
}