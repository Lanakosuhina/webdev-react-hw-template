import classNames from "classnames";
import styles from "./Filter.module.css";

type FilterType = {
  list: string[];
  title: string;
  isOpen: boolean;
  onClick: () => void;
  selected?: string[];
  toggleSelected?: (item: string) => void; 
  counter: number | null;
}

export default function Filter({ list, title, isOpen, selected, toggleSelected, onClick, counter }: FilterType) {
  return (
    <>
      <div className={styles.wrapper}>
        {counter !== 0 && (<span className={styles.counter}>{counter}</span>)}
        <button className={classNames(styles.filterButton, styles.btnText)} onClick={onClick}>
          {title}
        </button>
        {isOpen && (
          <ul className={styles.dropdown}>
            <div className={styles.wrap}>
              {list.map((item, index) => {
                const activeClass = selected?.includes(item) ? styles.listActive : ""
                return (
                  // по клику на li этот элемент добавился в стор как выбранный фильтр
                  <li
                    className={classNames(styles.list, activeClass)}
                    onClick={() => {
                      // проверяем на наличие, тк параметр не обязателен
                      if (toggleSelected) toggleSelected(item)
                     }}
                    key={index}>
                    {item}
                  </li>
                )
              })}
            </div>
          </ul>
        )}
      </div >
    </>
  )
}