import { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import angleToRadians from "../tools/angleToRadians";
import ToDoModel from "../models/ToDoModel";
import { BeefPropType } from "../types";
import WeatherModel from "../models/WeatherModel";

const Phones: React.FC<BeefPropType> = ({ setMouseOver }) => {
  const controlRef = useRef<any>(null);

  useEffect((): void => {
    if (!controlRef.current) {
      return;
    }

    const currentRef = controlRef.current;
    // currentRef.object.position.setY(4);
    currentRef.enableZoom = false;
    currentRef.enablePan = false;
    currentRef.enableRotate = false;
    currentRef.reverseOrbit = false;
    currentRef.autoRotate = true;
    currentRef.autoRotateSpeed = 4;
    console.log(currentRef);
  }, []);

  return (
    <>
      <group>
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
