"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, OrbitControls, Sparkles } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

type SneakerProps = {
  accent: string;
};

const Sneaker = ({ accent }: SneakerProps) => {
  const gradient = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#ffffff",
        metalness: 0.2,
        roughness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.1
      }),
    []
  );

  return (
    <group>
      <mesh castShadow receiveShadow material={gradient} position={[0, 0, 0]}>
        <boxGeometry args={[1.4, 0.55, 0.6]} />
      </mesh>
      <mesh castShadow receiveShadow position={[0.2, 0.35, 0]} material={gradient}>
        <boxGeometry args={[1.1, 0.35, 0.55]} />
      </mesh>
      <mesh castShadow position={[0, 0.6, 0]} material={gradient}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
      </mesh>
      <mesh castShadow position={[0.4, 0.45, 0.28]}>
        <boxGeometry args={[0.18, 0.18, 0.2]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.35} />
      </mesh>
      <mesh castShadow position={[0.4, 0.45, -0.28]}>
        <boxGeometry args={[0.18, 0.18, 0.2]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.35} />
      </mesh>
    </group>
  );
};

type StylizedModelProps = {
  accent: string;
  flipped?: boolean;
};

const StylizedModel = ({ accent, flipped }: StylizedModelProps) => {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.2) * 0.5;
    group.current.rotation.z = Math.sin(t * 0.15 + (flipped ? Math.PI / 2 : 0)) * 0.1;
  });

  return (
    <group ref={group} position={flipped ? [1.7, -0.1, 0] : [-1.7, 0, 0]} rotation={[0, flipped ? -0.3 : 0.3, 0]}>
      <Float floatIntensity={0.6} rotationIntensity={0.4}>
        <mesh position={[0, 1.6, 0]} castShadow>
          <sphereGeometry args={[0.34, 32, 32]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.15} />
        </mesh>
        <mesh position={[0, 0.7, 0]} castShadow>
          <capsuleGeometry args={[0.18, 1.1, 12, 24]} />
          <meshStandardMaterial color="#1b1d25" metalness={0.1} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.05, 0.22]} castShadow>
          <boxGeometry args={[0.38, 0.9, 0.2]} />
          <meshStandardMaterial color="#13151b" />
        </mesh>
        <group position={[0, -0.75, 0.18]}>
          <Sneaker accent={accent} />
        </group>
        <group position={[0, -0.75, -0.18]} rotation={[0, Math.PI, 0]}>
          <Sneaker accent={accent} />
        </group>
        <mesh position={[0.34, 0.85, 0]} rotation={[0, 0, 0.4]}>
          <boxGeometry args={[0.18, 0.65, 0.18]} />
          <meshStandardMaterial color="#151720" />
        </mesh>
        <mesh position={[-0.34, 0.85, 0]} rotation={[0, 0, -0.4]}>
          <boxGeometry args={[0.18, 0.65, 0.18]} />
          <meshStandardMaterial color="#151720" />
        </mesh>
      </Float>
    </group>
  );
};

const Centerpiece = () => {
  const rig = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!rig.current) return;
    const t = clock.getElapsedTime();
    rig.current.rotation.y = Math.sin(t * 0.35) * 0.4;
    rig.current.position.y = Math.sin(t * 0.6) * 0.12;
  });

  return (
    <group ref={rig} position={[0, 0.5, 0]}>
      <Float floatIntensity={0.5} rotationIntensity={0.8}>
        <group scale={1.4}>
          <mesh castShadow receiveShadow>
            <torusKnotGeometry args={[0.6, 0.16, 220, 12]} />
            <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.1, 0]} castShadow>
            <coneGeometry args={[0.4, 0.9, 32]} />
            <meshStandardMaterial color="#ff5c8a" emissive="#ff5c8a" emissiveIntensity={0.3} wireframe />
          </mesh>
        </group>
        <group position={[0, -0.85, 0]}>
          <Sneaker accent="#6ef8ff" />
        </group>
      </Float>
    </group>
  );
};

const SceneContent = () => {
  return (
    <>
      <color attach="background" args={["#06070d"]} />
      <hemisphereLight intensity={0.68} color="#ffffff" groundColor="#0a0b12" />
      <spotLight
        position={[4, 6, 3]}
        intensity={2.4}
        angle={0.5}
        penumbra={0.8}
        color="#6ef8ff"
        castShadow
      />
      <spotLight
        position={[-4, 5, -2]}
        intensity={1.8}
        angle={0.6}
        penumbra={0.7}
        color="#ff5c8a"
        castShadow
      />
      <directionalLight position={[0, 3, 5]} intensity={0.8} color="#ffffff" />
      <group position={[0, -1, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[14, 14]} />
          <meshStandardMaterial color="#11131a" metalness={0.1} roughness={0.7} />
        </mesh>
      </group>
      <Centerpiece />
      <StylizedModel accent="#6ef8ff" />
      <StylizedModel accent="#ff5c8a" flipped />
      <Sparkles count={120} scale={[10, 4, 10]} size={4} speed={0.3} color="#6ef8ff" />
      <Environment preset="city" />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
    </>
  );
};

export const HeroCanvas = () => (
  <Canvas
    shadows
    gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
    camera={{ position: [0, 2.2, 6.5], fov: 36 }}
    style={{ width: "100%", height: "100%" }}
  >
    <Suspense fallback={null}>
      <SceneContent />
    </Suspense>
  </Canvas>
);
