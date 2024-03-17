import FilterWrapper from "../FilterWrapper/FilterWrapper";
import PlaylistTitle from "../PlaylistTitle/PlaylistTitle";
import SearchBar from "../SearchBar/SearchBar";
import Track from "../Track/Track";
import styles from "./Centerblock.module.css";
import { DataTrack } from "@/app/api/trackAPI";

type CenterblockProps = {
  tracks: DataTrack[],
}

export default function Centerblock({ tracks }: CenterblockProps) {

  return (
    <div className={styles.mainCenterblock}>
      <SearchBar />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <FilterWrapper />
      <div className={styles.centerblockContent}>
        <PlaylistTitle />
        <div className={styles.contentPlaylist}>
          {tracks.map((track) => (
            <Track
              key={track.id}
              track={track}
              tracks={tracks}
            />
          ))
          }
        </div>
      </div>
    </div>
  )
}