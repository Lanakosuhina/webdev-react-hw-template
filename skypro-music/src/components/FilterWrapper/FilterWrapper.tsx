'use client'
import { useState } from "react";
import { Filter } from "../Filter";
import styles from "./FilterWrapper.module.css";
import { DataTrack } from "@/app/api/trackAPI";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { setFilteredTracks } from "@/app/store/features/PlaylistSlice";
// import { authors, genres, years } from "./data";

type TrackKeys = Pick<DataTrack, "author" | "genre">;

export default function FilterWrapper() {
  const [activeFilter, setActiveFilter] = useState<null | string>(null);
  const trackList = useAppSelector((store) => store.playlist.tracks);
  const selectedAuthors = useAppSelector((store) => store.playlist.filterOptions.authors)
  const dispatch = useAppDispatch();

  function handleFilterClick(filterName: string) {
    // если предыдущее значение = текущему фильтру(filterName), то возвращаем null/ чтобы закрыть
    setActiveFilter(prev => prev === filterName ? null : filterName)
  }
  function getListItem(item: keyof TrackKeys) {
    const listItem: string[] = [];
    trackList?.forEach((track) => {
      if (listItem.includes(track[item]) || track[item] === undefined) return;
      listItem.push(track[item]);
    });
    return listItem.sort();
  }

  // const uniq = (value, index, array) => array.indexOf(value) === index

  // const artists = tracks
  //   .map(({ author }) => author ?? 'Неизвестный исполнитель')
  //   .filter((i) => i)
  //   .filter(uniq)
  //   .sort()

  const authorsList: string[] = getListItem("author");
  const genreList: string[] = getListItem("genre");
  // const years: string[] = getListItem("release_date");

  function toggleSelectedAuthors(item: string) {
    dispatch(setFilteredTracks({authors: selectedAuthors.includes(item) 
      ? selectedAuthors.filter((author) => author !== item)
      : [...selectedAuthors, item]
    }))
  } 

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      {/* если activeFilter равен 'author', то isOpen = true, в ином случае он закроется */}
      <Filter
        title="исполнителю"
        list={authorsList}
        selected={selectedAuthors}
        toggleSelected={toggleSelectedAuthors}
        isOpen={activeFilter === 'author'}
        onClick={() => handleFilterClick("author")}
      />
      <Filter
        title="году выпуска"
        list={genreList}
        isOpen={activeFilter === 'years'}
        onClick={() => handleFilterClick("years")}
      />
      <Filter
        title="жанру"
        list={genreList}
        isOpen={activeFilter === 'genres'}
        onClick={() => handleFilterClick("genres")}
      />

      {/* <div className={classNames(styles.filterButton, styles.btnText)}>
          исполнителю
        </div>
        <div className={classNames(styles.filterButton, styles.btnText)}>
          году выпуска
        </div>
        <div className={classNames(styles.filterButton, styles.btnText)}>жанру</div> */}
    </div>
  )
}