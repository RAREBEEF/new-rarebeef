import { ReactElement, useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "./ThreeBeef.module.scss";
import { Canvas } from "@react-three/fiber";
import Three from "../components/Three";
import { ThreeBeefPropType } from "../types";
import classNames from "classnames";
import cursorIcon from "../images/arrow-pointer-solid.svg";

const ThreeBeef: React.FC<ThreeBeefPropType> = ({
  scrollMod,
  setScrollMod,
}): ReactElement => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const onModChange = useCallback(() => {
    setScrollMod(false);
  }, [setScrollMod]);

  const onDragStart = useCallback(() => {
    if (!scrollMod) {
      setIsDragging(true);
    }
  }, [scrollMod]);
  const onDragEnd = useCallback(() => {
    if (!scrollMod) {
      setIsDragging(false);
    }
  }, [scrollMod]);

  return (
    <section
      className={styles.container}
      style={{
        cursor: mouseOver
          ? "pointer"
          : scrollMod
          ? "default"
          : isDragging
          ? "grabbing"
          : "grab",
      }}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
    >
      <div className={styles["sticky-wrapper"]}>
        <Header title={["The", "Rare Beef"]} classes={["ThreeBeef"]} />
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
              styles["icon--drag-mod"],
              styles["icont--drag-mod__cursor"]
            )}
            src={cursorIcon}
            alt="Mod change"
          />
          Click to look around
        </div>

        <Canvas
          className={styles.canvas}
          style={{
            pointerEvents: scrollMod ? "none" : "all",
          }}
          shadows
        >
          <Three setMouseOver={setMouseOver} scrollMod={scrollMod} />
        </Canvas>
      </div>
      <section className={styles["content-one"]}>쏼라쏼라</section>
    </section>
  );
};

export default ThreeBeef;
