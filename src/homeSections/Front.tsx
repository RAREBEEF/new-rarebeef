import { ReactElement } from "react";
import styles from "./Front.module.scss";
import logo from "../images/beef.svg";
import shadow from "../images/shadow.svg";
import ScrollDown from "../components/ScrollDown";
import { FrontPropType } from "../types";
import classNames from "classnames";
import Header from "../components/Header";

const Front: React.FC<FrontPropType> = (): ReactElement => {
  return (
    <section className={classNames(styles.container)}>
      <Header
        title={["Portfolio"]}
        subTitle={["by", "RAREBEEF"]}
        classes={["Front"]}
      />
      <div className={styles.content}>
        <img className={styles.shadow} src={shadow} alt="Shadow" />
        <img className={styles.logo} src={logo} alt="RARE BEEF" />
      </div>
      <ScrollDown />
    </section>
  );
};

export default Front;
