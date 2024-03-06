import SVG from "../SVG/SVG"
import styles from "../SearchBar/SearchBar.module.css"

export default function SearchBar() {
  return (
    <div className={styles.centerblockSearch}>
        <SVG className={styles.searchSvg} icon="icon-search" />
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
  )
}