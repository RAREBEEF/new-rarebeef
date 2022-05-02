import {
  ReactElement,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";
import Header from "../components/Header";
import styles from "./ThreeBeef.module.scss";
import { Canvas } from "@react-three/fiber";
import Three from "../components/Three";
import { ThreeBeefPropType } from "../types";
import classNames from "classnames";
import dragIcon from "../images/compress-solid.svg";
import scrollIcon from "../images/angle-left-solid.svg";
import ScrollDown from "../components//ScrollDown";

const ThreeBeef: React.FC<ThreeBeefPropType> = ({
  scrollProgress,
}): ReactElement => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [draggable, setDraggable] = useState<boolean>(false);

  const onModChange = useCallback(() => {
    setDraggable((prev) => !prev);
  }, []);

  return (
    <div
      className={styles.container}
      style={{ cursor: mouseOver ? "pointer" : draggable ? "grab" : "default" }}
    >
      <Header title={["The", ["Rare Beef"]]} />

      <div
        className={classNames(styles["drag-mod"], styles["mod-changer"])}
        onClick={onModChange}
        style={{
          opacity: draggable ? 0 : 1,
          pointerEvents: draggable ? "none" : "all",
        }}
      >
        Click to look around
        <img
          className={styles["drag-mod__icon"]}
          src={dragIcon}
          alt="Mod change"
        />
      </div>

      <div
        className={classNames(styles["scroll-mod"], styles["mod-changer"])}
        onClick={onModChange}
        style={{
          opacity: draggable ? 1 : 0,
          pointerEvents: draggable ? "all" : "none",
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
          pointerEvents: draggable ? "all" : "none",
        }}
        shadows
      >
        <Suspense>
          <Three
            setMouseOver={setMouseOver}
            draggable={draggable}
            scrollProgress={scrollProgress}
          />
        </Suspense>
      </Canvas>
      <ScrollDown draggable={draggable} />
    </div>
  );
};

export default ThreeBeef;
