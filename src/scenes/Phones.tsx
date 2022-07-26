import { useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import angleToRadians from "../tools/angleToRadians";
import ToDoModel from "../models/ToDoModel";
import WeatherModel from "../models/WeatherModel";
import { PhonesPropType } from "../types";
import gsap from "gsap";
import useCalcScroll from "../hooks/useCalcScroll";

const Phones: React.FC<PhonesPropType> = ({ sectionRef }) => {
  const calcScroll = useCalcScroll(sectionRef);
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

      let scrollProgress = calcScroll(8);

      if (scrollProgress <= 0 || scrollProgress >= 1.5) {
        return;
      }

      if (scrollProgress >= 0 && scrollProgress < 0.2) {
        scrollProgress *= 5;

        gsap.to(controlPos, 0.3, {
          x: -5 + 5 * scrollProgress,
          y: -1,
          z: 0 + 3 * scrollProgress,
          ease: "linear",
        });
      } else if (scrollProgress >= 0.2 && scrollProgress < 0.4) {
        scrollProgress = (scrollProgress - 0.2) * 5;

        gsap.to(controlPos, 0.3, {
          x: 0 + 5 * scrollProgress,
          y: -1,
          z: 3 - 3 * scrollProgress,
          ease: "linear",
        });
      } else if (scrollProgress >= 0.4 && scrollProgress < 0.6) {
        scrollProgress = (scrollProgress - 0.4) * 5;

        gsap.to(controlPos, 0.3, {
          x: 5 - 5 * scrollProgress,
          y: -1,
          z: 0 - 1 * scrollProgress,
          ease: "linear",
        });
      } else if (scrollProgress >= 0.6 && scrollProgress < 0.8) {
        scrollProgress = (scrollProgress - 0.6) * 5;

        gsap.to(controlPos, 0.3, {
          x: 0,
          y: -1 - 5.5 * scrollProgress,
          z: -1,
          ease: "linear",
        });
      } else if (scrollProgress >= 0.8 && scrollProgress <= 1.05) {
        scrollProgress = (scrollProgress - 0.8) * 5;

        gsap.to(controlPos, 0.3, {
          x: 0 - 5 * scrollProgress,
          y: -6.5 + 6 * scrollProgress,
          z: -1 + 6 * scrollProgress,
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
  }, [calcScroll, sectionRef]);

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
