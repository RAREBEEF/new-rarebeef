import { useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import angleToRadians from "../tools/angleToRadians";
import ToDoModel from "../models/ToDoModel";
import WeatherModel from "../models/WeatherModel";
import { PhonesPropType } from "../types";
import gsap from "gsap";

const Phones: React.FC<PhonesPropType> = ({ sectionRef }) => {
  const [scale, setScale] = useState<number>(
    ((window.innerWidth - 300) / 1200) * 0.3 + 0.7
  );
  const controlRef = useRef<any>(null);
  const groupRef = useRef<any>(null);

  useEffect((): void => {
    if (!controlRef.current) {
      return;
    }

    const currentRef = controlRef.current;
    currentRef.enableZoom = false;
    currentRef.enablePan = false;
    currentRef.enableRotate = false;
    currentRef.reverseOrbit = false;
    currentRef.object.position.z = 0;
    currentRef.object.position.x = -5;
    currentRef.object.position.y = -1;
  }, []);

  useEffect(() => {
    const windowScrollListner = () => {
      if (!sectionRef.current || !controlRef.current) {
        return;
      }

      const controlPos = controlRef.current.object.position;
      const setcion = sectionRef.current;
      // (뷰포트 상단 기준 section top의 y 위치) / (800vh - sticy요소(content) 높이)
      // fixed 시작 시점이 0,
      // fixed가 해제될 때 100이 된다.
      let scrollDegree =
        (setcion.getBoundingClientRect().top /
          (window.innerHeight * 8 - setcion.childNodes[1].clientHeight)) *
        -1;

      if (scrollDegree <= 0 || scrollDegree >= 1.5) {
        return;
      }

      if (scrollDegree >= 0 && scrollDegree < 0.2) {
        scrollDegree *= 5;

        gsap.to(controlPos, 0.3, {
          x: -5 + 5 * scrollDegree,
          y: -1,
          z: 0 + 3 * scrollDegree,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.2 && scrollDegree < 0.4) {
        scrollDegree = (scrollDegree - 0.2) * 5;

        gsap.to(controlPos, 0.3, {
          x: 0 + 5 * scrollDegree,
          y: -1,
          z: 3 - 3 * scrollDegree,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.4 && scrollDegree < 0.6) {
        scrollDegree = (scrollDegree - 0.4) * 5;

        gsap.to(controlPos, 0.3, {
          x: 5 - 5 * scrollDegree,
          y: -1,
          z: 0 - 1 * scrollDegree,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.6 && scrollDegree < 0.8) {
        scrollDegree = (scrollDegree - 0.6) * 5;

        gsap.to(controlPos, 0.3, {
          x: 0,
          y: -1 - 5.5 * scrollDegree,
          z: -1,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.8 && scrollDegree <= 1.05) {
        scrollDegree = (scrollDegree - 0.8) * 5;

        gsap.to(controlPos, 0.3, {
          x: 0 - 5 * scrollDegree,
          y: -6.5 + 6 * scrollDegree,
          z: -1 + 6 * scrollDegree,
          ease: "linear",
        });
      }
    };

    window.addEventListener("scroll", windowScrollListner);

    const windowResizeListner = () => {
      setScale(
        window.innerWidth < 300
          ? 0.7
          : window.innerWidth > 1500
          ? 1
          : ((window.innerWidth - 300) / 1200) * 0.3 + 0.7
      );
    };

    window.addEventListener("resize", windowResizeListner);

    return () => {
      window.removeEventListener("scroll", windowScrollListner);
      window.removeEventListener("resize", windowResizeListner);
    };
  }, [sectionRef]);

  return (
    <>
      <group
        ref={groupRef}
        scale={scale}
        // rotation={[0, angleToRadians(-45), 0]}
        // rotation={[0, angleToRadians(45), 0]}
        // rotation={[0, 0, 0]}
        // position={[0, -1, 0]}
      >
        <ToDoModel
          rotation={[angleToRadians(90), 0, 0]}
          // scale={0.02}
          scale={0.03}
          // position={[-1.1, 0.3, 0]}
          position={[0, 0, 0.5]}
        />
        <WeatherModel
          rotation={[angleToRadians(90), 0, angleToRadians(180)]}
          scale={0.03}
          // position={[1.1, -0.3, 0]}
          position={[0, -2, -0.5]}
        />
        <OrbitControls ref={controlRef} />
        {/* <PerspectiveCamera  /> */}
        {/* <spotLight
          args={["#fff", 1, 80, angleToRadians(100), 0.4]}
          position={[0, 0, -10]}
        /> */}
        {/* <spotLight
          args={["#fff", 1, 80, angleToRadians(200), 0]}
          position={[0, 5, 0]}
        /> */}
        <pointLight args={["#fff", 3]} position={[0, 0, -10]} />
        <pointLight args={["#fff", 3]} position={[0, 0, 10]} />
      </group>
    </>
  );
};

export default Phones;
