'use client'
import Link from "next/link"
import styles from "../Menu/Menu.module.css"
import { Burger } from "../Burger"
import { useState } from "react"

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
            <Link href={"/"} className={styles.menuLink}>
              Мой плейлист
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href={'/signin'} className={styles.menuLink}>
              Войти
            </Link>
          </li >
        </ul >
      </div >
)}
    </>
  )
}