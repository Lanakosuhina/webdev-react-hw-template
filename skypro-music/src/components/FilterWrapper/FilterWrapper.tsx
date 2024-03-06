'use client'
import { useState } from "react";
import { Filter } from "../Filter";
import styles from "./FilterWrapper.module.css";
import { authors, genres, years } from "./data";

export default function FilterWrapper() {
  const [activeFilter, setActiveFilter] = useState<null | string>(null);

  function handleFilterClick(filterName: string) {
    // если предыдущее значение = текущему фильтру(filterName), то возвращаем null/ чтобы закрыть
    setActiveFilter(prev => prev === filterName ? null : filterName)
  }
  
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      {/* если activeFilter равен 'author', то isOpen = true, в ином случае он закроется */}
      <Filter title="исполнителю" list={authors} isOpen={activeFilter === 'author'} onClick={() => handleFilterClick("author")} />
      <Filter title="году выпуска" list={years} isOpen={activeFilter === 'years'} onClick={() => handleFilterClick("years")} />
      <Filter title="жанру" list={genres} isOpen={activeFilter === 'genres'} onClick={() => handleFilterClick("genres")} />

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