import styles from "./Wrapper.module.css";

type WrapperType = {
  children: string
}

export default function Wrapper({ children }: WrapperType) {
  return <div className={styles.wrapper}>{children}</div>;
}