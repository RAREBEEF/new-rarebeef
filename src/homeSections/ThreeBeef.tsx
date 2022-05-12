import { ReactElement, useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "./ThreeBeef.module.scss";
import { Canvas } from "@react-three/fiber";
import Three from "../components/Three";
import { ThreeBeefPropType } from "../types";
import classNames from "classnames";
import cursorIcon from "../images/arrow-pointer-solid.svg";
import monitorImg from "../images/monitor2.png";

const ThreeBeef: React.FC<ThreeBeefPropType> = ({}): ReactElement => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const onDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const onDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section
      className={styles.container}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
    >
      <Header
        title={["3D", "Beef"]}
        subTitle={["with Three.js"]}
        classes={["ThreeBeef"]}
      />
      <div className={styles.monitor}>
        <img
          className={styles["img--monitor"]}
          src={monitorImg}
          alt="monitor"
        />
        <Canvas
          className={styles.canvas}
          style={{
            cursor: mouseOver ? "pointer" : isDragging ? "grabbing" : "grab",
          }}
          shadows
        >
          <Three setMouseOver={setMouseOver} />
        </Canvas>
      </div>
    </section>
  );
};

export default ThreeBeef;
