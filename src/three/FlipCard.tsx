import React, { ReactElement, useRef } from "react";
import gsap, { Power3, Power1 } from "gsap";
import angleToRadians from "../tools/angleToRadians";
import { FlipCardPropType } from "../types";

const FlipCard: React.FC<FlipCardPropType> = ({
  position = [0, 0, 0],
}): ReactElement => {
  const cardRef = useRef<any>(null);
  // const [isFall, setIsFall] = useState<boolean>(false);

  // const animationStart = useCallback(() => {
  //   if (!cardRef.current) {
  //     return;
  //   }

  //   const delay = Math.random() * 1;

  //   gsap.to(cardRef.current.rotation, 3, {
  //     x: angleToRadians(Math.random() * 6000 - 3000),
  //     y: angleToRadians(Math.random() * 6000 - 3000),
  //     ease: Power1.easeInOut,
  //     delay,
  //   });

  //   gsap.to(cardRef.current.position, 3, {
  //     z: -1000,
  //     ease: Power3.easeInOut,
  //     delay,
  //   });
  // }, []);

  // useEffect((): void => {
  //   if (isFall) {
  //     return;
  //   }

  //   const canvas = document.getElementById("flip-canvas");

  //   window.addEventListener("scroll", () => {
  //     if (!isFall && canvas && canvas.getBoundingClientRect().top <= 100) {
  //       setIsFall(true);
  //     }
  //   });

  //   // animationStart();

  //   return;
  // }, [animationStart, isFall]);

  // useEffect(() => {
  //   if (!isFall) {
  //     return;
  //   }
  //   animationStart();
  // }, [animationStart, isFall]);

  const onPointerEnter = () => {
    if (!cardRef.current) {
      return;
    }

    gsap.to(cardRef.current.rotation, 3, {
      x: angleToRadians(Math.random() * 6000 - 3000),
      y: angleToRadians(Math.random() * 6000 - 3000),
      ease: Power1.easeInOut,
    });

    gsap.to(cardRef.current.position, 3, {
      z: -1000,
      ease: Power3.easeInOut,
    });
  };

  const onPointerLeave = (e: any) => {
    if (!cardRef.current) {
      return;
    }

    gsap.to(cardRef.current.rotation, 3, {
      delay: 2,
      x: angleToRadians(0),
      y: angleToRadians(0),
      ease: Power1.easeInOut,
    });
    gsap.to(cardRef.current.position, 3, {
      delay: 2,
      z: 0,
      ease: Power3.easeInOut,
    });
  };

  return (
    <mesh
      ref={cardRef}
      position={position}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerEnter}
      onPointerUp={onPointerLeave}
    >
      <boxGeometry args={[1, 1, 0.3]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

export default FlipCard;
