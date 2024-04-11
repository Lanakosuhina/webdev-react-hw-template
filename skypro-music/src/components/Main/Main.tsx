import styles from "./Main.module.css";

type MainType = {
  children: JSX.Element | JSX.Element[]
}

export default function Main({ children }: MainType) {
  return <div className={styles.main}>{children}</div>;
}