'use client'
import { useEffect, useState } from "react";
import FilterWrapper from "../FilterWrapper/FilterWrapper";
import PlaylistTitle from "../PlaylistTitle/PlaylistTitle";
import SearchBar from "../SearchBar/SearchBar";
import Track from "../Track/Track";
import styles from "./Centerblock.module.css";
import TrackSkeleton from "../TrackSkeleton/TrackSkeleton";


export default function Centerblock() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000)
    return () => {
      clearTimeout(timeout);
    }
  }, [])

  return (
    <div className={styles.mainCenterblock}>
      <SearchBar />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <FilterWrapper />
      <div className={styles.centerblockContent}>
        <PlaylistTitle />
        <div className={styles.contentPlaylist}>
          {isLoading ? (
            Array.from({ length: 2 }).map((_, index) =>
              <TrackSkeleton key={index} />)) : (<Track title="Guilt" author="Nero" album="Welcome Reality" time="4:44" />
          )}
          {/*<Track title="Elektro" author="Dynoro, Outwork, Mr. Gee" album="Elektro" time="2:22" />
           <Track title="I’m Fire" author="Ali Bakgor" album="I’m Fire" time="2:22" />
           <Track title="Non Stop" author="Стоункат, Psychopath" album="Non Stop" time="4:12" />
           <Track title="Run Run" author="Jaded, Will Clarke, AR/CO" album="Run Run" time="2:54" />
           <Track title="Eyes on Fire (Zeds Dead Remix)" author="Blue Foundation, Zeds Dead" album="Eyes on Fire" time="5:20" />
           <Track title="Mucho Bien (Hi Profile Remix)" author=" HYBIT, Mr. Black, Offer Nissim, Hi Profile" album="Mucho Bien" time="3:41" />
           <Track title="Knives n Cherries" author="minthaze" album="Captivating" time="1:48" />
           <Track title="How Deep Is Your Love" author=" Calvin Harris, Disciples" album=" How Deep Is Your Love" time="3:32" />
           <Track title="Morena" author="Tom Boxer" album="Soundz Made in Romania" time="3:36" /> */}
        </div>
      </div>
    </div>
  )
}