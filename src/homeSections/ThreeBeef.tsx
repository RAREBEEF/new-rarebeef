import { ReactElement, useCallback, useState } from "react";
import Header from "../components/Header";
import styles from "./ThreeBeef.module.scss";
import { Canvas } from "@react-three/fiber";
import Three from "../components/Three";
import { ThreeBeefPropType } from "../types";
import classNames from "classnames";
import scrollIcon from "../images/angle-left-solid.svg";
import ScrollDown from "../components/ScrollDown";
import cursorIcon from "../images/arrow-pointer-solid.svg";

const ThreeBeef: React.FC<ThreeBeefPropType> = ({
  scrollToThreeBeefProgress,
  scrollMod,
  setScrollMod,
}): ReactElement => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);

  const onModChange = useCallback(() => {
    setScrollMod((prev: boolean): boolean => !prev);
  }, [setScrollMod]);

  return (
    <section
      className={styles.container}
      style={{ cursor: mouseOver ? "pointer" : scrollMod ? "default" : "grab" }}
    >
      <Header
        title={["The", ["Rare Beef"]]}
        // animationStartAt={scrollToThreeBeefProgress}
      />
      <div
        className={classNames(styles["drag-mod"], styles["mod-changer"])}
        onClick={onModChange}
        style={{
          opacity: scrollMod ? 1 : 0,
          pointerEvents: scrollMod ? "all" : "none",
        }}
      >
        <img
          className={classNames(
            styles["drag-mod__icon"],
            styles["drag-mod__icon--cursor"]
          )}
          src={cursorIcon}
          alt="Mod change"
        />
        Click to look around
      </div>

      <div
        className={classNames(styles["scroll-mod"], styles["mod-changer"])}
        onClick={onModChange}
        style={{
          opacity: scrollMod ? 0 : 1,
          pointerEvents: scrollMod ? "none" : "all",
        }}
      >
        <img
          className={styles["scroll-mod__icon"]}
          src={scrollIcon}
          alt="Back"
        />
        &nbsp;Back to scroll mod
      </div>

      <Canvas
        className={styles.canvas}
        style={{
          pointerEvents: scrollMod ? "none" : "all",
        }}
        shadows
      >
        <Three
          setMouseOver={setMouseOver}
          scrollMod={scrollMod}
          scrollToThreeBeefProgress={scrollToThreeBeefProgress}
        />
      </Canvas>
      {/* <ScrollDown scrollMod={scrollMod} /> */}
    </section>
  );
};

export default ThreeBeef;
