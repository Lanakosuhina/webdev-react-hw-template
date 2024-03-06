import styles from './PlayerSkeleton.module.css'

export default function PlayerSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.rectangle}></div>
      <div className={styles.rectangle}></div>
    </div >
  )
}