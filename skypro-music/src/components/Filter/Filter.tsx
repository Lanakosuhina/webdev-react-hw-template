import classNames from "classnames";
import styles from "./Filter.module.css";

type FilterType = {
  list: string[];
  title: string;
  isOpen: boolean;
  onClick: () => void;
  selected?: string[];
  toggleSelected?: (item: string) => void; 
}

export default function Filter({ list, title, isOpen, selected, toggleSelected, onClick }: FilterType) {
  return (
    <>
      <div className={styles.wrapper}>
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
              {/* {list.map((item, index) => {
                const activeClass = selected?.includes(item)
                  ? styles.listItemActive
                  : "";
                return (
                  <li
                    className={cn(styles.listItem, activeClass)}
                    key={index}
                    onClick={() => {
                      if (toggleSelected) toggleSelected(item);
                    }}
                  >
                    {item}
                  </li>
                );
              })} */}

            </div>
          </ul>
        )}
      </div >
    </>
  )
}