import styles from "./Form.module.css";

type FormType = {
  children: string
}

export default function Form({ children }: FormType) {
  return <div className={styles.modalForm}>{children}</div>;
}