'use client'
import styles from "../Sidebar/Sidebar.module.css"
import React from "react"
import SVG from "../SVG/SVG"
import { CategoryType, getPlaylists } from "@/app/api/sidebarAPI"
import Link from "next/link";
import { TokenType, setAuthState } from "@/app/store/features/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { useRouter } from "next/navigation";

type SidebarType = {
  hasSidebar: boolean;
};

export default async function Sidebar({ hasSidebar }: SidebarType) {
  const SidebarItem = React.lazy(() => import('../SidebarItem/SidebarItem'))
  const user = useAppSelector((store) => store.auth.user)
  const dispatch = useAppDispatch();
  const router = useRouter();

  let playlists: CategoryType[];
  try {
    playlists = await getPlaylists();
  } catch (error: any) {
    throw new Error(error.message);
  }

  const handleLogout = () => {
    // тут как будто чушь написана
    const token: TokenType = {
      refresh: '',
      access: '',
    };
    dispatch(setAuthState(token))
    router.replace('/signin');
  };

  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>{user.email}</p>
        <div className={styles.sidebarIcon}>
          <Link href={'/signin'}
            onClick={(event) => {
              event.preventDefault();
              handleLogout();
            }}
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

