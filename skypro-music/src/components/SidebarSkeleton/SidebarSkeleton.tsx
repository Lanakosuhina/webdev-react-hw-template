import styles from "./SidebarSkeleton.module.css";

export default function SidebarSkeleton() {
  return (
    <div className={styles.sidebarList}>
     <div className={styles.image}></div>
     <div className={styles.image}></div>
     <div className={styles.image}></div>
     </div>
  )
}