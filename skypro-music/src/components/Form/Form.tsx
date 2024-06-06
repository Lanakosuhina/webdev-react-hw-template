import styles from "./Form.module.css";

type FormType = {
  children: JSX.Element | JSX.Element[]
}

export default function Form({ children }: FormType) {
  return <div className={styles.modalForm}>{children}</div>;
}