'use client'
import { useCallback, useMemo, useState } from "react";
import { Filter } from "../Filter";
import styles from "./FilterWrapper.module.css";
import { DataTrack } from "@/app/api/trackAPI";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { setFilteredTracks } from "@/app/store/features/PlaylistSlice";
// import { authors, genres, years } from "./data";

type TrackKeys = Pick<DataTrack, "author" | "genre" | "release_date">;

export default function FilterWrapper() {
  const [activeFilter, setActiveFilter] = useState<null | string>(null);

  const dispatch = useAppDispatch();
  const trackList = useAppSelector((store) => store.playlist.tracks);

  const selectedAuthors = useAppSelector((store) => store.playlist.filterOptions.authors)
  const selectedYears = useAppSelector((store) => store.playlist.filterOptions.years)
  const selectedGenres = useAppSelector((store) => store.playlist.filterOptions.genres);

  const handleFilterClick = useCallback((filterName: string) => {
    // если предыдущее значение = текущему фильтру(filterName), то возвращаем null/ чтобы закрыть
    setActiveFilter(prev => prev === filterName ? null : filterName);
  }, []);

  const getListItem = useCallback((item: keyof TrackKeys) => {
    const listItem: string[] = [];
    trackList?.forEach((track) => {
      if (listItem.includes(track[item]) || track[item] === undefined) return;
      listItem.push(track[item]);
    });
    return listItem.sort();
  }, [trackList]);

  // const uniq = (value, index, array) => array.indexOf(value) === index

  // const artists = tracks
  //   .map(({ author }) => author ?? 'Неизвестный исполнитель')
  //   .filter((i) => i)
  //   .filter(uniq)
  //   .sort()

  const authorsList: string[] = useMemo(() => getListItem('author'), [getListItem]);
  const genreList: string[] = useMemo(() => getListItem('genre'), [getListItem]);
  const yearList: string[] = useMemo(() => getListItem('release_date'), [getListItem]);

  const toggleSelectedAuthors = useCallback((item: string) => {
    dispatch(setFilteredTracks({
      authors: selectedAuthors.includes(item)
        ? selectedAuthors.filter((author) => author !== item)
        : [...selectedAuthors, item]
    }))
  }, [selectedAuthors, dispatch]);

  const toggleSelectedYears = useCallback((item: string) => {
    dispatch(setFilteredTracks({
      years: selectedYears.includes(item)
        ? selectedYears.filter((year) => year !== item)
        : [...selectedYears, item]
    }))
  }, [selectedYears, dispatch]);

  const toggleSelectedGenres = useCallback((item: string) => {
    dispatch(setFilteredTracks({
      genre: selectedGenres.includes(item)
        ? selectedGenres.filter((genre) => genre !== item)
        : [...selectedGenres, item],
    }));
  }, [selectedGenres, dispatch]);

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
        counter={selectedAuthors.length}
      />
      <Filter
        title="году выпуска"
        list={yearList}
        selected={selectedYears}
        toggleSelected={toggleSelectedYears}
        isOpen={activeFilter === 'years'}
        onClick={() => handleFilterClick("years")}
        counter={selectedYears.length}
      />
      <Filter
        title="жанру"
        list={genreList}
        selected={selectedGenres}
        toggleSelected={toggleSelectedGenres}
        isOpen={activeFilter === 'genres'}
        onClick={() => handleFilterClick("genres")}
        counter={selectedGenres.length}
      />
    </div>
  )
}