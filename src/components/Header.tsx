import logoImg from "../assets/logo.svg";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logoImg} alt="Todo App" />
    </div>
  );
}
