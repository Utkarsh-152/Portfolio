import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Notebook(props: any) {
  const group = useRef<THREE.Group>();

  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 2) / 6, 0.1);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, Math.sin(t) / 10, 0.1);
    }
  });

  return (
    <group ref={group} {...props}>
      {/* Base of the notebook */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.2, 4]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      
      {/* Pages */}
      <mesh castShadow receiveShadow position={[0, 0.15, 0]}>
        <boxGeometry args={[2.8, 0.1, 3.8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Spine detail */}
      <mesh castShadow receiveShadow position={[-1.4, 0.15, 0]}>
        <boxGeometry args={[0.2, 0.25, 3.8]} />
        <meshStandardMaterial color="#d0d0d0" />
      </mesh>
    </group>
  );
}