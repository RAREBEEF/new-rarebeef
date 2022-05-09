import { ReactElement } from "react";
import styles from "./MetaBeef.module.scss";
import Header from "../components/Header";
import img from "../images/meta-beef.png";
import { MetaBeefPropType } from "../types";

const MetaBeef: React.FC<MetaBeefPropType> = ({}): ReactElement => {
  return (
    <section className={styles.container}>
      <Header title={["Meta", "Beef"]} classes={["MetaBeef"]} />
      <div className={styles.content}>
        <img className={styles.img} src={img} alt="Meta Beef" />
      </div>
    </section>
  );
};

export default MetaBeef;
