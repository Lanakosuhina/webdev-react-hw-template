//'use client'
import styles from "../Sidebar/Sidebar.module.css"
import React from "react"
import { CategoryType, getPlaylists } from "@/app/api/sidebarAPI"
import HeaderUser from "../HeaderUser/HeaderUser";

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
      <HeaderUser />
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

