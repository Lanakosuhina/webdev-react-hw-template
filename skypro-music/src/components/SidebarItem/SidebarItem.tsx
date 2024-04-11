import Image from "next/image";
import styles from "./SidebarItem.module.css";
import Link from "next/link";

type SidebarItemProps = {
  src: string;
  alt: string;
  categoryId: number,
};

export default function SidebarItem({ src, alt, categoryId }: SidebarItemProps) {
  return (
    <div className={styles.sidebarItem}>
      <Link className={styles.sidebarLink} href={`/tracks/category/${categoryId}`}>
        <Image
          className={styles.sidebarImg}
          src={src}
          alt={alt}
          width={250}
          height={150}
        />
      </Link>
    </div>
  );
}