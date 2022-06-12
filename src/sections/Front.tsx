import { ReactElement, useEffect, useState } from "react";
import styles from "./Front.module.scss";
import logo from "../images/logos/beef.svg";
import ScrollDown from "../components/ScrollDown";
import { FrontPropType } from "../types";
import classNames from "classnames";

const Front: React.FC<FrontPropType> = ({}): ReactElement => {
  const [scrollDegree, setScrollDegree] = useState<number>(0);

  useEffect(() => {
    const windowScrollListner = () => {
      if (window.scrollY / (window.innerHeight * 2) > 1.5) {
        return;
      }

      setScrollDegree((window.scrollY / (window.innerHeight * 2)) * -100);
    };

    window.addEventListener("scroll", windowScrollListner);

    return () => {
      window.removeEventListener("scroll", windowScrollListner);
    };
  }, []);

  return (
    <section className={classNames(styles.container)}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <div className={styles.fake}>
          <h2
            className={styles["sub-title"]}
            style={{
              transform: `translateY(${25 + scrollDegree * 0.3}vmin)`,
            }}
          >
            RAREBEEF's
          </h2>
          <img className={classNames(styles.logo)} src={logo} alt="RARE BEEF" />
          <h1 className={styles.title}>Portfolio</h1>
        </div>
        <div
          className={styles.real}
          style={{
            clipPath: `inset(${
              scrollDegree <= -100 ? -100 : 100 + scrollDegree
            }% 0px 0px)`,
          }}
        >
          <h2
            className={styles["sub-title"]}
            style={{
              transform: `translateY(${25 + scrollDegree * 0.3}vmin)`,
            }}
          >
            RAREBEEF's
          </h2>
          <img
            className={styles.logo}
            src={logo}
            alt="RARE BEEF"
            style={{
              transform: `translateY(${20 + scrollDegree * 0.2}vmin)`,
            }}
          />
          <h1
            className={styles.title}
            style={{
              transform: `translateY(${10 + scrollDegree * 0.05}vmin)`,
            }}
          >
            Portfolio
          </h1>

          <ScrollDown />
        </div>
      </div>
    </section>
  );
};

export default Front;
