import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Car } from "./Car";
import { City } from "./City";
import Plane from "./Plane";

export default function Playground() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[1, 0, 1]} />
      <Plane position={[-30, -3, 30]} />
      <Car position={[0, 0, 0]} />
      <City position={[0, -3, 0]} />
    </Canvas>
  );
}
