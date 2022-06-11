import { Canvas } from "@react-three/fiber";
import { ReactElement } from "react";
import FlipLine from "./FlipLine";

const Flip = (): ReactElement => {
  return (
    <Canvas
      id="flip-canvas"
      style={{
        // backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        minHeight: "1000px",
        margin: "auto",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <pointLight position={[0, 0, -5]} args={["white", 10, 0, 0]} />

      {/* <FlipLine position={[0, -4, 0]} /> */}
      {/* <FlipLine position={[0, -3, 0]} /> */}
      <FlipLine position={[0, -2, 0]} first={true} />
      <FlipLine position={[0, -1, 0]} second={true} />
      <FlipLine position={[0, 0, 0]} third={true} />
      <FlipLine position={[0, 1, 0]} forth={true} />
      <FlipLine position={[0, 2, 0]} fifth={true} />
      <FlipLine position={[0, 3, 0]} />
      <FlipLine position={[0, 4, 0]} />
    </Canvas>
  );
};

export default Flip;
