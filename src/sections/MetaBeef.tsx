import { ReactElement } from "react";
import styles from "./MetaBeef.module.scss";
import Header from "../components/Header";
import img from "../images/meta-beef.png";
import ScrollDown from "../components/ScrollDown";

const MetaBeef = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Header title={["Meta", "Beef"]} classes={["MetaBeef"]} />
      <div className={styles.content}>
        <img className={styles.img} src={img} alt="Meta Beef" />
      </div>
      <ScrollDown />
    </div>
  );
};

export default MetaBeef;
