import styles from "./ModalBlock.module.css";

type ModalBlockType = {
  children: string
}

export default function ModalBlock({ children }: ModalBlockType) {
  return <div className={styles.modalBlock}>{children}</div>;
}