import { ReactElement } from "react";
import styles from "./Beef.module.scss";
import Header from "../components/Header";
import logo from "../images/beef.svg";
import ScrollDown from "../components//ScrollDown";
import { BeefPropType } from "../types";
import classNames from "classnames";

const Beef: React.FC<BeefPropType> = (): ReactElement => {
  return (
    <div className={classNames(styles.container)}>
      {/* <Header title={["The", "Rare Beef"]} /> */}
      <div className={styles.content}>
        <img className={styles.logo} src={logo} alt="RARE BEEF" />
      </div>
      <ScrollDown />
    </div>
  );
};

export default Beef;
