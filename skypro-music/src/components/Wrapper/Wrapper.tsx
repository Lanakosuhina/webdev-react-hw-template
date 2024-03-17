import styles from "./Wrapper.module.css";

type WrapperType = {
  children: JSX.Element | JSX.Element[]
}

export default function Wrapper({ children }: WrapperType) {
  return <div className={styles.wrapper}>{children}</div>;
}