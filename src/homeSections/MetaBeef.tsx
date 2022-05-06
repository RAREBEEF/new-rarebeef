import { ReactElement, useEffect } from "react";
import styles from "./MetaBeef.module.scss";
import Header from "../components/Header";
import img from "../images/meta-beef.png";
import ScrollDown from "../components/ScrollDown";
import { MetaBeefPropType } from "../types";

const MetaBeef: React.FC<MetaBeefPropType> = ({
  animationStartAt,
}): ReactElement => {
  // useEffect(() => {
  //   console.log(animationStartAt);
  // }, [animationStartAt]);
  return (
    <section className={styles.container}>
      <Header
        title={["Meta", "Beef"]}
        classes={["MetaBeef"]}
        animationStartAt={animationStartAt}
      />
      <div
        className={styles.content}
        style={{
          transform:
            animationStartAt === -1
              ? "none"
              : `translateX(${200 - animationStartAt * 2}px)`,
        }}
      >
        <img className={styles.img} src={img} alt="Meta Beef" />
      </div>
      {/* <ScrollDown /> */}
    </section>
  );
};

export default MetaBeef;
