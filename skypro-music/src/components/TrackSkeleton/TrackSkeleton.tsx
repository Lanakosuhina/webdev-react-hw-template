import styles from "./TrackSkeleton.module.css";

export default function TrackSkeleton() {
  return (
    <div className={styles.trackItem}>
      <div className={styles.playlist}>
        <div className={styles.trackTitle}>
          <div className={styles.wrap}>
            <div className={styles.skeletonSquare}></div>
            <div className={styles.skeletonRec}></div>
          </div>
        </div>
        <div className={styles.skeletonRec2}></div>
        <div className={styles.skeletonRec3}></div>
      </div>
    </div>
  )
}