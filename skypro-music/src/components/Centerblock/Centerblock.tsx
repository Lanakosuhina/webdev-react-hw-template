'use client'
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import FilterWrapper from "../FilterWrapper/FilterWrapper";
import PlaylistTitle from "../PlaylistTitle/PlaylistTitle";
import SearchBar from "../SearchBar/SearchBar";
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

  return (
    <div className={styles.mainCenterblock}>
      <SearchBar />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <FilterWrapper />
      <div className={styles.centerblockContent}>
        <PlaylistTitle />
        <div className={styles.contentPlaylist}>
          {/* если отфильтрованных треов нет, то покажем исходный список треков
         если есть фильтры, но нет результатов, то покажем текст "результаты не найдены"*/}
          {filteredTracks?.map((track) => (
            <Track
              key={track.id}
              track={track}
              tracks={tracks}
            />
          ))
          }
        </div>
      </div>
    </div>
  )
}