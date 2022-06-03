import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import { BeefModelPropType } from "../types";
import gsap from "gsap";

type GLTFResult = GLTF & {
  nodes: {
    겉면001: THREE.Mesh;
    표면001: THREE.Mesh;
    무늬1001: THREE.Mesh;
    무늬2001: THREE.Mesh;
    무늬3001: THREE.Mesh;
    테두리002: THREE.Mesh;
  };
  materials: {
    겉면: THREE.MeshStandardMaterial;
    표면: THREE.MeshStandardMaterial;
    무늬: THREE.MeshStandardMaterial;
    테두리: THREE.MeshStandardMaterial;
  };
};

const BeefModel: React.FC<BeefModelPropType> = ({
  refProp,
  position = [0, -0.1, 0],
  rotation = [0, 0, 0],
  setBeefActive,
  beefActive,
  setMouseOver,
}) => {
  const { nodes, materials } = useGLTF("/models/beef.glb") as GLTFResult;

  useFrame(() => {
    // if (beefActive && refProp.current.position.y < -0.1) {
    //   refProp.current?.translateZ(0.05);
    // }
  });

  const onBeefClick = () => {
    setBeefActive((prev: boolean): boolean => {
      if (!prev) {
        gsap.to(refProp.current.position, 1, {
          ease: "Power2.easeInOut",
          y: 1,
        });
      } else if (!!prev) {
        gsap.to(refProp.current.position, 1, {
          ease: "Power2.easeInOut",
          y: position[1],
        });
      }

      return !prev;
    });
  };

  const onPointerEnter = () => {
    setMouseOver(true);
  };

  const onPointerLeave = () => {
    setMouseOver(false);
  };

  return (
    <group
      ref={refProp}
      dispose={null}
      scale={1}
      position={position}
      rotation={rotation}
    >
      <mesh
        geometry={nodes.겉면001.geometry}
        material={materials.겉면}
        position={[-0.35, 0.05, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[11.58, 1, 14.34]}
        castShadow
      />
      <mesh
        geometry={nodes.표면001.geometry}
        material={materials.표면}
        position={[-0.35, 0.04, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[11.58, 1, 14.34]}
        castShadow
      />
      <mesh
        geometry={nodes.무늬1001.geometry}
        material={materials.무늬}
        position={[-1.24, 0.47, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[11.58, 1, 14.34]}
        castShadow
      />
      <mesh
        geometry={nodes.무늬2001.geometry}
        material={materials.무늬}
        position={[1.36, -0.38, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[11.58, 1, 14.34]}
        castShadow
      />
      <mesh
        geometry={nodes.무늬3001.geometry}
        material={materials.무늬}
        position={[0.03, -0.23, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[11.58, 1, 14.34]}
        castShadow
      />
      <mesh
        geometry={nodes.테두리002.geometry}
        material={materials.테두리}
        position={[-0.35, 0.04, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[11.58, 1, 14.34]}
        onClick={onBeefClick}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        castShadow
      />
    </group>
  );
};

useGLTF.preload("/models/beef.glb");

export default BeefModel;
