import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { SolarSystem } from './SolarSystem';
import { useStore } from '../store/useStore';

export function Scene() {
  const timeScale = useStore((state) => state.timeScale);

  return (
    <Canvas camera={{ position: [0, 20, 20], fov: 60 }}>
      <color attach="background" args={['#000010']} />
      <Stars radius={300} depth={50} count={5000} factor={4} />
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={1} />
      <SolarSystem timeScale={timeScale} />
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        maxDistance={100}
        minDistance={5}
      />
    </Canvas>
  );
}