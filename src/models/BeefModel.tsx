import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { BeefModelPropType } from "../types";

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

const BeefModel: React.FC<BeefModelPropType> = ({ beefRef }) => {
  const { nodes, materials } = useGLTF("/models/beef.glb") as GLTFResult;

  const onBeefClick = () => {
    const win = window.open(
      "https://drive.google.com/file/d/1sfBqd8BRLTbYAK3rcXpflO4fBj0hIRj5/view?usp=sharing",
      "_blank"
    );

    if (!win) {
      return;
    }

    win.focus();
  };
  const onPointerEnter = () => {
    const bodyEl = document.querySelector("body");

    if (!bodyEl) {
      return;
    }

    bodyEl.style.cursor = "pointer";
  };
  const onPointerLeave = () => {
    const bodyEl = document.querySelector("body");

    if (!bodyEl) {
      return;
    }

    bodyEl.style.cursor = "default";
  };

  return (
    <group ref={beefRef} dispose={null} scale={1} position={[0.2, 0, 0.3]}>
      <mesh
        onClick={onBeefClick}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
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
        castShadow
      />
    </group>
  );
};

useGLTF.preload("/models/beef.glb");

export default BeefModel;
