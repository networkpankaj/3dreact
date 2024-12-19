import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';

function Model({ mousePosition }) {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
  const modelRef = useRef();

  useEffect(() => {
    if (!modelRef.current) return;

    const handleMouseMove = () => {
      gsap.to(modelRef.current.rotation, {
        x: mousePosition.y * 0.1,
        y: mousePosition.x * 0.1,
        duration: 1,
        ease: 'power2.out',
      });
    };

    handleMouseMove();
  }, [mousePosition]);

  return <primitive ref={modelRef} object={scene} />;
}

export const BannerModel = () => {
  const containerRef = useRef();
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="h-[500px] w-full">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
        <Stage environment="city" intensity={0.6}>
          <Model mousePosition={mousePosition} />
        </Stage>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};