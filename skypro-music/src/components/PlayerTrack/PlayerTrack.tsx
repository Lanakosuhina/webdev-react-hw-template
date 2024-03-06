'use client'
import classNames from "classnames"
import styles from "../PlayerTrack/PlayerTrack.module.css"
import Link from "next/link"
import { useEffect, useState } from "react";
import PlayerSkeleton from "../PlayerSkeleton/PlayerSkeleton";
import SVG from "../SVG/SVG";

export default function PlayerTrack() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000)
    return () => {
      clearTimeout(timeout);
    }
  }, [])

  return (
    <div className={styles.playerTrackPlay}>
      {isLoading ? (<PlayerSkeleton />) : (
        <div className={styles.trackPlayContain}>
          <div className={styles.trackPlayImage}>
            <SVG className={styles.trackPlaySvg} icon="icon-note" />
          </div>
          <div className={styles.trackPlayAuthor}>
            <Link className={styles.trackPlayAuthorLink} href="http://">
              Ты та...
            </Link>
          </div>
          <div className={styles.trackPlayAlbum}>
            <Link className={styles.trackPlayAlbumLink} href="http://">
              Баста
            </Link>
          </div>
        </div >
      )}
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