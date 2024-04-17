'use client'
import styles from "./Track.module.css";
import SVG from "../SVG/SVG";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { DataTrack, dislikeTrack, getAllFavourites, getData, likeTrack } from "@/app/api/trackAPI";
import { setCurrentTrack, setFavouriteTracks, setTracks } from "@/app/store/features/PlaylistSlice";
import formatTime from "@/app/libs/formatTime";
import { getTokens } from "@/app/api/userAPI";
import { useRouter } from "next/navigation";

type TrackType = {
  track: DataTrack,
  tracks: DataTrack[],
};

export default function Track({ track, tracks }: TrackType) {
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((store) => store.playlist.isPlaying)
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack)
  const { name, album, author, duration_in_seconds } = track;
  const router = useRouter()
  const tokens = useAppSelector((store) => store.auth.tokens)
  const user = useAppSelector((store) => store.auth.user)
  const isLiked = !!(track.stared_user ?? []).find(({ id }) => id === user?.id)


  function toggleLike(event: any) {
    event.stopPropagation();

    if (tokens.access === undefined) {
      alert("Пройдите авторизацию");
      return router.replace("/signin")
    }
    console.log(isLiked);
    isLiked
      ? (
        dislikeTrack({ token: tokens.access, id: track.id })
          .then(() => getData())
          .then((response) => dispatch(setTracks(response)))
      ) : (
        likeTrack({ token: tokens.access, id: track.id })
        .then(() => getData())
        .then((response) => dispatch(setTracks(response)))
      );
  }

  return (
    <>
      <div onClick={() => dispatch(setCurrentTrack({ currentTrack: track, tracks }))} className={styles.playlistItem}>
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <div className={styles.trackTitleImageInner}>
                {currentTrack?.id === track.id && (
                  <div className={`${isPlaying ? styles.playingDot : styles.stoppedDot}`}></div>
                )}
                <SVG className={styles.trackTitleSvg} icon="icon-note" />
              </div>
            </div>
            <div>
              <div className={styles.trackTitleLink}>
                {name} <span className={styles.trackTitleSpan} />
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
          <div className={styles.trackLike} onClick={toggleLike} >
            {isLiked ? <SVG className={styles.trackLikeSvgActive} icon="icon-like" />
              : <SVG className={styles.trackLikeSvg} icon="icon-dislike" />}
          </div>
          <div>
            <span className={styles.trackTimeText}>{formatTime(duration_in_seconds)}</span>
          </div>
        </div>
      </div >
    </>
  )
}