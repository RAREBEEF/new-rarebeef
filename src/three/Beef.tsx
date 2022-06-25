import { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import BeefModel from "../models/BeefModel";
import { BeefPropType } from "../types";
import gsap from "gsap";
import angleToRadians from "../tools/angleToRadians";
import PlateModel from "../models/PlateModel";

const Beef: React.FC<BeefPropType> = ({ sectionRef, setShowText }) => {
  const controlRef = useRef<any>(null);
  const groupRef = useRef<any>(null);
  const beefRef = useRef<any>(null);
  const plateRef = useRef<any>(null);
  const lightRef = useRef<any>(null);

  useEffect((): void => {
    if (
      !controlRef.current ||
      !groupRef.current ||
      !beefRef.current ||
      !plateRef.current
    ) {
      return;
    }

    const control = controlRef.current;
    const beef = beefRef.current;

    control.enableZoom = false;
    control.enablePan = false;
    control.enableRotate = false;
    control.reverseOrbit = false;
    control.object.position.x = 0;
    control.object.position.y = 20;
    control.object.position.z = 0;
    beef.rotation.x = angleToRadians(-90);
    beef.position.y = 30;
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

      const setcion = sectionRef.current;
      const control = controlRef.current;
      const beef = beefRef.current;
      const light = lightRef.current;

      // (뷰포트 상단 기준 section top의 y 위치) / (600vh - sticy요소(content) 높이)
      // fixed 시작 시점이 0,
      // fixed가 해제될 때 100이 된다.
      let scrollDegree =
        (setcion.getBoundingClientRect().top /
          (window.innerHeight * 6 - setcion.childNodes[1].clientHeight)) *
        -1;

      if (scrollDegree >= 0 && scrollDegree < 0.2) {
        scrollDegree *= 5;
        setShowText(false);

        gsap.to(control.object.position, 0.3, {
          x: 0,
          y: 20 - 10 * scrollDegree,
          z: 0,
          ease: "linear",
        });
        gsap.to(beef.position, 0.3, {
          y: 30,
          ease: "linear",
        });
        gsap.to(light.position, 0.3, {
          x: 0,
          y: 10,
          z: 0,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.2 && scrollDegree < 0.4) {
        scrollDegree = (scrollDegree - 0.2) * 5;
        setShowText(false);

        gsap.to(control.object.position, 0.3, {
          x: 0,
          y: 10 - 3 * scrollDegree,
          z: 0,
          ease: "linear",
        });
        gsap.to(beef.position, 0.3, {
          y: 30 - 10 * scrollDegree,
          ease: "linear",
        });
        gsap.to(light.position, 0.3, {
          x: 0,
          y: 10,
          z: 0,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.4 && scrollDegree < 0.6) {
        scrollDegree = (scrollDegree - 0.4) * 5;
        setShowText(false);

        gsap.to(control.object.position, 0.3, {
          x: 0,
          y: 7 - 1 * scrollDegree,
          z: 0 + 4 * scrollDegree,
          ease: "linear",
        });
        gsap.to(beef.position, 0.3, {
          y: 20 - 15 * scrollDegree,
          ease: "linear",
        });
        gsap.to(light.position, 0.3, {
          x: 0,
          y: 10,
          z: 0 - 4 * scrollDegree,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.6 && scrollDegree < 0.8) {
        scrollDegree = (scrollDegree - 0.6) * 5;
        setShowText(true);

        gsap.to(control.object.position, 0.3, {
          x: 0,
          y: 6 - 1 * scrollDegree,
          z: 4 + 2 * scrollDegree,
          ease: "linear",
        });
        gsap.to(beef.position, 0.3, {
          y: 5 - 4 * scrollDegree,
          ease: "linear",
        });
        gsap.to(light.position, 0.3, {
          x: 0,
          y: 10,
          z: -4 - 3 * scrollDegree,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.8 && scrollDegree <= 1) {
        scrollDegree = (scrollDegree - 0.8) * 5;
        setShowText(false);

        gsap.to(control.object.position, 0.3, {
          x: 0,
          y: 5 - 1 * scrollDegree,
          z: 6 + 1 * scrollDegree,
          ease: "linear",
        });
        gsap.to(beef.position, 0.3, {
          y: 1 - 1 * scrollDegree,
          ease: "linear",
        });
        gsap.to(light.position, 0.3, {
          x: 0 + 1.5 * scrollDegree,
          y: 10 - 7 * scrollDegree,
          z: -7 + 4 * scrollDegree,
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
        <BeefModel beefRef={beefRef} />
        <PlateModel plateRef={plateRef} />
        <OrbitControls ref={controlRef} />

        {/* <PerspectiveCamera  /> */}
        {/* <spotLight
          args={["#fff", 1, 80, angleToRadians(100), 0.4]}
          position={[0, 0, -10]}
        /> */}
        <spotLight
          args={["#fff", 0.8, 0, angleToRadians(50), 0.5, 0]}
          position={[0, 10, 0]}
          ref={lightRef}
          castShadow
        />
        {/* <pointLight args={["#fff", 2]} position={[0, 0, -10]} /> */}
        {/* <pointLight args={["#fff", 2]} position={[0, 0, 10]} /> */}
        <ambientLight args={["#fff", 0.2]} />
      </group>
    </>
  );
};

export default Beef;
