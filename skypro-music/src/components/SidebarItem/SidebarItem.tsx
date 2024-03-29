import Image, { StaticImageData } from "next/image";
import styles from "./SidebarItem.module.css";
import Link from "next/link";

type SidebarItemType = {
  src: StaticImageData,
  alt: string
}

export default function SidebarItem({ src, alt }: SidebarItemType) {
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