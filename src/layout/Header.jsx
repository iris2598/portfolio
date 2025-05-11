import styles from "./Layout.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const menuList = [
    { label: "About", to: "about" },
    { label: "Project", to: "project" },
    { label: "Article", to: "article" },
  ];
  return (
    <header className={styles.header}>
      <img className={styles.logo} alt="logo" />
      <div className={styles.menuList}>
        {menuList.map((menu, index) => (
          <Link className={styles.menu} to={`/${menu.to}`}>
            {menu.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
