import styles from "./Heading.module.css";

type HeadingType = {
  text: string;
}
export default function Heading({ text }: HeadingType) {
  return (
    <h2 className={styles.heading}>{text}</h2>
  )
}