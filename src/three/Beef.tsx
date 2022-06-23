import { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import BeefModel from "../models/BeefModel";
import { BeefPropType } from "../types";
import gsap from "gsap";

const Beef: React.FC<BeefPropType> = ({ sectionRef, setShowText }) => {
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
    currentRef.object.position.x = 0;
    currentRef.object.position.y = -3;
    currentRef.object.position.z = 7;
  }, []);

  useEffect(() => {
    const windowScrollListner = () => {
      if (
        !sectionRef.current ||
        sectionRef.current.getBoundingClientRect().top /
          (window.innerHeight * 6 -
            sectionRef.current.childNodes[1].clientHeight) >=
          0 ||
        sectionRef.current.getBoundingClientRect().top /
          (window.innerHeight * 6 -
            sectionRef.current.childNodes[1].clientHeight) <=
          -1.5
      ) {
        return;
      }

      // (뷰포트 상단 기준 section top의 y 위치) / (600vh - sticy요소(content) 높이)
      // fixed 시작 시점이 0,
      // fixed가 해제될 때 100이 된다.
      let scrollDegree =
        (sectionRef.current.getBoundingClientRect().top /
          (window.innerHeight * 6 -
            sectionRef.current.childNodes[1].clientHeight)) *
        -1;

      if (scrollDegree >= 0 && scrollDegree < 0.2) {
        scrollDegree *= 5;
        setShowText(false);

        gsap.to(controlRef.current.object.position, 0.3, {
          x: 0,
          y: -3 + 1 * scrollDegree,
          z: 7 - 3 * scrollDegree,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.2 && scrollDegree < 0.4) {
        scrollDegree = (scrollDegree - 0.2) * 5;
        setShowText(false);

        gsap.to(controlRef.current.object.position, 0.3, {
          x: 0,
          y: -2 + 1 * scrollDegree,
          z: 4 - 1 * scrollDegree,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.4 && scrollDegree < 0.6) {
        scrollDegree = (scrollDegree - 0.4) * 5;
        setShowText(false);

        gsap.to(controlRef.current.object.position, 0.3, {
          x: 0 - 4 * scrollDegree,
          y: -1 + 1 * scrollDegree,
          z: 3 - 3 * scrollDegree,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.6 && scrollDegree < 0.8) {
        scrollDegree = (scrollDegree - 0.6) * 5;
        setShowText(false);

        gsap.to(controlRef.current.object.position, 0.3, {
          x: -4 + 4 * scrollDegree,
          y: 0 + 2 * scrollDegree,
          z: 0 - 4 * scrollDegree,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.8 && scrollDegree <= 1.05) {
        scrollDegree = (scrollDegree - 0.8) * 5;
        setShowText(true);

        gsap.to(controlRef.current.object.position, 0.3, {
          x: 0 + 1 * scrollDegree,
          y: 2 + 2 * scrollDegree,
          z: -4 - 3 * scrollDegree,
          ease: "linear",
        });
      }
    };

    window.addEventListener("scroll", windowScrollListner);

    return () => {
      window.removeEventListener("scroll", windowScrollListner);
    };
  }, [sectionRef, setShowText]);

  return (
    <>
      <group
        ref={groupRef}
        // rotation={[0, angleToRadians(-45), 0]}
        // rotation={[0, angleToRadians(45), 0]}
        // rotation={[0, 0, 0]}
        // position={[0, -1, 0]}
      >
        {/* <ToDoModel
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
        /> */}
        <BeefModel />
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
        {/* <pointLight args={["#fff", 2]} position={[0, 0, -10]} /> */}
        {/* <pointLight args={["#fff", 2]} position={[0, 0, 10]} /> */}
        <ambientLight args={["#fff", 0.8]} />
      </group>
    </>
  );
};

export default Beef;
