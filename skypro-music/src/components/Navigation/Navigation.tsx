import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import styles from "../Navigation/Navigation.module.css"

export default function Navigation() {
  return (
    <nav className={styles.mainNav}>
      <Logo />
      <Menu />
    </nav>
  )
}