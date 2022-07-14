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
  const fakeTitleRef = useRef<any>(null);
  const realTitleRef = useRef<any>(null);

  useEffect(() => {
    const windowScrollListner = () => {
      // (Y스크롤 / (continaer 요소 높이(200vh) - sticky 요소 높이(100vh))) * 100
      // === Y스크롤 / 100vh * 100
      let scrollDegree = (window.scrollY / window.innerHeight) * 100;

      if (
        !clipPathRef.current ||
        !fakeSubTitleRef.current ||
        !fakeTitleRef.current ||
        !realSubTitleRef.current ||
        !realTitleRef.current ||
        scrollDegree >= 130
      ) {
        return;
      }

      const clipPath = clipPathRef.current;
      const fakeSubTitle = fakeSubTitleRef.current;
      const fakeTitle = fakeTitleRef.current;
      const realSubTitle = realSubTitleRef.current;
      const realTitle = realTitleRef.current;

      if (scrollDegree >= 100) {
        clipPath.style.clipPath = "inset(-100% 0px 0px)";
      } else {
        gsap.to(clipPath, 0.1, {
          clipPath: `inset(${100 - scrollDegree}% 0px 0px)`,
        });
      }

      gsap.to(fakeSubTitle, 0.3, {
        transform: `translateY(${15 - scrollDegree * 0.15}vmin)`,
      });
      gsap.to(fakeTitle, 0.3, {
        transform: `translateY(${-15 + scrollDegree * 0.15}vmin)`,
      });
      gsap.to(realSubTitle, 0.3, {
        transform: `translateY(${15 - scrollDegree * 0.15}vmin)`,
      });
      gsap.to(realTitle, 0.3, {
        transform: `translateY(${-15 + scrollDegree * 0.15}vmin)`,
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
            style={{ transform: `translateY(15vmin)` }}
          >
            RAREBEEF's
          </h1>
          <img className={classNames(styles.logo)} src={logo} alt="RARE BEEF" />
          <h1
            ref={fakeTitleRef}
            className={styles.title}
            style={{ transform: `translateY(-15vmin)` }}
          >
            Portfolio
          </h1>
        </div>
        <hgroup
          ref={clipPathRef}
          className={styles.real}
          style={{ clipPath: "inset(100% 0px 0px)" }}
        >
          <h1 ref={realSubTitleRef} className={styles["sub-title"]}>
            RAREBEEF's
          </h1>
          <img className={styles.logo} src={logo} alt="RARE BEEF" />
          <h1 ref={realTitleRef} className={styles.title}>
            Portfolio
          </h1>
        </hgroup>
      </main>
    </section>
  );
};

export default Front;
