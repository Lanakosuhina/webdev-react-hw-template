'use client'
import Link from "next/link";
import styles from "./HeaderUser.module.css"
import { SVG } from "../SVG";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { useRouter } from "next/navigation";
import { logout } from "@/app/store/features/AuthSlice";

export default function HeaderUser() {

  const dispatch = useAppDispatch();
  const router = useRouter();
  const userName = useAppSelector((store) => store.auth.user?.username)

  const handleLogout = () => {
    dispatch(logout())
    router.replace('/signin');
  };

  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>{userName}</p>
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
  )
}