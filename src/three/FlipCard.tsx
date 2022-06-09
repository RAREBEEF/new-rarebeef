import React, { ReactElement, useCallback, useEffect, useRef } from "react";
import gsap, { Power3, Power1 } from "gsap";
import angleToRadians from "../tools/angleToRadians";
import { FlipCardPropType } from "../types";



const FlipCard: React.FC<FlipCardPropType> = ({
  position = [0, 0, 0],
  start,
  center,
}): ReactElement => {
  const cardRef = useRef<any>(null);

  const animationStart = useCallback(() => {
    if (!cardRef.current) {
      return;
    }

    const delay = center ? 0 : Math.random() * 1 + 1;

    gsap.to(cardRef.current.rotation, 3, {
      x: angleToRadians(Math.random() * 6000 - 3000),
      y: angleToRadians(Math.random() * 6000 - 3000),
      ease: Power1.easeInOut,
      delay,
    });

    gsap.to(cardRef.current.position, 3, {
      z: -1000,
      ease: Power3.easeInOut,
      delay,
    });
  }, [center]);

  useEffect((): void => {
    if (!start) {
      return;
    }

    animationStart();

    return;
  }, [animationStart, start]);

  // const onPointerLeave = useCallback((e: any) => {
  //   if (!cardRef.current) {
  //     return;
  //   }

  //   gsap.to(cardRef.current.rotation, 3, {
  //     delay: 1.5,
  //     x: angleToRadians(0),
  //     y: angleToRadians(0),
  //     ease: Power1.easeInOut,
  //   });
  //   gsap.to(cardRef.current.position, 3, {
  //     delay: 1.5,
  //     z: 0,
  //     ease: Power3.easeInOut,
  //   });
  // }, []);

  // useEffect(() => {
  //   onPointerEnter();
  // }, [onPointerEnter]);

  return (
    <mesh
      ref={cardRef}
      position={position}
      // onPointerEnter={onPointerEnter}
      // onPointerLeave={onPointerLeave}
    >
      <boxGeometry args={[1, 1, 0.3]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default FlipCard;
