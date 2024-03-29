import styles from "./CenterWrapper.module.css";

type CenterWrapperType = {
  children: JSX.Element | JSX.Element[]
}

export default function CenterWrapper({ children }: CenterWrapperType) {
  return <div className={styles.mainCenterblock}>{children}</div>;
}