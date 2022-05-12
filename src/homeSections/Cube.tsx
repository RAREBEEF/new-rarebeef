import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import styles from "./Cube.module.scss";
import gsap from "gsap";

import { CubePropType } from "../types";
import classNames from "classnames";
import Header from "../components/Header";

const Cube: React.FC<CubePropType> = ({}): ReactElement => {
  const [lastX, setLastX] = useState<number>(-25);
  const [lastY, setLastY] = useState<number>(25);

  const dragStart = useCallback(
    (e: any) => {
      e.stopPropagation();
      let isClick = true;
      let clickX = 0;
      let clickY = 0;

      let moveX = 0;
      let moveY = 0;

      clickX = e.screenX;
      clickY = e.screenY;

      window.addEventListener("mousemove", (e) => {
        if (isClick) {
          const nowX = e.screenX;
          const nowY = e.screenY;

          moveX = lastX + clickY - nowY;
          moveY = lastY - clickX + nowX;

          gsap.to(`.${styles["cube"]}`, 0, {
            transform: `rotateX(${moveX}deg) rotateY(${moveY}deg)`,
          });
        }
      });

      window.addEventListener(
        "mouseup",
        (e) => {
          if (isClick) {
            setLastX(moveX);
            setLastY(moveY);
            isClick = false;
          }
        },
        { once: true }
      );
    },
    [lastX, lastY]
  );

  // const touchDragStart = useCallback(
  //   (e: any) => {
  //     e.stopPropagation();
  //     let isTouch = true;
  //     let clickX = 0;
  //     let clickY = 0;

  //     let moveX = 0;
  //     let moveY = 0;

  //     clickX = e.targetTouches[0].screenX;
  //     clickY = e.targetTouches[0].screenY;

  //     window.addEventListener("touchmove", (e) => {
  //       if (isTouch) {
  //         const nowX = e.targetTouches[0].screenX;
  //         const nowY = e.targetTouches[0].screenY;

  //         moveX = lastX + clickY - nowY;
  //         moveY = lastY - clickX + nowX;

  //         gsap.to(`.${styles["cube"]}`, 0, {
  //           transform: `rotateX(${moveX}deg) rotateY(${moveY}deg)`,
  //         });
  //       }
  //     });

  //     window.addEventListener(
  //       "touchend",
  //       (e) => {
  //         if (isTouch) {
  //           setLastX(moveX);
  //           setLastY(moveY);
  //           isTouch = false;
  //         }
  //       },
  //       { once: true }
  //     );
  //   },
  //   [lastX, lastY]
  // );

  return (
    <div className={styles.container}>
      <Header title="Cube" subTitle={["without Three.js"]} classes={["Cube"]} />
      <div
        onMouseDown={dragStart}
        // onTouchStart={touchDragStart}
        className={classNames(styles.cube)}
      >
        <div className={classNames(styles.face, styles.front)}></div>
        <div className={classNames(styles.face, styles.back)}></div>
        <div className={classNames(styles.face, styles.top)}></div>
        <div className={classNames(styles.face, styles.bottom)}></div>
        <div className={classNames(styles.face, styles.left)}></div>
        <div className={classNames(styles.face, styles.right)}></div>
      </div>
    </div>
  );
};

export default Cube;
