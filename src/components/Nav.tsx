import { ReactElement, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavPropType } from "../types";
import styles from "./Nav.module.scss";
import menuIcon from "../images/circle-bars.svg";
import classNames from "classnames";

const Nav: React.FC<NavPropType> = ({}): ReactElement => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  return (
    <div className={styles.container}>
      <img
        className={classNames(
          styles["menu-icon"],
          showMenu && styles["show-menu"]
        )}
        src={menuIcon}
        alt="menu"
        onClick={onClick}
      />
      <ul className={classNames(styles.menu, showMenu && styles["show-menu"])}>
        <div className={styles["menu__left-side"]} onClick={onClick} />
        <div className={styles["menu__right-side"]}>
          <NavLink to="/" className={styles.item}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/profile" className={styles.item}>
            <li>About me</li>
          </NavLink>
          <NavLink to="/contact" className={styles.item}>
            <li>Contact</li>
          </NavLink>
          <footer className={classNames(styles.footer, styles.item)}>
            &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
          </footer>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
