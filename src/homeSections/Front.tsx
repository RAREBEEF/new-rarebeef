import { ReactElement } from "react";
import styles from "./Front.module.scss";
import logo from "../images/beef.svg";
import ScrollDown from "../components/ScrollDown";
import { FrontPropType } from "../types";
import classNames from "classnames";
import Nav from "../components/Nav";

const Front: React.FC<FrontPropType> = (): ReactElement => {
  return (
    <section className={classNames(styles.container)}>
      <Nav />
      <div className={styles.content}>
        <img className={styles.logo} src={logo} alt="RARE BEEF" />
      </div>
      <ScrollDown />
    </section>
  );
};

export default Front;
