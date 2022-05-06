import { ReactElement, useEffect } from "react";
import styles from "./MetaBeef.module.scss";
import Header from "../components/Header";
import img from "../images/meta-beef.png";
import ScrollDown from "../components/ScrollDown";
import { MetaBeefPropType } from "../types";

const MetaBeef: React.FC<MetaBeefPropType> = ({}): ReactElement => {
  // useEffect(() => {
  //   console.log(animationStartAt);
  // }, [animationStartAt]);
  return (
    <section className={styles.container}>
      <Header title={["Meta", "Beef"]} classes={["MetaBeef"]} />
      <div className={styles.content}>
        <img className={styles.img} src={img} alt="Meta Beef" />
      </div>
      {/* <ScrollDown /> */}
    </section>
  );
};

export default MetaBeef;
