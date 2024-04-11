import styles from "./Heading.module.css";

type HeadingType = {
  title: string;
}
export default function Heading({ title }: HeadingType) {
  return (
    <h2 className={styles.heading}>{title}</h2>
  )
}