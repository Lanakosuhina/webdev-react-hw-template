import styles from "../Burger/Burger.module.css";

type BurgerType = {
  onClick: () => void,
};

export default function Burger({ onClick } : BurgerType) {
  return (
    <button className={styles.navBurger} onClick={onClick}>
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
    </button>
  );
}
