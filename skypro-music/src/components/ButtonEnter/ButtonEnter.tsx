import Link from "next/link";
import styles from "./ButtonEnter.module.css"

type ButtonEnterType = {
  text: string;
};

export default function ButtonEnter({ text }: ButtonEnterType) {
  return (
    <button className={styles.modalBtnEnter}>
      <Link href={"/"}>{text}</Link>
    </button>
  )
}