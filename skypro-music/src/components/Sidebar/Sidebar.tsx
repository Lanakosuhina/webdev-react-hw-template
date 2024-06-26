import styles from "../Sidebar/Sidebar.module.css"
import React from "react"
import SVG from "../SVG/SVG"
import { CategoryType, getPlaylists } from "@/app/api/sidebarAPI"

type SidebarType = {
  hasSidebar: boolean;
};

export default async function Sidebar({ hasSidebar }: SidebarType) {
  const SidebarItem = React.lazy(() => import('../SidebarItem/SidebarItem'))

  let playlists: CategoryType[];
  try {
    playlists = await getPlaylists();
  } catch (error: any) {
    throw new Error(error.message);
  }

  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
        <div className={styles.sidebarIcon}>
          <SVG className={styles.logout} icon="logout" />
        </div>
      </div>
      {hasSidebar && (
        <div className={styles.sidebarBlock}>
          <div className={styles.sidebarList}>
            {playlists.map((playlist, index) => {
              return (
                <SidebarItem
                  key={`playlist${index}`}
                  src={`/img/playlist${index + 1}.png`}
                  alt={playlist.name}
                  categoryId={playlist.id}
                />
              )
            }
            )}
          </div>
        </div>
      )}
    </div>
  );
};

