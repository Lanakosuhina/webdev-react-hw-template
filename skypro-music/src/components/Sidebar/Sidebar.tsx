import styles from "../Sidebar/Sidebar.module.css"
import React from "react"
import SVG from "../SVG/SVG"
import { CategoryType, getPlaylists } from "@/app/api/sidebarAPI"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/app/contexts/UserContext";

type SidebarType = {
  hasSidebar: boolean;
};

export default async function Sidebar({ hasSidebar }: SidebarType) {
  const SidebarItem = React.lazy(() => import('../SidebarItem/SidebarItem'))
  // const { handleUserLogout } = useUser();
  // const router = useRouter();
  // const { isAuthenticated, setIsAuthenticated } = useUserContext();

  let playlists: CategoryType[];
  try {
    playlists = await getPlaylists();
  } catch (error: any) {
    throw new Error(error.message);
  }
  
  // const handleLogout = () => {
  //   // Perform logout logic here, e.g., clearing tokens, session, etc.
  //   setIsAuthenticated(false);
  //   router.push('/signin');
  // };

  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
        <div className={styles.sidebarIcon}>
          <Link href={'/signin'} 
            // onClick={(event) => {
            //   event.preventDefault();
            //   handleUserLogout();
            // }}
          >
            <SVG className={styles.logout} icon="logout" />
          </Link>
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

