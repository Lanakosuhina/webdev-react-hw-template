'use client'
import Link from "next/link"
import styles from "../Menu/Menu.module.css"
import { Burger } from "../Burger"
import { useState } from "react"
import { useAppSelector } from "@/app/hooks/hooks"

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const authState = useAppSelector((state) => state.auth.authState);
 //  <div>Вы сейчас {authState ? "вошли" : "вышли"}</div>;

  return (
    <>
      <Burger onClick={() => setIsOpen(prev => !prev)} />
      {isOpen && (<div className={styles.navMenu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href={"/"} className={styles.menuLink}>
              Главное
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href={"/favorites"} className={styles.menuLink}>
              Мой плейлист
            </Link>
          </li>
          <li className={styles.menuItem}>
            {authState 
            ? <Link href={'/signin'} className={styles.menuLink}>
              Войти
            </Link> 
            : <Link href={'/tracks'} className={styles.menuLink}>
              Выйти
            </Link>
            }

          </li >
        </ul >
      </div >
      )}
    </>
  )
}