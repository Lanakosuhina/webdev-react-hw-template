import classNames from "classnames"
import styles from "../Volume/Volume.module.css"
import SVG from "../SVG/SVG"

export default function Volume() {
  return (
    <div className={styles.volumeBlock}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage}>
          <SVG className={styles.volumeSvg} icon="icon-volume" />
        </div>
        <div  className={classNames(styles.volumeProgress, styles.btn)}>
          <input
            className={classNames(styles.volumeProgressLine, styles.btn)}
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  )
}