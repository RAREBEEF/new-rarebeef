import { Canvas } from "@react-three/fiber";
import { ReactElement } from "react";
import FlipLine from "./FlipLine";
import { useSelector } from "react-redux";
import { ReduxStateType, setStartStateType } from "../types";

const Flip = (): ReactElement => {
  //
  //FIXME: 최하위 FlipCard 컴포넌트에서 리덕스 state를 불러올 수 없음. 이유 알아보기.
  //
  const { start } = useSelector(
    (state: ReduxStateType): setStartStateType => state.setStart
  );

  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "500px",
        position: "absolute",
        top: 0,
        zIndex: 1000,
      }}
    >
      <pointLight position={[0, 0, -10]} />
      <FlipLine position={[0, -4, 0]} start={start} />
      <FlipLine position={[0, -3, 0]} start={start} />
      <FlipLine position={[0, -2, 0]} start={start} />
      <FlipLine position={[0, -1, 0]} start={start} />
      <FlipLine position={[0, 0, 0]} start={start} center={true} />
      <FlipLine position={[0, 1, 0]} start={start} />
      <FlipLine position={[0, 2, 0]} start={start} />
      <FlipLine position={[0, 3, 0]} start={start} />
      <FlipLine position={[0, 4, 0]} start={start} />
    </Canvas>
  );
};

export default Flip;
