'use client'
import styles from "./Track.module.css";
import SVG from "../SVG/SVG";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { DataTrack, dislikeTrack, likeTrack } from "@/app/api/trackAPI";
import { setCurrentTrack, setFavouriteTracks } from "@/app/store/features/PlaylistSlice";
import formatTime from "@/app/libs/formatTime";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { useState } from "react";

type TrackType = {
  track: DataTrack,
  tracks: DataTrack[],
};

export default function Track({ track, tracks }: TrackType) {
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((store) => store.playlist.isPlaying)
  const {currentTrack, favouriteTracks} = useAppSelector((store) => store.playlist)
  const { name, album, author, duration_in_seconds } = track;
  const router = useRouter()
  const tokens = useAppSelector((store) => store.auth.tokens)
  const user = useAppSelector((store) => store.auth.user)
  const [isLiked, setIsLiked] = useState(!!(track.stared_user ?? []).find(({ id }) => id === user?.id));

  function handleLike(event: any) {
    event.stopPropagation();

    if (tokens.access === '') {
      alert("Пройдите авторизацию");
      return router.replace("/signin")
    }

    isLiked
      ? (
        dislikeTrack({ accessToken: tokens.access, id: track.id })
        .then(() => {
          setIsLiked(false);
        })
        .catch((error) => {
          console.error(error.message)
        })
      ) : (
        likeTrack({ accessToken: tokens.access, id: track.id })
        .then(() => {
          setIsLiked(true);
        })
        .catch((error) => {
          console.error(error.message)
        })
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
          <div className={styles.trackLike} onClick={handleLike} >
            <SVG
              className={classNames(
                isLiked ? styles.trackLikeSvgActive : styles.trackLikeSvg
              )} icon="icon-like" />
          </div>
          <div>
            <span className={styles.trackTimeText}>{formatTime(duration_in_seconds)}</span></div>
        </div>
      </div >
    </>
  )
}