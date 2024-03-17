import styles from "./Track.module.css";
import SVG from "../SVG/SVG";

type TrackType = {
  title: string;
  author: string;
  album: string;
  time: string;
  onClick: () => void,
};

export default function Track({ title, author, album, time, onClick }: TrackType) {
  return (
    <>
      <div onClick={onClick} className={styles.playlistItem}>
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <SVG className={styles.trackTitleSvg} icon="icon-note" />
            </div>
            <div>
              <div className={styles.trackTitleLink}>
              {title} <span className={styles.trackTitleSpan} />
            </div>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <div className={styles.trackAuthorLink}>
          {author}
        </div>
      </div>
      <div className={styles.trackAlbum}>
        <div className={styles.trackAlbumLink}>
        {album}
      </div>
    </div >
      <div>
        <SVG className={styles.trackTimeSvg} icon="icon-sprite" />
        <span className={styles.trackTimeText}>{time}</span>
      </div>
        </div>
      </div >
    </>
  )
}