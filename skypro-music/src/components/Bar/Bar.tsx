import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerTrack from "../PlayerTrack/PlayerTrack";
import Volume from "../Volume/Volume";
import styles from "../Bar/Bar.module.css"
import { DataTrack } from "@/app/api/trackAPI";
import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "../ProgressBar";

type BarProps = {
  currentTrack: DataTrack,
}

export default function Bar({ currentTrack }: BarProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  // const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const duration = audioRef.current ? audioRef.current.duration : 0;
  // если audioRef.current определен, то duration будет равен длительности аудио 

  function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target; // извлекаем значение элемента, который вызвал событие 
    const volume = Number(value) / 10; // преобразуем в диапазон от 0 до 1
    audioRef.current!.volume = volume; // устанавливаем новое значение
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const result = String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
    return result;
  };

  const handleDuration = (e: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = e;
    // объект существует, то устанавливается текущее время воспроизведения аудио на значение, переданное в e
  };

  const durationDisplay = audioRef.current
    ? formatTime(Math.floor(audioRef.current.duration))
    : null;
  const elapsedDisplay = audioRef.current
    ? formatTime(Math.floor(currentProgress))
    : null;

  const handleStart = () => {
    if (!audioRef.current) {
      return
    }
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    if (!audioRef.current) {
      return
    }
    audioRef?.current.pause();
    setIsPlaying(false);
  };

  const handleLoop = () => {
    setIsLooping((prev) => !prev)
  }

  const togglePlay = isPlaying ? handleStop : handleStart;

  return (
    <div className={styles.bar}>
      <audio hidden autoPlay controls src={currentTrack.track_file} ref={audioRef} loop={isLooping} onTimeUpdate={(e) => {
        setCurrentProgress(e.currentTarget.currentTime)
      }} />
      <div className={styles.barContent}>
        <div className={styles.barPlayerTime}>
          {elapsedDisplay} / {durationDisplay}
        </div>
        <ProgressBar
          currentProgress={currentProgress}
          setCurrentProgress={setCurrentProgress}
          duration={duration}
          handleDuration={handleDuration}
        />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <PlayerControls
              isLooping={isLooping}
              handleLoop={handleLoop}
              togglePlay={togglePlay}
              isPlaying={isPlaying} />
            <PlayerTrack currentTrack={currentTrack} />
          </div>
          <Volume handleVolume={handleVolume} />
        </div>
      </div>
    </div>
  )
}