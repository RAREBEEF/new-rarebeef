import { useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import BeefModel from "../models/BeefModel";
import { BeefPropType } from "../types";
import gsap from "gsap";
import angleToRadians from "../tools/angleToRadians";
import PlateModel from "../models/PlateModel";

const Beef: React.FC<BeefPropType> = ({ sectionRef, setText }) => {
  const [scale, setScale] = useState<number>(
    ((window.innerWidth - 300) / 1200) * 0.3 + 0.7
  );
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
    control.object.position.y = 10;
    control.object.position.z = 20;
    beef.rotation.x = angleToRadians(-90);
    beef.position.y = 30;
  }, []);

  useEffect(() => {
    const windowScrollListner = () => {
      if (
        !sectionRef.current ||
        sectionRef.current.getBoundingClientRect().top /
          (window.innerHeight * 10 -
            sectionRef.current.childNodes[1].clientHeight) >=
          0 ||
        sectionRef.current.getBoundingClientRect().top /
          (window.innerHeight * 10 -
            sectionRef.current.childNodes[1].clientHeight) <=
          -1.5
      ) {
        return;
      }

      const setcion = sectionRef.current;
      const control = controlRef.current;
      const beef = beefRef.current;
      const light = lightRef.current;
      const group = groupRef.current;

      // (뷰포트 상단 기준 section top의 y 위치) / (1000vh - sticy요소(content) 높이)
      // fixed 시작 시점이 0,
      // fixed가 해제될 때 100이 된다.
      let scrollDegree =
        (setcion.getBoundingClientRect().top /
          (window.innerHeight * 10 - setcion.childNodes[1].clientHeight)) *
        -1;

      if (
        (scrollDegree >= 0 && scrollDegree < 0.15) ||
        (scrollDegree >= 0.3 && scrollDegree < 0.45) ||
        (scrollDegree >= 0.6 && scrollDegree < 0.75)
      ) {
        setText(0);
      } else if (scrollDegree >= 0.15 && scrollDegree < 0.3) {
        setText(1);
      } else if (scrollDegree >= 0.45 && scrollDegree < 0.6) {
        setText(2);
      } else if (scrollDegree >= 0.75 && scrollDegree < 0.9) {
        setText(3);
      } else if (scrollDegree >= 0.9 && scrollDegree < 0.93) {
        setText(4);
      } else if (scrollDegree >= 0.93 && scrollDegree < 0.96) {
        setText(5);
      } else if (scrollDegree >= 0.96) {
        setText(6);
      } else if (scrollDegree >= 1) {
        setText(6);
        gsap.to(group.position, 0.3, {
          x: 3.5,
          y: 0,
          z: 0,
          ease: "linear",
        });
      }

      if (scrollDegree >= 0 && scrollDegree < 0.2) {
        scrollDegree *= 5;

        gsap.to(control.object.position, 0.3, {
          x: 0,
          y: 10,
          z: 20 - 5 * scrollDegree,
          ease: "linear",
        });
        gsap.to(beef.position, 0.3, {
          y: 30,
          ease: "linear",
        });
        gsap.to(light.position, 0.3, {
          x: 0,
          y: 10,
          z: -4,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.2 && scrollDegree < 0.4) {
        scrollDegree = (scrollDegree - 0.2) * 5;

        gsap.to(control.object.position, 0.3, {
          x: 0,
          y: 10,
          z: 15 - 5 * scrollDegree,
          ease: "linear",
        });
        gsap.to(beef.position, 0.3, {
          y: 30 - 20 * scrollDegree,
          ease: "linear",
        });
        gsap.to(light.position, 0.3, {
          x: 0,
          y: 10,
          z: -4,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.4 && scrollDegree < 0.6) {
        scrollDegree = (scrollDegree - 0.4) * 5;

        gsap.to(control.object.position, 0.3, {
          x: 0,
          y: 10 - 2 * scrollDegree,
          z: 10 - 5 * scrollDegree,
          ease: "linear",
        });
        gsap.to(beef.position, 0.3, {
          y: 10 - 5 * scrollDegree,
          ease: "linear",
        });
        gsap.to(light.position, 0.3, {
          x: 0,
          y: 10,
          z: -4,
          ease: "linear",
        });
      } else if (scrollDegree >= 0.6 && scrollDegree < 0.8) {
        scrollDegree = (scrollDegree - 0.6) * 5;

        gsap.to(group.position, 0.3, {
          x: 0,
          y: 0,
          z: 0,
          ease: "linear",
        });
        gsap.to(control.object.position, 0.3, {
          x: 0,
          y: 8 - 4 * scrollDegree,
          z: 5 - 5 * scrollDegree,
          ease: "linear",
        });
        gsap.to(beef.position, 0.3, {
          y: 5 - 5 * scrollDegree,
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

        gsap.to(group.position, 0.3, {
          x: 0 + 3.5 * scrollDegree,
          y: 0,
          z: 0,
          ease: "linear",
        });
        gsap.to(control.object.position, 0.3, {
          x: 0,
          y: 4,
          z: 0,
          ease: "linear",
        });
        gsap.to(beef.position, 0.3, {
          y: 0,
          ease: "linear",
        });
        gsap.to(light.position, 0.3, {
          x: 0,
          y: 10,
          z: -7,
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
  }, [sectionRef, setText]);

  return (
    <>
      <group scale={scale}>
        <group ref={groupRef}>
          <BeefModel beefRef={beefRef} />
          <PlateModel plateRef={plateRef} />
          <spotLight
            args={["#fff", 0.8, 0, angleToRadians(50), 0.5, 0]}
            position={[0, 10, 0]}
            ref={lightRef}
            castShadow
          />
        </group>
        <OrbitControls ref={controlRef} />
        <ambientLight args={["#fff", 0.2]} />
      </group>
    </>
  );
};

export default Beef;
