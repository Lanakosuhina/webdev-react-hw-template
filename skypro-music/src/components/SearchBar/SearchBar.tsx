'use client'
import { useState } from "react";
import SVG from "../SVG/SVG"
import styles from "../SearchBar/SearchBar.module.css"
import { useAppDispatch } from "@/app/hooks/hooks";
import { setFilteredTracks } from "@/app/store/features/PlaylistSlice";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();

  return (
    <div className={styles.centerblockSearch}>
        <SVG className={styles.searchSvg} icon="icon-search" />
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            dispatch(setFilteredTracks({ searchValue: e.target.value }));
          }}
        />
      </div>
  )
}