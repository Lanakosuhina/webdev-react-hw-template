import Link from "next/link";
import styles from "./Track.module.css";
import SVG from "../SVG/SVG";

type TrackType = {
  title: string;
  author: string;
  album: string;
  time: string;
};

export default function Track({ title, author, album, time }: TrackType) {
  return (
    <>
      <div className={styles.playlistItem}>
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <SVG className={styles.trackTitleSvg} icon="icon-note" />
            </div>
            <div>
              <Link className={styles.trackTitleLink} href="http://">
              {title} <span className={styles.trackTitleSpan} />
            </Link>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <Link className={styles.trackAuthorLink} href="http://">
          {author}
        </Link>
      </div>
      <div className={styles.trackAlbum}>
        <Link className={styles.trackAlbumLink} href="http://">
        {album}
      </Link>
    </div >
      <div>
        <SVG className={styles.trackTimeSvg} icon="icon-like" />
        <span className={styles.trackTimeText}>{time}</span>
      </div>
        </div>
      </div >
    </>
  )
}