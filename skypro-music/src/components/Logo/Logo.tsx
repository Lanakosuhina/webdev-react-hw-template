import Image from "next/image";
import styles from "../Logo/Logo.module.css"
import Link from "next/link";
export default function Logo() {
  return (
    <div className={styles.navLogo}>
      <Link href={"/"}>
        <Image className={styles.logoImage} src="/img/logo.png" alt="logo" width={113} height={17} />
      </Link>
    </div>
  )
}