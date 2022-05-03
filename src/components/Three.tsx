import { useCallback, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import angleToRadians from "../tools/angleToRadians";
import { Vector3 } from "three";
import BeefModel from "../models/BeefModel";
import PlateModel from "../models/PlateModel";
import { ThreePropType } from "../types";

const Three: React.FC<ThreePropType> = ({
  setMouseOver,
  scrollToThreeBeefProgress,
  scrollMod,
}) => {
  const [beefActive, setBeefActive] = useState<boolean>(false);
  const groupRef = useRef<THREE.Group>(null);
  const beefRef = useRef<THREE.Group>(null);

  const controlRef = useRef<any>(null);

  useEffect(() => {
    console.log(controlRef);
    const currentRef = controlRef.current;
    currentRef.object.position.setY(4);
    currentRef.enableZoom = true;
    currentRef.enablePan = false;
    currentRef.reverseOrbit = false;
    // currentRef.target.set = ([0, -10, 0]);
  }, []);

  // useFrame((state) => {
  //   const currentBeef = beefRef.current;

  //   if (currentBeef) {
  //     const { x, y } = state.mouse;
  //     currentBeef?.rotation.set(
  //       angleToRadians(50) * y,
  //       -x * angleToRadians(190),
  //       0
  //     );
  //   }
  // });

  useFrame(() => {
    if (!!groupRef.current) {
      groupRef.current.position.set(
        10.2 - scrollToThreeBeefProgress / 10,
        0,
        0
      );
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <BeefModel
          refProp={beefRef}
          rotation={[angleToRadians(-90), 0, 0]}
          position={[0, 0, 0]}
          setBeefActive={setBeefActive}
          beefActive={beefActive}
          setMouseOver={setMouseOver}
        />
        <PlateModel />
        <OrbitControls
          ref={controlRef}
          maxDistance={8}
          minDistance={3}
          maxPolarAngle={angleToRadians(80)}
        />
        <ambientLight args={["white", 0.2]} />
        <spotLight
          args={["#fff", 0.5, 80, angleToRadians(100), 0.4]}
          position={[1, 3, 0]}
          castShadow
        />
        <group rotation={[0, angleToRadians(-30), 0]}>
          {/* floor */}
          <mesh
            rotation={[angleToRadians(-90), 0, 0]}
            position={[0, -0.18, 0]}
            receiveShadow
          >
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color="white" />
          </mesh>

          {/* ceil */}
          <mesh
            rotation={[angleToRadians(90), 0, 0]}
            position={[0, 500, 0]}
            receiveShadow
          >
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color="white" />
          </mesh>

          {/* wall */}
          {/* front */}
          <mesh position={[0, 497.7, -10]} receiveShadow>
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color="white" />
          </mesh>
          {/* left */}
          <mesh
            rotation={[0, angleToRadians(90), 0]}
            position={[-500, 497.7, 0]}
            receiveShadow
          >
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color="white" />
          </mesh>
          {/* right */}
          <mesh
            rotation={[0, angleToRadians(-90), 0]}
            position={[500, 497.7, 0]}
            receiveShadow
          >
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color="white" />
          </mesh>
          <mesh
            position={[0, 497.7, 500]}
            rotation={[0, angleToRadians(180), 0]}
            receiveShadow
          >
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </group>
      </group>
    </>
  );
};

export default Three;
