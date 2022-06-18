import { ReactElement, useEffect, useRef } from "react";
import styles from "./Front.module.scss";
import logo from "../images/logos/beef.svg";
import { FrontPropType } from "../types";
import classNames from "classnames";
import gsap from "gsap";

const Front: React.FC<FrontPropType> = (): ReactElement => {
  const clipPathRef = useRef<any>(null);
  const fakeSubTitleRef = useRef<any>(null);
  const realSubTitleRef = useRef<any>(null);
  const realTitleRef = useRef<any>(null);
  const realLogoRef = useRef<any>(null);

  useEffect(() => {
    const windowScrollListner = () => {
      if (
        !clipPathRef.current ||
        !fakeSubTitleRef.current ||
        !realSubTitleRef.current ||
        !realLogoRef.current ||
        !realTitleRef.current ||
        window.scrollY / (window.innerHeight * 2) > 1.5
      ) {
        return;
      }

      let scrollDegree = (window.scrollY / (window.innerHeight * 2)) * -100;

      gsap.to(clipPathRef.current, 0.3, {
        clipPath: `inset(${
          scrollDegree <= -100 ? -100 : 100 + scrollDegree
        }% 0px 0px)`,
      });

      gsap.to(fakeSubTitleRef.current, 0.3, {
        transform: `translateY(${25 + scrollDegree * 0.3}vmin)`,
      });
      gsap.to(realSubTitleRef.current, 0.3, {
        transform: `translateY(${25 + scrollDegree * 0.3}vmin)`,
      });
      gsap.to(realLogoRef.current, 0.3, {
        transform: `translateY(${20 + scrollDegree * 0.2}vmin)`,
      });
      gsap.to(realTitleRef.current, 0.3, {
        transform: `translateY(${10 + scrollDegree * 0.05}vmin)`,
      });
    };

    window.addEventListener("scroll", windowScrollListner);

    return () => {
      window.removeEventListener("scroll", windowScrollListner);
    };
  }, []);

  return (
    <section className={classNames(styles.container)}>
      <div className={styles.bg} />
      <main className={styles.content}>
        <div className={styles.fake}>
          <h1
            ref={fakeSubTitleRef}
            className={styles["sub-title"]}
            style={{ transform: `translateY(25vmin)` }}
          >
            RAREBEEF's
          </h1>
          <img className={classNames(styles.logo)} src={logo} alt="RARE BEEF" />
          <h1 className={styles.title}>Portfolio</h1>
        </div>
        <hgroup
          ref={clipPathRef}
          className={styles.real}
          style={{ clipPath: "inset(100% 0px 0px)" }}
        >
          <h1 ref={realSubTitleRef} className={styles["sub-title"]}>
            RAREBEEF's
          </h1>
          <img
            ref={realLogoRef}
            className={styles.logo}
            src={logo}
            alt="RARE BEEF"
          />
          <h1 ref={realTitleRef} className={styles.title}>
            Portfolio
          </h1>
        </hgroup>
      </main>
    </section>
  );
};

export default Front;
