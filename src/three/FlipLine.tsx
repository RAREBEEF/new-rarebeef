import { ReactElement } from "react";
import { FlipLinePropType } from "../types";
import FlipCard from "./FlipCard";

const FlipLine: React.FC<FlipLinePropType> = ({
  position = [0, 0, 0],
  center,
  first = false,
  second = false,
  third = false,
  forth = false,
  fifth = false,
}): ReactElement => {
  return (
    <group position={position}>
      <FlipCard position={[-9, 0, 0]} />
      {!first && <FlipCard position={[-8, 0, 0]} />}
      <FlipCard position={[-7, 0, 0]} />
      {!first && <FlipCard position={[-6, 0, 0]} />}
      <FlipCard position={[-5, 0, 0]} />
      {!first && !second && <FlipCard position={[-4, 0, 0]} />}
      {!first && <FlipCard position={[-3, 0, 0]} />}
      <FlipCard position={[-2, 0, 0]} />
      {!first && !second && !third && !forth && !fifth && (
        <FlipCard position={[-1, 0, 0]} />
      )}
      {!first && !second && <FlipCard />}
      {!first && !second && !third && <FlipCard position={[1, 0, 0]} />}
      <FlipCard position={[2, 0, 0]} />
      {!first && <FlipCard position={[3, 0, 0]} />}
      {!first && !second && <FlipCard position={[4, 0, 0]} />}
      <FlipCard position={[5, 0, 0]} />
      <FlipCard position={[6, 0, 0]} />
      {!first && <FlipCard position={[7, 0, 0]} />}
      {!first && <FlipCard position={[8, 0, 0]} />}
      <FlipCard position={[9, 0, 0]} />
    </group>
  );
};

export default FlipLine;
