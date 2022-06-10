import React, {
  ReactElement,
  useState,
  Suspense,
  useEffect,
  useRef,
} from "react";
import Header from "../components/Header";
import styles from "./ThreeBeef.module.scss";
import { Canvas } from "@react-three/fiber";
import Beef from "../three/Beef";
import { ThreeBeefPropType } from "../types";
import classNames from "classnames";
import monitorImg from "../images/monitor2.png";
import powerIcon from "../images/icons/power-off-solid.svg";
import velogIcon from "../images/icons/velog-square.svg";
import Skill from "../components/Skill";
import Button from "../components/Button";
import Loading from "../components/Loading";

const ThreeBeef: React.FC<ThreeBeefPropType> = ({}): ReactElement => {
  const sectionRef = useRef<any>(null);
  const [turnOn, setTurnOn] = useState<boolean>(false);
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const onTurnOnClick = (): void => {
    setTurnOn(true);
  };

  const onDragStart = (): void => {
    setIsDragging(true);

    return;
  };

  const onDragEnd = (): void => {
    setIsDragging(false);

    return;
  };

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const windowScrollCb = () => {
      if (
        window.scrollY < sectionRef.current.offsetTop - window.innerHeight ||
        window.scrollY > sectionRef.current.offsetTop + window.innerHeight
      ) {
        setTurnOn(false);
      }
    };

    window.addEventListener("scroll", windowScrollCb);

    return () => {
      window.removeEventListener("scroll", windowScrollCb);
    };
  }, []);

  return (
    <section
      className={styles.container}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      ref={sectionRef}
    >
      <Header
        title={["3D", "Beef"]}
        subTitle={["with Three.js"]}
        classes={["ThreeBeef"]}
      />
      <div className={styles.content}>
        <div className={styles.monitor}>
          <img
            className={styles["img--monitor"]}
            src={monitorImg}
            alt="monitor"
          />
          {turnOn ? (
            <Suspense fallback={<Loading />}>
              <Canvas
                className={styles.canvas}
                style={{
                  cursor: mouseOver
                    ? "pointer"
                    : isDragging
                    ? "grabbing"
                    : "grab",
                }}
                shadows
              >
                <Beef setMouseOver={setMouseOver} />
              </Canvas>
            </Suspense>
          ) : (
            <div className={styles.off}>
              <img
                src={powerIcon}
                onClick={onTurnOnClick}
                className={styles["btn--on"]}
                alt="Power on"
              />
            </div>
          )}
        </div>
        <div className={classNames(styles.summary, styles.box)}>
          <h3 className={styles["box__title"]}>Project summary</h3>
          <table className={styles["summary__table"]}>
            <tbody className={styles["summary__table__tbody"]}>
              <tr>
                <td>프로젝트 이름</td>
                <td>3D Beef</td>
              </tr>
              <tr>
                <td>프로젝트 기간</td>
                <td>2022.05.03</td>
              </tr>
              <tr>
                <td>개발 인원</td>
                <td>1명</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={classNames(styles.description, styles.box)}>
          <h3 className={styles["box__title"]}>Description</h3>
          <p className={styles["description__text"]}>
            {
              "소고기와 접시의 3D 모델은 블렌더로 제작하였습니다. 제작한 모델은 Three.js를 통해 브라우저로 불러와서 렌더링하였으며 조명과 배경 등은 Three.js의 자체 기능으로 구현하였습니다."
            }
          </p>
        </div>

        <div className={classNames(styles.skills, styles.box)}>
          <h3 className={styles["box__title"]}>Skills</h3>
          <ul className={styles["skill-icons"]}>
            <Skill skill="Blender" />
            <Skill skill="Three.js" />
          </ul>
        </div>
        <div
          className={classNames(styles.links, styles.box)}
          style={{ width: "150px" }}
        >
          <h3 className={styles["box__title"]}>Link</h3>
          <div className={styles["links-wrapper"]}>
            <Button
              icon={velogIcon}
              href="https://velog.io/@drrobot409/Blender-3D-%EB%A1%9C%EA%B3%A0-%EC%A0%9C%EC%9E%91"
              classes={["Home__project-link"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeBeef;
