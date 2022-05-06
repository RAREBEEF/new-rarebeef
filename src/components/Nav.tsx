import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { NavPropType } from "../types";
import styles from "./Nav.module.scss";
const Nav: React.FC<NavPropType> = ({}): ReactElement => {
  return (
    <ul className={styles.container}>
      <NavLink to="/" className={styles.item}>
        <li>Home</li>
      </NavLink>
      <NavLink to="/profile" className={styles.item}>
        <li>About me</li>
      </NavLink>
      <NavLink to="/contact" className={styles.item}>
        <li>Contact</li>
      </NavLink>
    </ul>
  );
};

export default Nav;
