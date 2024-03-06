'use client'

import { Playlist } from "../Playlist"
import playlist01 from "../../../public/img/playlist01.png"
import playlist02 from "../../../public/img/playlist02.png"
import playlist03 from "../../../public/img/playlist03.png"
import styles from "../Sidebar/Sidebar.module.css"
import { useEffect, useState } from "react"
import SidebarSkeleton from "../SidebarSkeleton/SidebarSkeleton"
import SVG from "../SVG/SVG"

export default function Sidebar() {
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
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
        <div className={styles.sidebarIcon}>
          <SVG className={styles.logout} icon="logout" />
        </div>
      </div>
      <div className={styles.sidebarBlock}>
        {isLoading ? (
          <SidebarSkeleton /> ) : (
        <div className={styles.sidebarList}>
          <Playlist src={playlist01} alt="day's playlist" />
          <Playlist src={playlist02} alt="100 dance hits" />
          <Playlist src={playlist03} alt="indi music playlist" />
        </div>
          )}
      </div>
    </div>
  )
}