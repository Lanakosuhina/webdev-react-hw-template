import styles from "./ProgressBar.module.css"


type ProgressBarType = {
  currentProgress: number,
  duration: number,
  handleDuration: (e: number) => void,
  setCurrentProgress: (progress: number) => void,
}

export default function ProgressBar({ currentProgress, duration, handleDuration, setCurrentProgress }: ProgressBarType) {
  if (isNaN(duration)) {
    duration = 0;
  }

  return (
    <input
      className={styles.styledProgressInput}
      type="range"
      min={0}
      max={duration}
      value={currentProgress}
      step={0.01}
      onChange={(event) => {
        handleDuration(event.target.valueAsNumber);
        setCurrentProgress(event.target.valueAsNumber);
      }}
    />
  );
}