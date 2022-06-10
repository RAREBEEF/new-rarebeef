import { ReactElement, useEffect, useRef, useState } from "react";
import styles from "./Front.module.scss";
import logo from "../images/logos/beef.svg";
import ScrollDown from "../components/ScrollDown";
import { FrontPropType } from "../types";
import classNames from "classnames";
import Header from "../components/Header";

const Front: React.FC<FrontPropType> = ({}): ReactElement => {
  const triggerRef = useRef<any>(null);
  const [clipPath, setClipPath] = useState<number>(100);

  useEffect(() => {
    const windowScrollListner = () => {
      if (!triggerRef) {
        return;
      }

      const trigger = triggerRef.current;
      setClipPath(
        trigger.getBoundingClientRect().top / 20 <= -100
          ? -100
          : trigger.getBoundingClientRect().top / 20
      );
    };

    window.addEventListener("scroll", windowScrollListner);
  }, []);
  return (
    <section className={classNames(styles.container)} ref={triggerRef}>
      <div className={styles.content}>
        <div className={styles.fake}>
          <h2 className={styles["sub-title"]}>RAREBEEF's</h2>
          <img className={classNames(styles.logo)} src={logo} alt="RARE BEEF" />
          {/* <Header
            title={["Portfolio"]}
            subTitle={["by", "RAREBEEF"]}
            classes={["Front", "fake"]}
          /> */}
          <h1 className={styles.title}>Portfolio</h1>
        </div>
        <div
          className={styles.real}
          style={{
            clipPath: `inset(${100 + clipPath}% 0px 0px)`,
          }}
        >
          <h2 className={styles["sub-title"]}>RAREBEEF's</h2>
          <img className={styles.logo} src={logo} alt="RARE BEEF" />
          {/* <Header
            title={["Portfolio"]}
            subTitle={["by", "RAREBEEF"]}
            classes={["Front"]}
          /> */}
          <h1 className={styles.title}>Portfolio</h1>

          <ScrollDown />
        </div>
      </div>
    </section>
  );
};

{
  /* <Header
          title={["Portfolio"]}
          subTitle={["by", "RAREBEEF"]}
          classes={["Front"]}
        /> */
}
export default Front;
