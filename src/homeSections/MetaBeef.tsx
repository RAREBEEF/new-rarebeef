import { ReactElement } from "react";
import styles from "./MetaBeef.module.scss";
import Header from "../components/Header";
import img from "../images/meta-beef.png";
import { MetaBeefPropType } from "../types";

const MetaBeef: React.FC<MetaBeefPropType> = ({}): ReactElement => {
  return (
    <section className={styles.container}>
      <Header
        title={["Meta", "Beef"]}
        subTitle={["Simple", "SNS"]}
        classes={["MetaBeef"]}
      />
      <img className={styles["img--main"]} src={img} alt="Meta Beef" />
      <div className={styles.content}></div>
    </section>
  );
};

export default MetaBeef;
