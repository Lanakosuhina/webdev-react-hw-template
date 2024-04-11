'use client'
import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerTrack from "../PlayerTrack/PlayerTrack";
import Volume from "../Volume/Volume";
import styles from "../Bar/Bar.module.css"
import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "../ProgressBar";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { toggleIsPlaying } from "@/app/store/features/PlaylistSlice";
import formatTime from "@/app/libs/formatTime";


export default function Bar() {
  const { currentTrack, isPlaying, tracks } = useAppSelector((store) => store.playlist)

  const dispatch = useAppDispatch();

  const [isLooping, setIsLooping] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const duration = audioRef.current ? audioRef.current.duration : 0;
  // если audioRef.current определен, то duration будет равен длительности аудио 

  function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target; // извлекаем значение элемента, который вызвал событие 
    const volume = Number(value) / 10; // преобразуем в диапазон от 0 до 1
    audioRef.current!.volume = volume; // устанавливаем новое значение
  }

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
    dispatch(toggleIsPlaying(true));
  };

  useEffect(() => {
    dispatch(toggleIsPlaying(true));
  }, [currentTrack, dispatch])

  const handleStop = () => {
    if (!audioRef.current) {
      return
    }
    audioRef?.current.pause();
    dispatch(toggleIsPlaying(false));
  };

  const handleLoop = () => {
    setIsLooping((prev) => !prev)
  }

  const togglePlay = isPlaying ? handleStop : handleStart;

  const handleEnded = () => {
    // Проверяем, не является ли текущий трек последним в плейлисте
    if (currentTrackIndex < tracks.length - 1) {
      // Переход к следующему треку
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      // Или начинаем плейлист с начала
      setCurrentTrackIndex(0);
    }
  };

  // Устанавливаем источник аудио и обработчик события `ended` при изменении трека
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }
    audio.src = tracks[currentTrackIndex].track_file;
    audio.addEventListener('ended', handleEnded);

    // Воспроизводим новый трек
    audio.play();

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex, tracks]);
  
  return (
    <div className={styles.bar}>
      {currentTrack && (
        <>
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
                <PlayerTrack track={currentTrack} />
              </div>
              <Volume handleVolume={handleVolume} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}