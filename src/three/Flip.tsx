import { Canvas } from "@react-three/fiber";
import { ReactElement } from "react";
import FlipLine from "./FlipLine";
import { useSelector } from "react-redux";
import { ReduxStateType, setAnimationStateType } from "../types";

const Flip = (): ReactElement => {
  //
  //FIXME: FlipCard 컴포넌트에서 리덕스 state를 불러올 수 없음. 이유 알아보기.
  //
  const { animationStart } = useSelector(
    (state: ReduxStateType): setAnimationStateType => state.setAnimation
  );

  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "1000px",
        position: "fixed",
        margin: "auto",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        pointerEvents: animationStart ? "none" : "all",
      }}
    >
      <pointLight position={[0, 0, 10]} args={["whitesmoke", 3, 0, 1]} />
      <FlipLine position={[0, -4, 0]} start={animationStart} />
      <FlipLine position={[0, -3, 0]} start={animationStart} />
      <FlipLine position={[0, -2, 0]} start={animationStart} />
      <FlipLine position={[0, -1, 0]} start={animationStart} />
      <FlipLine position={[0, 0, 0]} start={animationStart} center={true} />
      <FlipLine position={[0, 1, 0]} start={animationStart} />
      <FlipLine position={[0, 2, 0]} start={animationStart} />
      <FlipLine position={[0, 3, 0]} start={animationStart} />
      <FlipLine position={[0, 4, 0]} start={animationStart} />
    </Canvas>
  );
};

export default Flip;
