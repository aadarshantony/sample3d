"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function AlienModel() {
  const { scene } = useGLTF("/models/cute_alien_character.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
      <primitive
        object={clonedScene}
        scale={1.25}
        position={[0, 0, 0]}
      />
    </Float>
  );
}

function LoaderMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
    meshRef.current.rotation.y = state.clock.elapsedTime * 1;
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[0.7, 0]} />
      <meshBasicMaterial color="#22d3ee" wireframe />
    </mesh>
  );
}

export default function AlienViewer() {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.5, 4.5], fov: 40 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
        <pointLight position={[-3, 2, 2]} intensity={2} color="#22d3ee" />
        <pointLight position={[3, -1, -2]} intensity={1.2} color="#6366f1" />

        <Suspense fallback={<LoaderMesh />}>
          <AlienModel />
          <Environment preset="city" />
          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          makeDefault
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/cute_alien_character.glb");