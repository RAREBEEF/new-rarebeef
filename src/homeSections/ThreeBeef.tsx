import { ReactElement, useCallback, useState } from "react";
import Header from "../components/Header";
import styles from "./ThreeBeef.module.scss";
import { Canvas } from "@react-three/fiber";
import Three from "../components/Three";
import { ThreeBeefPropType } from "../types";
import classNames from "classnames";
import monitorImg from "../images/monitor2.png";
import blenderImg from "../images/skills/blender-brands.svg";
import threeImg from "../images/skills/three-brands.svg";
import Skill from "../components/Skill";
import Button from "../components/Button";

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
      <div className={styles.content}>
        <div className={classNames(styles.skills, styles.box)}>
          <h3 className={styles["box__title"]}>Skills</h3>
          <div className={styles["skill-icons"]}>
            <Skill skill="blender" />
            <Skill skill="three" />
          </div>
        </div>
        <div className={classNames(styles.description, styles.box)}>
          <h3 className={styles["box__title"]}>Description</h3>
          <p className={styles["description__text"]}>
            {
              "소고기와 접시의 3D 모델은 블렌더로 제작하였습니다. \n 제작한 모델은 Three.js를 통해 브라우저로 불러와서 렌더링하였으며 조명과 배경 등은 Three.js의 자체 기능으로 구현하였습니다."
            }
          </p>
        </div>
        <div className={classNames(styles.links, styles.box)}>
          <h3 className={styles["box__title"]}>Links</h3>
          <div className={styles["links-wrapper"]}>
            <Button
              text="모델 제작 과정"
              href="https://velog.io/@drrobot409/Blender-3D-%EB%A1%9C%EA%B3%A0-%EC%A0%9C%EC%9E%91"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeBeef;
