'use client'
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import PlaylistTitle from "../PlaylistTitle/PlaylistTitle";
import Track from "../Track/Track";
import styles from "./Centerblock.module.css";
import { DataTrack } from "@/app/api/trackAPI";
import { useEffect, useState } from "react";
import { setTracks } from "@/app/store/features/PlaylistSlice";

type CenterblockProps = {
  tracks: DataTrack[],
}

export default function Centerblock({ tracks }: CenterblockProps) {
  const filteredTracks = useAppSelector((store) => store.playlist.filteredTracks)
  const isFiltered = useAppSelector((store) => store.playlist.isFiltered)
  const dispatch = useAppDispatch();
  const [playlist, setPlaylist] = useState(tracks)

  useEffect(() => {
    dispatch(setTracks(tracks))
  }, [tracks, dispatch])

  useEffect(() => {
    setPlaylist((prev) => (prev = isFiltered ? filteredTracks : tracks));
  }, [isFiltered, filteredTracks, tracks]);

  return (
    <>
      <div className={styles.centerblockContent}>
        <PlaylistTitle />
        <div className={styles.contentPlaylist}>
          {isFiltered && playlist.length === 0 && (
            <div>Результаты не найдены</div>
          )}
          {playlist.map((track) => (
            <Track key={track.id} track={track} tracks={tracks} />
          ))}
        </div>
      </div>
    </>
  )
}