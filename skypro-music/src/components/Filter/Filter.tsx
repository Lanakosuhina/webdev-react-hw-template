import classNames from "classnames";
import styles from "./Filter.module.css";

type FilterType = {
  list: Array<{ id: number, name: string }>;
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function Filter({ list, title, isOpen, onClick }: FilterType) {
  return (
    <>
    <div className={styles.wrapper}>
      <button className={classNames(styles.filterButton, styles.btnText)} onClick={onClick}>
        {title}
      </button>
      {isOpen && (
        <ul className={styles.dropdown}>
          <div className={styles.wrap}>
            {list.map((item) => (
              <li className={styles.list} key={item.id}>
                {item.name}
              </li>
            ))}
          </div>
        </ul>
      )}
      </div>
    </>
  )
}