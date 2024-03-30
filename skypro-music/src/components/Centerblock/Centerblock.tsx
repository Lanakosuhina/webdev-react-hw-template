'use client'
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import PlaylistTitle from "../PlaylistTitle/PlaylistTitle";
import Track from "../Track/Track";
import styles from "./Centerblock.module.css";
import { DataTrack } from "@/app/api/trackAPI";
import { useEffect } from "react";
import { setTracks } from "@/app/store/features/PlaylistSlice";

type CenterblockProps = {
  tracks: DataTrack[],
}

export default function Centerblock({ tracks }: CenterblockProps) {
  const filteredTracks = useAppSelector((store) => store.playlist.filteredTracks)
 
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTracks(tracks))
  }, [])

    {/* если отфильтрованных треков нет, то покажем исходный список треков
         если есть фильтры, но нет результатов, то покажем текст "результаты не найдены"*/}
  return (
    <>
      <div className={styles.centerblockContent}>
        <PlaylistTitle />
        <div className={styles.contentPlaylist}>
          {tracks?.map((track) => (
            <Track key={track.id} track={track} tracks={tracks} />
          ))}
        </div>
      </div>
    </>
  )
}