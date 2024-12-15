import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { celestialObjects } from '../data/solarSystem';
import { CelestialObject } from './celestial/CelestialObject';
import { Orbits } from './celestial/Orbits';
import { useStore } from '../store/useStore';

interface Props {
  timeScale: number;
}

export function SolarSystem({ timeScale }: Props) {
  const systemRef = useRef<Group>(null);
  const showOrbits = useStore((state) => state.showOrbits);

  useFrame((state, delta) => {
    if (systemRef.current) {
      // Update orbital positions based on time
      celestialObjects.forEach((object, index) => {
        if (object.type !== 'star') {
          const child = systemRef.current!.children[index];
          const orbitalSpeed = (2 * Math.PI) / (object.orbitalPeriod * 24 * 60 * 60);
          child.rotation.y += orbitalSpeed * delta * timeScale;
        }
      });
    }
  });

  return (
    <group ref={systemRef}>
      {showOrbits && <Orbits />}
      {celestialObjects.map((object) => (
        <CelestialObject key={object.id} object={object} />
      ))}
    </group>
  );
}
