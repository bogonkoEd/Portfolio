/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Decal,
  Float,
  Preload,
  useTexture,
} from "@react-three/drei";

import Loader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.78} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
        colFor="white"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2*Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
