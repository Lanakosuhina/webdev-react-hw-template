import Image from "next/image";
import styles from "./Playlist.module.css";
import Link from "next/link";

type Playlist = {
  src: any,
  alt: string
}

export default function Playlist({ src, alt }: Playlist) {
  return (
    <div className={styles.sidebarItem}>
      <Link className={styles.sidebarLink} href="#">
      <Image
        className={styles.sidebarImg}
        src={src}
        alt={alt}
        width={250}
        height={150}
      />
    </Link>
    </div >
  )
}