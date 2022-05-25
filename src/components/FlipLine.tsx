import { ReactElement } from "react";
import FlipCard from "./FlipCard";

interface FlipLinePropType {
  position?: [number, number, number];
  start: boolean;
  center?: boolean;
}

const FlipLine: React.FC<FlipLinePropType> = ({
  position = [0, 0, 0],
  start,
  center,
}): ReactElement => {
  return (
    <group position={position}>
      <FlipCard position={[-9, 0, 0]} start={start} />
      <FlipCard position={[-8, 0, 0]} start={start} />
      <FlipCard position={[-7, 0, 0]} start={start} />
      <FlipCard position={[-6, 0, 0]} start={start} />
      <FlipCard position={[-5, 0, 0]} start={start} />
      <FlipCard position={[-4, 0, 0]} start={start} />
      <FlipCard position={[-3, 0, 0]} start={start} />
      <FlipCard position={[-2, 0, 0]} start={start} />
      <FlipCard position={[-1, 0, 0]} start={start} />
      <FlipCard start={start} center={center} />
      <FlipCard position={[1, 0, 0]} start={start} />
      <FlipCard position={[2, 0, 0]} start={start} />
      <FlipCard position={[3, 0, 0]} start={start} />
      <FlipCard position={[4, 0, 0]} start={start} />
      <FlipCard position={[5, 0, 0]} start={start} />
      <FlipCard position={[6, 0, 0]} start={start} />
      <FlipCard position={[7, 0, 0]} start={start} />
      <FlipCard position={[8, 0, 0]} start={start} />
      <FlipCard position={[9, 0, 0]} start={start} />
    </group>
  );
};

export default FlipLine;
