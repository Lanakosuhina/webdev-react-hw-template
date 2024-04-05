import styles from "./ModalBlock.module.css";

type ModalBlockType = {
  children: JSX.Element | JSX.Element[]
}

export default function ModalBlock({ children }: ModalBlockType) {
  return <div className={styles.modalBlock}>{children}</div>;
}