import { useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import angleToRadians from "../tools/angleToRadians";
import ToDoModel from "../models/ToDoModel";
import WeatherModel from "../models/WeatherModel";
import { PhonesPropType } from "../types";
import gsap from "gsap";

const Phones: React.FC<PhonesPropType> = ({ sectionRef }) => {
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
  }, []);

  useEffect(() => {
    const windowScrollListner = () => {
      if (
        !sectionRef.current ||
        sectionRef.current.getBoundingClientRect().top /
          (window.innerHeight * 5 -
            sectionRef.current.childNodes[1].clientHeight) >=
          0 ||
        sectionRef.current.getBoundingClientRect().top /
          (window.innerHeight * 5 -
            sectionRef.current.childNodes[1].clientHeight) <=
          -1.5
      ) {
        return;
      }
      
      gsap.to(groupRef.current.rotation, 0.3, {
        y: angleToRadians(
          -180 -
            180 *
              (sectionRef.current.getBoundingClientRect().top /
                (window.innerHeight * 5 -
                  sectionRef.current.childNodes[1].clientHeight))
        ),
      });
    };

    window.addEventListener("scroll", windowScrollListner);

    return () => {
      window.removeEventListener("scroll", windowScrollListner);
    };
  }, [sectionRef]);

  return (
    <>
      <group ref={groupRef} rotation={[0, angleToRadians(-180), 0]}>
        <ToDoModel
          rotation={[angleToRadians(90), 0, 0]}
          scale={0.02}
          position={[-1.1, 0.3, 0]}
        />
        <WeatherModel
          rotation={[angleToRadians(90), 0, 0]}
          scale={0.02}
          position={[1.1, -0.3, 0]}
        />
        <OrbitControls ref={controlRef} />
        <spotLight
          args={["#fff", 1, 80, angleToRadians(100), 0.4]}
          position={[0, 0, -10]}
        />
      </group>
    </>
  );
};

export default Phones;
